function calcTip(bill) {
   
if(bill>=50 && bill<=300)
{
    const tip=bill*0.15;
    // const total=bill+tip;
//    console.log(`the bill was ${bill}, the tip is ${tip}, and the total value ${bill+tip}`);
  return tip;
}
else{
    const tip= bill*0.2;
    return tip;
}
}

const bills=[125, 555, 44];
const tips=[calcTip(bills[0]), calcTip(bills[1]),
calcTip(bills[2])];
const total=[bills[0]+tips[0],
bills[1]+tips[1],
bills[2]+tips[2]];
console.log(bills, tips, total);   

