/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(a, target) {
    const n = a.length;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(a[i] === target - a[j]){
                return [i,j]
            }
        }
    }
};