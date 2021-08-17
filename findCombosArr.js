var letterCombinations = function(arrayOfarrays) {
    function combos(n, src, result) {
        if (n === 0) {
            if (result.length > 0) {
                comboArr.push(result)
            }
            return
        }

        for (var i = 0; i < arrayOfarrays[0].length; i++) {
            combos(n - 1, src.slice(1), result + src[0][i])
        }
        return
    }

    let comboArr = []
    combos(arrayOfarrays.length, arrayOfarrays, [])

    return comboArr
};

console.log(letterCombinations([['a', 'b', 'c'], ['x', 'y', 'z']]))
