module.exports = function toReadable (number) {
  let firstNum = number.toString()[0];
  let firstWord;
  let secondWord;
  let thirdWord;
  const firstObj = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen'
};
  const secondObj = {
    '20' : 'twenty', 
    '30' : 'thirty', 
    '40' : 'forty', 
    '50' : 'fifty', 
    '60' : 'sixty', 
    '70' : 'seventy', 
    '80' : 'eighty', 
    '90' : 'ninety'
  };

  if (number.toString().length === 3) {
    firstWord = firstObj[firstNum];
  
  let twoLastNumbers = number.toString().slice(1);
  let secondNum = number.toString()[1];
  let lastNumber = number.toString()[2];
  
  thirdWord = firstObj[Number(lastNumber)];
  let lastNum = number.toString().slice(2);
  
  if (Number(secondNum) === 0 && Number(lastNum) === 0) {
      return `${firstWord} hundred`;
  }
  else if (Number(lastNum) === 0 && Number(twoLastNumbers) >= 20) {
      secondWord = secondObj[Number(twoLastNumbers)];
      return `${firstWord} hundred ${secondWord}`
  }
  else if(Number(twoLastNumbers) < 20 ) {
      secondWord = firstObj[Number(twoLastNumbers)];
      return `${firstWord} hundred ${secondWord}`
  }
  else {
      const secondNum = number.toString()[1];
      const fullSecondNum = secondNum + '0'
      secondWord = secondObj[Number(fullSecondNum)];
      let lastNumber = number.toString().slice(2);
      thirdWord = firstObj[Number(lastNumber)];
      return `${firstWord} hundred ${secondWord} ${thirdWord}`;
  }
  }
  if (number.toString().length === 2) {
      if(number < 20) {
          return firstObj[number];
      }
      else if (Number(number.toString()[1]) === 0 && number >= 20) {
          return `${secondObj[number.toString()]}`
      }
      else {
          const num = number.toString()[0];
          const fullNum = num + '0';
          firstWord = secondObj[Number(fullNum)];
          
      }
      lastNumber = number.toString().slice(1);
      secondWord = firstObj[Number(lastNumber)];
      
    return `${firstWord} ${secondWord}`;
  }
  if (number.toString().length === 1) {
     return firstObj[number];
  }
  
}


  
  
