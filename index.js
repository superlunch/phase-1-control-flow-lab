function scuberGreetingForFeet(val){
  if (val<= 400){
    return "This one is on me!";
  }
  else if (val> 400 && val<= 2000){
    return "That will be twenty bucks.";
  }
  else if (val>2000 && val < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else
    return "No can do.";}

function ternaryCheckCity(city){
  return city === "NYC"? "Ok, sounds good.": "No go."
}

function switchOnCharmFromTip(tip){
  let compliment;

   switch(tip){
     case "generous":
     compliment = "Thank you so much.";
     break;
     case "not as generous":
     compliment = "Thank you.";
     break;
     default:
     compliment = "Bye.";
     break;

 }
   return compliment;

 }