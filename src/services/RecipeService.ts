import { CategoriesAPIResponseSchema } from '../utils/recipe-schema';
import { DrinkCategory } from '../store/recipeSlice';
import axiosInstance from './loadingServices';
import { DrinksResponse } from '../model/Drink';

export interface CategoryResponse {
	drinks: [Drinks];
}

export interface Drinks {
	idDrink: string;
	strDrink: string;
	strDrinkThumb: string;
}

export async function getCategories() {
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
	const { data } = await axiosInstance(url);
	const result = CategoriesAPIResponseSchema.safeParse(data);

	if (result.success) {
		return result.data;
	}
}

export async function getRecipesByCategory(categoryFilters: DrinkCategory) {
	const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryFilters.category}&i=${categoryFilters.ingredient}`;
	const { data } = await axiosInstance<CategoryResponse>(url);
	if (data) {
		return data.drinks;
	}
}

export async function getRecipeById(id: string) {
	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
	const { data } = await axiosInstance<DrinksResponse>(url);
	return data;
}
