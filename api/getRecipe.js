export const getRecipe = async (recipeName) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};
