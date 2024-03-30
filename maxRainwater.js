/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;

    let i = 0; let j = height.length-1;
    while(i<j){
        const l = j-i;
        let h = 0;
        if(height[i] < height[j]){
            h= height[i];
            i++;
        } else {
            h = height[j];
            j--;
        }
        const area = l*h;

        if( area > maxArea){
            maxArea = area
        }
    }
    return maxArea;
};