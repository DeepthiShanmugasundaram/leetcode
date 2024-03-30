/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let pr = 0;
    for (var i=0; i<prices.length; i++){
        if(prices[i+1] > prices[i]){
            pr += prices[i+1] - prices[i];
        }
    }
    return pr;
};