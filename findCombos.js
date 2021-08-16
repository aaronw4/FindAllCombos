var findCombos = (array) => {
    var combos = (n, src, result) => {        
        if (n === 0) {
            if (result.length > 0) {
                comboArr.push(result)
            }
            return
        }
        
        for (var j = 0; j < src.length; j++) {
            combos(n - 1, src.slice(j + 1), result.concat([src[j]]))
        }
        return
    }
    
    var comboArr = []
    for (var i = 1; i < array.length; i++) {
        combos(i, array, [])
    }
    comboArr.push(array)
    return comboArr
}

console.log(findCombos([1,2,3]))