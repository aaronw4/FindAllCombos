var findCombos = (array) => {
    var combos = (n, src, result) => {        
        if (n === 0) {
            if (result.length > 0) {
                comboArr.push(result)
            }
            return
        }

        combos(n - 1, src.slice(1), result.concat([src[0]]))
        
        return
    }
    
    var comboArr = []
    for (var i = 0; i < array.length; i++) {
        for (var j = 1; j < array.length - i + 1; j++) {
            combos(j, array.slice(i, array.length), [])
        }        
    }
    
    return comboArr
}

console.log(findCombos([1,2,3,4,5,6]))