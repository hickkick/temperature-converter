

exports.cToF = function (c) {
    return ((9/5) * c  + 32).toFixed(2);
}

exports.fToC = function (f) {
    return ((5/9) * (f - 32)).toFixed(2);
}
