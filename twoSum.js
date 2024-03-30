/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let index=[];
    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){

            if(i===j){

                continue;
            }
           if(nums[i]+nums[j] === target) {

               index.push(i, j);
           }
        }
    }
    return index;
};