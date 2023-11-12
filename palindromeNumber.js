var isPalindrome = function (x) {
    if (x < 0  & x % 2 === 0) {
        return false;
    } else {

        const str = x.toString()
        for (let i = 0, j = str.length - 1; i < (str.length/2); i++, j--) {
            console.log(str[i], str[j])
            if (str[i] !== str[j]) {
                return false
            }
    
        }

        return true;
    }


};
// const arr = [5, 12, 8, 20, 10];
const result = isPalindrome(0)
console.log("result", result)
