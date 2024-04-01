"use strict";
//check palendrome...

function isPalendrome(str){
    str = str.toLowerCase().replace(/\W/g, "");
    // console.log(str);
    let rev= str.split("").reverse().join("");
    // console.log(rev);
    if(str===rev){
        console.log("This is palenDrome");;
    }else{
        console.log("Not Palendrome");
    }
}

isPalendrome("A man Drive The Car$");
isPalendrome("racecar");
isPalendrome("hello");
isPalendrome("level");