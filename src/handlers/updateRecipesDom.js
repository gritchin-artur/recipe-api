import { createArrHandler } from './createArrHandler.js';

export const updateRecipesDom = (recipesExists, newRecipes) => {
    const recipeElements = recipesExists.querySelectorAll('.recipe-container');

    if (newRecipes.length === 0) {
        recipesExists.innerHTML = '';
        return;
    }

    newRecipes.forEach((recipe, i) => {
        let recipeEl = recipeElements[i];

        if (!recipeEl) {
            recipeEl = document.createElement('div');
            recipeEl.className = 'recipe-container';

            const mealRecipe = document.createElement('h2');
            mealRecipe.className = 'meal-recipe';

            const imgRecipe = document.createElement('img');
            imgRecipe.className = 'img-recipe';

            const categoryRecipe = document.createElement('h3');
            categoryRecipe.className = 'category-recipe';

            const countryRecipe = document.createElement('h3');
            countryRecipe.className = 'country-recipe';

            const tagsRecipe = document.createElement('p');
            tagsRecipe.className = 'tags-recipe';

            const ingredientsRecipe = document.createElement('p');
            ingredientsRecipe.className = 'ingredients-recipe';

            const instructionRecipe = document.createElement('p');
            instructionRecipe.className = 'instruction-recipe';

            const linkRecipe = document.createElement('p');
            linkRecipe.className = 'link-recipe';

            const youtubeLink = document.createElement('a');
            youtubeLink.className = 'youtube-recipe';
            youtubeLink.target = '_blank';
            youtubeLink.innerText = 'Watch on YouTube';

            linkRecipe.appendChild(youtubeLink);

            recipeEl.append(
                mealRecipe,
                imgRecipe,
                categoryRecipe,
                countryRecipe,
                tagsRecipe,
                ingredientsRecipe,
                instructionRecipe,
                linkRecipe
            );

            recipesExists.appendChild(recipeEl);
        }

        const ingredients = Object.entries(
            createArrHandler('strIngredient', 'strMeasure', recipe)
        )
            .map(([ingredient, measure]) => `${ingredient} (${measure})`)
            .join(', ');

        recipeEl.querySelector('.meal-recipe').innerText =
            `Meal name: ${recipe.strMeal}` || 'Meal';
        recipeEl.querySelector('.img-recipe').alt =
            `Meal name: ${recipe.strMeal}` || 'Meal';
        recipeEl.querySelector('.img-recipe').src =
            recipe.strMealThumb ||
            'https://media.gettyimages.com/id/1141797008/fr/vectoriel/couteau-de-table-et-fourchette-vecteur.jpg?s=1024x1024&w=gi&k=20&c=yGN-mwkjC9nluDoNXZJv3lv9S55pjsFYG4eUIS_h1jM=';
        recipeEl.querySelector('.category-recipe').innerText =
            `Category name: ${recipe.strCategory}` || 'Category';
        recipeEl.querySelector('.country-recipe').innerText =
            `Country name: ${recipe.strArea}` || 'Country';
        recipeEl.querySelector('.tags-recipe').innerText =
            `Tags: ${recipe.strTags}` || 'Category';
        recipeEl.querySelector('.ingredients-recipe').innerText =
            `Ingredients: ${ingredients}` || 'Ingredients';
        recipeEl.querySelector('.instruction-recipe').innerText =
            `Instruction: ${recipe.strInstructions}` || 'Instruction';
        recipeEl.querySelector('.youtube-recipe').href =
            recipe.strYoutube ?? '';
    });

    if (recipeElements.length > newRecipes.length) {
        for (let i = newRecipes.length; i < recipeElements.length; i++) {
            recipesExists.removeChild(recipeElements[i]);
        }
    }
};
