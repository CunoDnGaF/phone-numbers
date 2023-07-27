export default function formattingNumber(number) {
  let formattedNumber = number.split(/[^\d]/).join('');
  let result;
   
   if(formattedNumber.length == 11 && formattedNumber[0] == '8') {
     result = '+7'.concat('', formattedNumber.slice(1));
   }
 
   if(formattedNumber.length > 11 ||formattedNumber.length == 11 && formattedNumber[0] == '7' ) {
     result = '+'.concat('', formattedNumber);
   }
 
   if(formattedNumber.length == 10) {
     result = '+7'.concat('', formattedNumber);
   }
 
   if((formattedNumber[0] == '7' || formattedNumber[0] == '8') && formattedNumber.length == 10) {
     throw new Error('Номер введен не полностью');
   }
 
   return result;
 }