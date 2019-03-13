module.exports = function getZerosCount(number, base) {
  // your implementation

  let zeros = 1e9;

  for ( let i = 2; i <= base; i++) { // look for simple multipliers of base
    if (base % i == 0) {
      let sm_base = 0;
      while (base % i == 0) {  // count number of simple multiplier in base
        sm_base++;
        base = Math.floor(base/i);
      }
      let sm_number = 0;
      let n = number;
      while (n / i > 0) {   // count number of simple multipliers from base in number
        sm_number += Math.floor(n / i);
        t = Math.floor(n/i);
      }
      zeros =  Math.min(zeros,Math.floor(sm_number / sm_base));
    }
  }

  return zeros;
}