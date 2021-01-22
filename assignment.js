// https://github.com/SM-Ismail/assignment_basicJSmodule


function kilometerToMeter(distanceKilo){
    if(typeof distanceKilo != "number"){
        return "unexpected entry. Please enter a number."
    }
    else{
        if(distanceKilo<0){
            return "negative distance not recognized!"
        }
        else{
            var distanceMeter = distanceKilo * 1000;
            return distanceMeter;
        }
    }
}
var distanceInMeter = kilometerToMeter(5);
console.log(distanceInMeter);
var distanceInMeter = kilometerToMeter(-9);
console.log(distanceInMeter);
var distanceInMeter = kilometerToMeter(false);
console.log(distanceInMeter);


function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop){
    if(typeof numOfWatch =="number" && typeof numOfMobile =="number" && typeof numOfLaptop == "number"){
        if(numOfWatch <0 || numOfMobile <0 || numOfLaptop <0){
            return "negative number for items is not expected!";
        }
        else{
            var costOfWatch = numOfWatch * 50;
            var costOfmobile = numOfMobile * 100;
            var costOfLaptop = numOfLaptop * 500;
            var budget = costOfWatch + costOfmobile + costOfLaptop;
            return budget;
        }
    }
    else{
        return "Unexpected entry! Please, enter a number."; 
    }
}
var budget = budgetCalculator(2, 1, 1);
console.log(budget);


function hotelCost(days){
    if(typeof days == "number"){
        if(days <0){
            return "Negative Number of days is not valid!"
        }
        else{
            var cost = 0;
            for(var i = 1; i<=days;i++){
                if(i<=10){
                    cost += 100; 
                } 
                else if (i <= 20){
                    cost += 80;
                }
                else{
                    cost += 50;
                }
            }
            return cost;
        }
    }
    else{
        return "Unexpected entry! Please, enter your number of days to stay."
    }
}
var totalCost = hotelCost(24);
console.log(totalCost); 
var totalCost = hotelCost('24');
console.log(totalCost); 

function megaFriend(arrayOfNames){
    var arrayCheck = Array.isArray(arrayOfNames); 
    if( arrayCheck == true){
        function areStrings(element){
            if(typeof element == "string"){
                return true;
            }
            else{
                return false; 
            }
        }
        var elementCheck = arrayOfNames.every(areStrings);
        if(elementCheck == true){
            var largerName = arrayOfNames[0];
            var name = "";
            for(var i = 0; i <= arrayOfNames.length; i++){
                name = arrayOfNames[i];
                var largerNameLength = largerName.length;
                var nameLength = name.length;
                console.log(typeof name);
                if(largerNameLength<nameLength){
                    largerName = name;
                }
            }
            return largerName;
        }
        else{
            return "Provide your friend's names as string elements of an array."            
        }
    }
    else{
        return "Provide your friend's names in an array."
    }
}
var myFriends = ["Rafi", "Suaad", "Sajjad", "Ragib"];
var foundMegaFriend = megaFriend(myFriends);
console.log(foundMegaFriend);




