console.log("Tests using && operator");
var parents = 'alive';
var grandparents = 'alive';
if (parents == 'alive' && grandparents == 'alive') {
    console.log(true);
}
else {
    console.log(false);
}
//Test2
console.log("Tests for equality and inequality with strings");
var VisitAbroad = 'nil';
if (VisitAbroad != 'nil') {
    console.log(true);
}
else {
    console.log(false);
}
//Test3
console.log("Tests using || operators");
var Hajj = 'yes';
var Ummrah = 'yes';
if (Hajj == 'yes' || Ummrah == 'yes') {
    console.log(true);
}
else {
    console.log(false);
}
//Test4
console.log("Test whether an item is not in a array");
var Courses = new Array('CS', 'AI', 'web app dev', 'mob app dev', 'Business communication');
for (var i = 0; i < Courses.length; i++) {
    if (Courses[i] == 'Pak studies') {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
//Test 5
console.log("Numerical tests ");
var num = 100;
if (num >= 50) {
    if (num <= 150) {
        if (num % 2 == 0) {
            console.log('Number is an even number');
        }
        else {
            console.log('Number is not an even number');
        }
    }
}
else {
    console.log(false);
}
//Test 6
console.log("Tests using the lower case function");
var std_name = 'fuzza';
if (std_name == std_name.toLowerCase()) {
    console.log(std_name.toUpperCase());
}
else {
    console.log("Name is already in upper case");
}
