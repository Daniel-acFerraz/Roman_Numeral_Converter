var romanStr = []
function convertToRoman(number) {
  if (number >= 1000) {
    romanStr.push("M");
    number -= 1000;    
    convertToRoman(number)
  }else if (number >= 900) {
    romanStr.push("CM")
    number -= 900
    convertToRoman(number)    
  }else if (number >= 500) {
    romanStr.push("D")
    number -= 500
    convertToRoman(number)    
  }else if (number >= 400) {
    romanStr.push("CD")
    number -= 400
    convertToRoman(number)    
  }else if (number >= 100) {
    romanStr.push("C")
    number -= 100
    convertToRoman(number)    
  }else if (number >= 90) {
    romanStr.push("XC")
    number -= 90
    convertToRoman(number)    
  }else if (number >= 50) {
    romanStr.push("L")
    number -= 50
    convertToRoman(number)    
  }else if (number >= 40) {
    romanStr.push("XL")
    number -= 40
    convertToRoman(number)    
  }else if (number >= 10) {
    romanStr.push("X")
    number -= 10
    convertToRoman(number)    
  }else if (number >= 9) {
    romanStr.push("IX")
    number -= 9
    convertToRoman(number)    
  }else if (number >= 5) {
    romanStr.push("V")
    number -= 5
    convertToRoman(number)    
  }else if (number >= 4) {
    romanStr.push("IV")
    number -= 4
    convertToRoman(number)    
  }else if (number >= 1) {
    romanStr.push("I")
    number -= 1
    convertToRoman(number)    
  }
  return romanStr.join('').toString()
}
  

console.log(convertToRoman(798))