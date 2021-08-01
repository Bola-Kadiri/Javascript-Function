
/* question 1
create a function that checks if a number is even or odd*/
function checkEvenAndOdd(x){
    if(x%2===0){
        return "The number is even"
    }
    else if(x%3===0){
        return "The number is odd"
    }
    else{
        return "input any number"
    }
}
console.log(checkEvenAndOdd());


/*question 2
create an array and fill it with numbers from 0-150...
* from the array you created above, separate even numbers from odd numbers
hint: even numbers will be in one array and odd numbers in another array*/
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 
26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 2, 
53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 
106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 
128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,150];
var evens = [];
var odds = [];

var evenNumbers = function(nums) {
    for (var i = 1; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
                console.log(evens);
        }
        else {
            odds.push(nums[i]);
                console.log(odds);
        }
    }

};

evenNumbers(nums);



/*question 3
create a function that calculates age from date of birth and add a condition statement that will print "your are an adult" if age is > 18 and "you are young" if age <18.
hint: the function will take an argument*/

 function ageCategory(birth){
        if(birth<18){
            return "You are young"
        }
        else if(birth>=18){
            return "You are an adult"
        }
        else{
            return "Try input any number"
        }
    }
    console.log(ageCategory(8));
    
