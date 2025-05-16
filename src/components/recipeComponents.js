import { createArrHandler } from '../handlers/createArrHandler.js';

export const recipeComponents = (recipes) => {
    const recipesContainer = document.createElement('div');
    recipesContainer.className = `recipes-container`;

    recipes.forEach((recipe) => {
        const recipeContainer = document.createElement('div');
        recipeContainer.className = 'recipe-container';

        const recipeFirstContainer = document.createElement('div');
        recipeFirstContainer.className = 'recipe-first-container';

        const mealRecipe = document.createElement('h2');
        mealRecipe.className = 'meal-recipe';
        mealRecipe.innerText = `Meal name: ${recipe.strMeal}` || 'Meal';

        const imgRecipe = document.createElement('img');
        imgRecipe.className = 'img-recipe';
        imgRecipe.alt = `Meal name: ${recipe.strMeal}` || 'Meal';
        imgRecipe.src =
            recipe.strMealThumb ||
            'https://media.gettyimages.com/id/1141797008/fr/vectoriel/couteau-de-table-et-fourchette-vecteur.jpg?s=1024x1024&w=gi&k=20&c=yGN-mwkjC9nluDoNXZJv3lv9S55pjsFYG4eUIS_h1jM=';

        const categoryRecipe = document.createElement('h3');
        categoryRecipe.className = 'category-recipe';
        categoryRecipe.innerText =
            `Category name: ${recipe.strCategory}` || 'Category';

        const countryRecipe = document.createElement('h3');
        countryRecipe.className = 'country-recipe';
        countryRecipe.innerText =
            `Country name; ${recipe.strArea}` || 'Country';

        const tagsRecipe = document.createElement('p');
        tagsRecipe.className = 'tags-recipe';
        tagsRecipe.innerText = `Tags: ${recipe.strTags}` || 'Category';

        const ingredients = Object.entries(
            createArrHandler('strIngredient', 'strMeasure', recipe)
        )
            .map(([ingredient, measure]) => `${ingredient} (${measure})`)
            .join(', ');
        const ingredientsRecipe = document.createElement('p');
        ingredientsRecipe.className = 'ingredients-recipe';
        ingredientsRecipe.innerText =
            `Ingredients: ${ingredients}` || 'Ingredients';

        recipeFirstContainer.append(
            mealRecipe,
            imgRecipe,
            categoryRecipe,
            countryRecipe,
            tagsRecipe,
            ingredientsRecipe
        );

        const recipeSecondContainer = document.createElement('div');
        recipeSecondContainer.className = 'recipe-second-container';

        const instructionRecipe = document.createElement('p');
        instructionRecipe.className = 'instruction-recipe';
        instructionRecipe.innerText =
            `Instruction: ${recipe.strInstructions}` || 'Instruction';

        const linkRecipe = document.createElement('p');
        linkRecipe.className = 'link-recipe';

        const youtubeLink = document.createElement('a');
        youtubeLink.className = 'youtube-recipe';
        youtubeLink.target = '_blank';
        youtubeLink.innerText = 'YouTube';
        youtubeLink.href = recipe.strYoutube;

        linkRecipe.appendChild(youtubeLink);

        recipeSecondContainer.append(instructionRecipe, linkRecipe);

        recipeContainer.append(recipeFirstContainer, recipeSecondContainer);

        recipesContainer.appendChild(recipeContainer);
    });

    return recipesContainer;
};
