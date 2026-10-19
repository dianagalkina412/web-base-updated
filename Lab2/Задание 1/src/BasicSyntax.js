export function romanToInteger(str) {
    let result = 0;
    const map = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000 };
    const upper = str.toUpperCase();
    for(let i = 0; i < upper.length; i++){
        const cur = map[upper[i]];
        const next = map[upper[i + 1]];
        if (next && cur < next){
            result -= cur;
        }
        else{
            result += cur;
        }
    }
    return result;
}
