export const uniqueTagHandler = (recipes) => {
    const uniqueTags = [];

    recipes.forEach((recipe) => {
        if (recipe.strTags && typeof recipe.strTags === 'string') {
            const tagsArray = recipe.strTags.split(',');
            tagsArray.forEach((tag) => {
                const trimmedTag = tag.trim();
                if (trimmedTag && !uniqueTags.includes(trimmedTag)) {
                    uniqueTags.push(trimmedTag);
                }
            });
        }
    });

    return uniqueTags;
};
