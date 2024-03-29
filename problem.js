// problem 1
function calculateMoney(ticketSale) {
   if (typeof ticketSale < 0 ){
      return 'Invalid Number '
   }
   const sale = ticketSale * 120;
   const income = sale - (500 + (8 * 50));
   return income;
}
// const income = calculateMoney(10);
// console.log(income)

// **********************************
// problem 2
function checkName(name) {
   if (typeof name !== 'string') {
      return 'Invalid'
   }
   const word = ['a', 'y', 'e', 'i', 'o', 'u', 'w'];
   if (word.includes(name.slice(-1).toLowerCase())) {
      return ('Good Name')
   }
   else {
      return ('Bad Name')
   }
}
// console.log(checkName('Hamza'))
// ***********************
// problem 3
function deleteInvalids(array){ 
   const newarray=[];
   
   for(let i=0; i<array.length; i++){
      if (i=='number'){
         const ar = array[i];
         newarray.push(ar)
      }
      
   }
   return (array);
}
// const ary = [ NaN, 1,12,0 ,-1 , undefined];
// const a = deleteInvalids(ary);
// console.log(a)
// ***********************
// problem 4
function password(obj) {
   const password = obj.siteName+'#'+ obj.name+'@'+ obj.birthYear;
   return password;
}
// const Information = { name: 'kolimuddin',  birthYear:  1999, siteName: 'Google' };
// const genaretpassword = password(Information);
// console.log(genaretpassword)

// ***********************
// problem 5

function monthlySavings(incom, livingCost) {
   let totalIncome = 0;
   for (const salary of incom) {
      totalIncome +=salary;
      if(salary>=3000){
         const tax = salary *20 /100;
         console.log(tax);
         const totalCost = tax + livingCost;
         totalIncome -= totalCost;
      }
      
    }
   if (totalIncome <= 0) {
         return "earn more";
   }
   else{
      return totalIncome;
   }
   
}
// const earnMoney = monthlySavings([1000, 2000, 2500], 5000);
// console.log( earnMoney)