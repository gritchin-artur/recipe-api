import { uniqueTagHandler } from '../handlers/uniqueTagHandler.js';

export const sortComponent = (recipes) => {
    const tagsArray = uniqueTagHandler(recipes);

    const sortContainer = document.createElement('div');
    sortContainer.className = 'sort-container';

    tagsArray.forEach((tag) => {
        const labelCheckBox = document.createElement('label');
        labelCheckBox.classList = 'label-checkbox';

        const checkbox = document.createElement('input');
        checkbox.classList = 'checkbox';
        checkbox.type = 'checkbox';
        labelCheckBox.innerText = tag;

        labelCheckBox.appendChild(checkbox);

        sortContainer.append(labelCheckBox);
    });

    return sortContainer;
};
