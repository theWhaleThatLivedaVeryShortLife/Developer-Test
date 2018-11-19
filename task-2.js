/*
* Task 2:
*  Make this work (no vowels, lowercase except the first letter):
* */

function reformat(string) {
    let str = string.replace(/[aAeEiIoOuU]/g, "");
    console.log(str.toLowerCase().charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}

//reformat("liMeSHArp DeveLoper TEST"); //Lmshrp dvlpr tst
