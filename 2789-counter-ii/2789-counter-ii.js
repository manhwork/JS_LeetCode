/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    var init2 = init
    const increment = function () {
        return ++init2;
    }
    const decrement = function () {
        return --init2;
    }
    const reset = function () {
        init2 = init
        return init2;
    }
    return { increment, decrement, reset };
};
