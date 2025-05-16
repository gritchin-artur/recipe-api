import { uniqueTagHandler } from '../handlers/uniqueTagHandler.js';

export const updateSortDom = (sortExist, newRecipes) => {
    const tagsArray = uniqueTagHandler(newRecipes);

    sortExist.innerHTML = '';

    tagsArray.forEach((tag) => {
        const labelCheckBox = document.createElement('label');
        labelCheckBox.className = 'label-checkbox';

        const checkbox = document.createElement('input');
        checkbox.className = 'checkbox';
        checkbox.type = 'checkbox';

        labelCheckBox.appendChild(checkbox);
        labelCheckBox.appendChild(document.createTextNode(tag));

        sortExist.appendChild(labelCheckBox);
    });
};
