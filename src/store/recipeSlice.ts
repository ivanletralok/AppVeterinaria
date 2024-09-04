import { StateCreator } from 'zustand';
import { Drinks, getCategories, getRecipeById, getRecipesByCategory } from '../services/RecipeService';

import type { Categories } from '../types/index';
import { DrinkById } from '../model/Drink';

export interface DrinkCategory {
	category: string;
	ingredient: string;
 }
 

export type RecipeSliceType = {
	categories: Categories;
	drinks: Drinks[];
	loading: boolean;
	showModal: boolean;
	drinkDetails: DrinkById[];
	fetchCategories: () => Promise<void>;
	searchRecipe: (filters: DrinkCategory) => Promise<void>;
	setLoading: (loading: boolean) => void;
	setShowModal: (showModal: boolean) => void;
	getDrinkDetails: (id: string) => Promise<void>
};
export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({
	categories: {
	   drinks: []
	},
	
	drinks: [],
	loading: false,
	showModal: false,
	drinkDetails: [],

	fetchCategories: async () => {
		const categories = await getCategories();
		set({ categories  });
	},
	
	searchRecipe: async (filters: DrinkCategory) => {
		const drink  = await getRecipesByCategory(filters);
		set({ drinks: drink || [] });
	},
	
	setLoading: (loading: boolean) => set({ loading }),
	setShowModal: (showModal: boolean) => set({ showModal }),
	
	getDrinkDetails: async (id: string) => {
		const drinkDetails = await getRecipeById(id);
		set({ drinkDetails: drinkDetails.drinks });
	}
});
