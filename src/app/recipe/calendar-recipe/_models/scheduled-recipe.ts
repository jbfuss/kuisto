import {parse} from 'date-fns';

export const SCHEDULED_RECIPE_DAY_FORMAT = 'dd-MM-yyyy';
export class ScheduledRecipes {
  day: string;
  recipeIds: string[];

  static parseDay(scheduledRecipes: ScheduledRecipes): Date {
    return parse(scheduledRecipes.day, SCHEDULED_RECIPE_DAY_FORMAT, new Date());
  }
}
