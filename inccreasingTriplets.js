/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let a = Infinity, b = Infinity, c = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= a) a = nums[i];
        else if (nums[i] <= b) b = nums[i];
        else if (nums[i] <= c) c = nums[i];

        if (c < Infinity && c > b && b > a) return true;
    }
    return false;
};