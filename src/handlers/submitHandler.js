import { getRecipe } from '../../api/getRecipe.js';
import dom from '../dom.js';
import { recipeComponents } from '../components/recipeComponents.js';
import { updateRecipesDom } from './updateRecipesDom.js';
import { sortComponent } from '../components/sortComponent.js';
import { updateSortDom } from './updateSortDom.js';
import { filterByTags } from './filterByTags.js';

export const submitHandler = async (e) => {
    e.preventDefault();

    const inputData = dom.input.value;

    if (!inputData) {
        dom.result.innerHTML = '';
        dom.error.innerText = 'You should enter something';
        return;
    }

    try {
        dom.error.innerText = '';
        const recipeData = await getRecipe(inputData);
        const recipesExists = document.querySelector('.recipes-container');
        const sortExist = document.querySelector('.sort-container');

        if (recipesExists && sortExist) {
            updateSortDom(sortExist, recipeData.meals);
            updateRecipesDom(recipesExists, recipeData.meals);
        } else {
            dom.result.append(
                sortComponent(recipeData.meals),
                recipeComponents(recipeData.meals)
            );
        }

        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                filterByTags(recipeData.meals);
            });
        });
    } catch (error) {
        dom.result.innerHTML = '';
        dom.error.innerText = 'Nothing was found';
    }
};
