import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

import * as cheerio from 'cheerio';

@Injectable({
  providedIn: 'root'
})
export class GoogleImageService {
  constructor(private readonly http: HttpClient) { }

  search(keyword: string): Observable<string> {
    const link = `https://www.google.com/search?q=${keyword}&hl=en&tbm=isch&asearch=ichunk&async=_id:rg_s,_pms:s,_fmt:pc&sourceid=chrome&ie=UTF-8`

    const url = `https://corsproxy.io/?${link}`;
    return this.http.get(url,{responseType: 'text'})
      .pipe(map((pageContent) => {
        const $ = cheerio.load(pageContent);
        return $('div img').attr('src');
      }));
  }
}
