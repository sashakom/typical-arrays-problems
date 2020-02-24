
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
      let min = array[0];
      array.forEach((item) => {
        if (item <= min) {
          min = item;
        }
      });
      return min;
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
      let max = array[0];
      array.forEach((item) => {
        if (item >= max) {
          max = item;
        }
      });
      return max;
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
      let sum = 0;
      let avg = 0;
      array.forEach((item) => {
        sum += item;
      });
      avg = sum / array.length;
      return avg;
  }
}
