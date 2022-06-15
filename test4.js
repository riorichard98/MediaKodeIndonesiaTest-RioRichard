/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
    // Your Code Here
    let minNum = Math.min(...numbers)
    let maxNum = Math.max(...numbers)
    let validSequensNums = {}
    let output
    for (let i = minNum; i <= maxNum; i++) {
        validSequensNums[i] = false
    }
    for (let i = 0; i < numbers.length; i++) {
        validSequensNums[numbers[i]] = true
    }
    for (const num in validSequensNums) {
        if (!validSequensNums[num]) {
            output = num
        }
    }
    return output
    // time complexity is O(numbers.length+2*(max-min))
}

console.log(result(numbers));
