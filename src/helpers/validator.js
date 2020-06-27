export const validator = (...inputsValue) => {
    return inputsValue.every(value => value.length > 0);
};
