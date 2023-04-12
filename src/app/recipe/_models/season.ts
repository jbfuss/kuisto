export enum Season {
  Spring = 'Spring',
  Summer = 'Summer',
  Autumn = 'Autumn',
  Winter = 'Winter'

}
export  const currentSeason = (): Season  => {
  const mois = new Date().getMonth();

  switch (mois) {
    case 11:
    case 0:
    case 1:
      return Season.Winter;
    case 2:
    case 3:
    case 4:
      return Season.Spring;
    case 5:
    case 6:
    case 7:
      return Season.Summer;
    case 8:
    case 9:
    case 10:
      return Season.Autumn;
    default:
      return Season.Winter;
  }
}
