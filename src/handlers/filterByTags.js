import { recipeComponents } from '../components/recipeComponents.js';
import dom from '../dom.js';

export const filterByTags = (allRecipes) => {
    const checkBoxTags = document.querySelectorAll('.checkbox:checked');
    const checkedTags = [...checkBoxTags].map((checkbox) =>
        checkbox.parentElement.textContent.trim()
    );

    if (checkedTags.length === 0) {
        dom.result.querySelector('.recipes-container')?.remove();
        dom.result.appendChild(recipeComponents(allRecipes));
        return;
    }

    const filtered = allRecipes.filter((recipe) => {
        const tags = recipe.strTags
            ? recipe.strTags.split(',').map((t) => t.trim())
            : [];
        return checkedTags.every((tag) => tags.includes(tag));
    });

    dom.result.querySelector('.recipes-container')?.remove();
    dom.result.appendChild(recipeComponents(filtered));
};
