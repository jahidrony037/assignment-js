
function kilometerToMeter(length) {
    if (length >= 0) {
        let meter = length * 1000;
        return meter;
    }
    else {
        return "sorry reenter positive value please";
    }

}

var result = kilometerToMeter(2);
console.log(result);



function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        watch = watch * 50;
        phone = phone * 100;
        laptop = laptop * 500;
        return watch + phone + laptop;
    }
    else {
        return "Plz check your input parameters all are  positive or not! if don't positive plz give positive integer number";
    }

}

var needAmount = budgetCalculator(5, 5, 5);
console.log(needAmount);



function hotelCost(days) {
    if (days >= 0) {
        if (days <= 10) {
            return days * 100;
        }
        else if (days <= 20) {
            var firstStep = 10 * 100;
            var remainDays = days - 10;
            return firstStep + (remainDays * 80);
        }
        else {
            var firstStep = 10 * 100;
            var secondStep = 10 * 80;
            var remainDays = days - 20;
            return firstStep + secondStep + (remainDays * 50);
        }
    }
    else {
        return "Enter Right Value for Calculate the Amount ";
    }
}

var totalCost = hotelCost(28);
console.log(totalCost);


function megaFriend(names) {
    let maxElement = names[0].length;
    let ans = names[0];
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > maxElement) {
            ans = names[i];
            maxElement = names[i];
        }
    }
    return ans;

}
var names = ["jahid", "rony", "rehenuma", "rimu"];
var max = megaFriend(names);
console.log(max);