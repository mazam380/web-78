alert("hi google");

let gender =("Enter the gender male/female:");
let leight=("enter the height")//height in cm;
let weight=("enter your weight")//weight in kg
let age = ("enter your age in years")//age in  years
//BMR for the man
if(gender==='male')
{
 let bmr= 88.362+(13.397 * weight)+(4.799 * height)-(5.677*age);
console.log("Your bmr is:" + bmr.toFixed(2) + "calories/day.");
}
//MBr for the woman
if (gender==='female')
{
let bmr=447.593+(9.247*weight) + (3.098* height)-(4.330*age);
console.log("your mbr is:" +bmr.toFixed(2) + "calories/days."  );






}



