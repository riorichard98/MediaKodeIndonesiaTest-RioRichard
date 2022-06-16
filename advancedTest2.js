function truncatable(num){
    let leftNum = num - Math.pow(10,num.toString().length - 1)*num.toString()[0]// number when the first digit is removed
    let rightNum = (num - parseInt(num.toString()[num.toString().length-1]))/10// number when the last digit is removed
    // console.log(leftNum , rightNum);

    // because one is not a prime number so if it is one then it should be false
    let truncatableLeft = leftNum === 1? false : true 
    let truncatableRight = rightNum === 1? false : true

    for(let i = 3 ; i < rightNum ; i+=2){
        if(rightNum % i === 0){
            truncatableRight = false
            break
        }
    }
    for(let j = 3 ; j < leftNum ; j+=2){
        if(leftNum % j === 0){
            truncatableLeft = false
            break
        }
    }
    if(truncatableLeft && truncatableRight){
        return "both"
    }else if(!truncatableLeft && !truncatableRight){
        return false
    }else if(truncatableLeft){
        return "left"
    }else if(truncatableRight){
        return "right"
    }
}

console.log(truncatable(17));