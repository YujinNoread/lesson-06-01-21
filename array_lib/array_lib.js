Array.prototype.pluck = function (prop) {
    return this.map((item) => item[prop])
};
Array.prototype.splitArray = function (chunk) {
    return this.map((item, index) => index % chunk === 0 && this.slice(index, index + chunk)).filter(item => item)
};
Array.prototype.clearArray = function () {
    return this.filter(item => item > 0);
};
Array.prototype.concatArray = function (...array) {
    return this.concat(array.reduce((result, item) => result.concat(item), []))
}
Array.prototype.rm = function (count = 1) {
    return (this.length < count) ? [] : this.slice(count)
};
Array.prototype.replaceIn = function (change, start = 0, end = this.length) {
    for (let i = start; i < end; i++) {
        this[i] = change;
    }
    return this;
};
Array.prototype.uni = function () {
    return this.filter((element, index, arr) => arr.indexOf(element) === index && arr.lastIndexOf(element) !== index);
};
Array.prototype.nfa = function (index) {
    return (index > 0) ? this[index - 1] : this[(this.length + index)]
}
Array.prototype.group = function(array2,array3) {
    let maxLength = Math.max(this.length, array2.length, array3.length)
    let result = [];

    for (let i = 0; i < maxLength; i++) {
        result.push([this[i], array2[i], array3[i]])
    }

    return result
}
Array.prototype.implode = function (separator) {
    return this.join(separator)
}
Array.prototype.rnd = function () {
    return this.sort(() => Math.random() - 0.5);
}
Array.prototype.diff = function (array) {
    return this
        .filter((value) => array.indexOf(value) === -1)
        .concat(array.filter((value) => this.indexOf(value) === -1));
}
Array.prototype.fn = function () {
    let stack = this.reduce((a, b) => ({
        ...a,
        [b]: (a[b] || 0) + 1
    }), {})
    const maxValue = Math.max.apply(null, Object.values(stack))
    return Object.keys(stack).filter(k => stack[k] === maxValue)
}

module.exports = Array.prototype.pluck;
module.exports = Array.prototype.splitArray;
module.exports = Array.prototype.clearArray;
module.exports = Array.prototype.concatArray;
module.exports = Array.prototype.rm;
module.exports = Array.prototype.replaceIn;
module.exports = Array.prototype.uni;
module.exports = Array.prototype.nfa;
module.exports = Array.prototype.group;
module.exports = Array.prototype.implode;
module.exports = Array.prototype.rnd;
module.exports = Array.prototype.diff;
module.exports = Array.prototype.fn;
