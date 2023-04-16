import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as cheerio from 'cheerio';
import {map, Observable} from 'rxjs';
import {Recipe} from '../../../_models/recipe';
@Injectable({
  providedIn: 'root'
})
export class AmandineCookingParserService {

  static BASE_URL = "https://www.amandinecooking.com";

  constructor(private readonly http: HttpClient) { }

  isAmandineCookingRecipe(link: string) {
    return link.startsWith(AmandineCookingParserService.BASE_URL);
  }

  parse(link: string): Observable<Recipe> {
    const url = `https://corsproxy.io/?${link}`
    return this.http.get(url,{responseType: 'text'})
      .pipe(map((pageContent) => {

        const $ = cheerio.load(pageContent);

        const name = $('h2.Post-title').text().trim();
        const image = $('.ob-section img').attr('src')?.trim();
        console.log(image)
        return {
          link, name, image
        }
      }));
  }
}
