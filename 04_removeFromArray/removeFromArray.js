const removeFromArray = function(arr,...args) {
    newArr = []
    arr.forEach((val) => {
        if (!args.includes(val)) newArr.push(val)
    })
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
