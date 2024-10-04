const sumAll = function(arg1,arg2) {
    if (arg1 < 0 || arg2 < 0 || typeof(arg1) != 'number' || typeof(arg2)!= 'number') return "ERROR"
    if (arg1%1 !==0|| arg2%1 !== 0) return "ERROR"
    let sum = 0
    min = arg1< arg2? arg1 : arg2
    max = arg1 < arg2? arg2: arg1
    for (let i = min; i <= max; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
