// Завдання 1
const styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

if(styles.length % 2 !== 0)
    styles[Math.floor(styles.length / 2)] = "Classics";

console.log(styles);

styles.splice(0, 1);
console.log(styles);

styles.splice(0, 0, "Rap", "Raggae");
console.log(styles);

// Завдання 2
function sumInput() {
    let input = prompt("Enter a number: ");
    let sum = 0;
    let numbers = [];

    while(input !== '' && input !== null && !isNaN(input)) {
        numbers.push(Number(input));
        input = prompt("Eneter a number: ");
    }
    for (let i = 0; i < numbers.length; ++i)
        sum += numbers[i];
    return sum;
}

console.log(sumInput());

// Завдання 3
function GetMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; ++i) {
        currentSum += arr[i];
        if (currentSum > maxSum)
            maxSum = currentSum;
        if (currentSum < 0)
            currentSum = 0;
    }
    return maxSum;
}
console.log(GetMaxSubSum([1, -2, 3, 4, -9, 6]));
console.log(GetMaxSubSum([2, - 1, 2, 3, -9]));
console.log(GetMaxSubSum([-1, 2, 3 , -9, 11]));
console.log(GetMaxSubSum([-2, -1, 1, 2]));
console.log(GetMaxSubSum([100, -9, 2, -3, 5]));
console.log(GetMaxSubSum([1, 2, 3]));
console.log(GetMaxSubSum([-1, -2, -3]));