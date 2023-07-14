var person_name = 'jInNah';
// lower case
console.log(person_name.toLowerCase());
// upper case
console.log(person_name.toUpperCase());
console.log(person_name.length);
//title case
var i = 0;
for (i = 0; i < person_name.length; i++) {
    if (i == 0) {
        console.log(person_name[i].toUpperCase());
    }
    else {
        console.log(person_name[i].toLowerCase());
    }
}
//console.log(person_name[0].toUpperCase().concat[person_name[1].toLowerCase(),person_name[2].toLowerCase(),person_name[3].toLowerCase(),person_name[4].toLowerCase(),person_name[5].toLowerCase()]);
console.log(person_name.toLocaleLowerCase());
