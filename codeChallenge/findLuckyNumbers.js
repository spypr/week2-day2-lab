// Write your code below this line.

// var luckyNumbers = [];

// while(luckyNumbers.length < 10){
//     var r = Math.floor(Math.random() * 10) + 1;
//     if(luckyNumbers.indexOf(r) === -1) luckyNumbers.push(r);
// }
// console.log(luckyNumbers);

const luckyNums = num => {
    if(num <= 10 && num >= 1){
        let luckyNumberArr = []

        while(luckyNumberArr.length < num){
            let randInt = Math.floor(Math.random() * 10)
            if(!luckyNumberArr.includes(randInt)){
                luckyNumberArr.push(randInt)
            }
        }
        return luckyNumberArr
    }else {
        return "Not a valid number"
    }
}

console.log(luckyNums(6))