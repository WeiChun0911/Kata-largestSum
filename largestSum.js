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

console.log("ans",largestSum([31,-41,59,26,-53,58,97,-93,-23,84]));