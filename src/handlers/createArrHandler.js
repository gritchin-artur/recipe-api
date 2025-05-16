export const createArrHandler = (firstParam, secondParam, recipe) => {
    const newArr = {};

    for (let i = 1; i <= 20; i++) {
        const firstKey = `${firstParam}${i}`;
        const secondKey = `${secondParam}${i}`;

        const firstValue = recipe[firstKey];
        const secondValue = recipe[secondKey];

        if (firstValue && secondValue && firstValue.trim() !== '') {
            newArr[firstValue] = secondValue;
        }
    }

    return newArr;
};
