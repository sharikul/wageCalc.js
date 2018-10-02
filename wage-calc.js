function wageCalc(rate, hours) {
 
  if(typeof rate !== "number" || typeof hours !== "number") {
    return false;
  }
 
  return rate * ( (hours % 1 && (hours % 1) < 0.59) ? Number(String(Math.floor(hours) + (hours % 1)/0.6)) : Math.round(hours) );
  
  // Second part of the equation returns hours if hours is a whole number, otherwise it rounds hours to the lowest whole number, and then adds the remainder after calculating its out of 60 minutes equivalent (so 30 minutes in 60 minutes is equivalent to 50 out of 100). 
}
