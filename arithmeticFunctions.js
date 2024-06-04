const add = (value_1, value_2) => {
    return parseInt(value_1) + parseInt(value_2);
}

const sub = (value_1, value_2) => {
    return parseInt(value_1) - parseInt(value_2);
}

const multiply = (value_1, value_2) => {
    return parseInt(value_1) * parseInt(value_2);
}

const divide = (value_1, value_2) => {
    return parseFloat(value_1) / parseFloat(value_2);
}

module.exports = {add, sub, multiply, divide};