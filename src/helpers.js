const constants = require('./constants.js');

let MIN_BMI = 19;
let MAX_BMI = 24.9;

const setMinMaxBMI = (age) => {
  if(age > 24 && age <= 34){
    MIN_BMI = 20;
    MAX_BMI = 25;
    return;
  }

  if(age > 34 && age <= 44 ){
    MIN_BMI = 21;
    MAX_BMI = 26;
    return;
  }

  if(age > 44 && age <= 54 ){
    MIN_BMI = 22;
    MAX_BMI = 27;
    return;
  } 

  if(age > 54 && age <= 64 ){
    MIN_BMI = 23;
    MAX_BMI = 28;
    return;
  } 

  if(age > 65){
    MIN_BMI = 24;
    MAX_BMI = 29;
    return;
  }

  MIN_BMI = 19;
  MAX_BMI = 24.9;
}

module.exports = {
  calculateBMI(personWeight, personLength){
    const bmi = personWeight / ((personLength / 100) * (personLength / 100));
    return bmi.toFixed(2);
  },
  verifyBMI(age,bmi){
    setMinMaxBMI(age);
    
    if(bmi >= MIN_BMI && bmi <= MAX_BMI){
      return constants.ScreeningResult.GOOD;
    }

    return constants.ScreeningResult.BAD;
  },
  getBmiRange(age){
    setMinMaxBMI(age);
    return {bmiMin: MIN_BMI, bmiMax: MAX_BMI};
  }
}