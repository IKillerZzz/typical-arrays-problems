
exports.min = min = arr => arr && arr.length !== 0 ? Math.min.apply(null, arr) : 0;

exports.max = max = arr => arr && arr.length !== 0 ? Math.max.apply(null, arr) : 0;

exports.avg = avg = arr => arr && arr.length !== 0 ? arr.reduce((sum, i) => sum + i, 0) / arr.length : 0;
