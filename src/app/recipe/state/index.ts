import {recipesFeature} from './recipes.reducer';

export * from './recipes.actions';
export * from './recipes.effects';
export * from './recipes.reducer';

export const RECIPES_SELECTORS = {
  ...recipesFeature,
};
