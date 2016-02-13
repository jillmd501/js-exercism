var Hamming = function() {};

Hamming.prototype.compute = function(strand1, strand2) {
  if (strand1.length === strand2.length) {
    var strand1 = strand1.split('');
    var strand2 = strand2.split('');
    return distance(strand1, strand2)
  } else {
    throw new Error('DNA strands must be of equal length.')
  }
};

function distance(strand1, strand2) {
  var difference = 0;

  for (i = 0; i < strand1.length; i++) {
    if (strand1[i] !== strand2[i]) {
      difference += 1
    }
  }
  return difference;
};

module.exports = Hamming;
