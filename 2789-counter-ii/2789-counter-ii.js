/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var init2 = init
    return {
        increment : ()=>{return ++init2},
        decrement : ()=>{return --init2},
        reset     : ()=>{
            init2 = init;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */