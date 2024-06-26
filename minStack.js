
var MinStack = function() {
    this.elem = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.elem.push({
        val: val,
        min: this.elem.length === 0 ? val: Math.min(val, this.elem[this.elem.length-1].min)
    }
    );

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.elem.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.elem[this.elem.length-1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.elem[this.elem.length -1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

