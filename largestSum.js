function largestSum(arr){
    let candidate = [];
    //如果Array為空
    if(!arr) return 0;
    //如果全部都負數
    if(arr.every((ele)=>{
        return ele < 0; 
    })) return 0;

    
    candidate.push(Math.max(...arr))
    for(let i=1; i<arr.length; i++){
        let temp = []
        for(let j=0; j<arr.length-i; j++){     
            temp.push(
                //j,j+差距
                arr.slice(j,j+i+1).reduce((sum,ele)=>{
                    return sum+ele;
                })
            )
        }
        candidate.push(Math.max(...temp));
    }
    return Math.max(...candidate);
    // write code to find the sum of the largest sub-sequence in arr
}

function newLargeSum(arr){
    let ans = 0;
    let temp = 0;
    for(let i=0; i<arr.length; i++){
        temp += arr[i]
        if(temp < 0){
            temp = 0;
        }
        if(temp > ans){
          ans = temp;
        }       
    }
    return ans;
}

console.log("ans",newLargeSum([31,-41,59,26,-53,58,97,-93,-23,84]));