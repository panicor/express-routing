
function makeCounter(arr){
    return arr.reduce((acc, next) => {
        acc[next] = (acc[next] || 0) +1;
        return acc;
    }, {});
}

function convertArr(stringNums){
    let numArr = [];

    for(let i= 0; i < stringNums.length; i++){
        let num = Number(stringNums[i]);

        if(Number.isNaN(num)){
            return new Error(`${stringNums[i]} is not a number.`);
        }

        numArr.push(num);
    }
    return numArr;
}

function mode(nums){
    let freq = makeCounter(nums);

    let count = 0;
    let mostFreq;

    for(let key in freq){
        if(freq[key] >count){
            mostFreq = key;
            count = freq[key];
        }
    }
    return +mostFreq;
}

function mean(nums){
    if(nums.length ==0){
        return 0;
    }
    
    return nums.reduce((acc, next) => {
        return acc + next;
    })/nums.length;
}

function median(nums){
    nums.sort(function(a, b){
        a - b;
    })

    let midIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 == 0){
        median = (nums[midIndex] + nums[midIndex]- 1) /2;
    }
    else{
        median = nums[midIndex]
    }
    return median;
}

module.exports = {makeCounter, mean, median, mode, convertArr};