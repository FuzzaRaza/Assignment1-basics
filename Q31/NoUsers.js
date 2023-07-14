var usernames = ['admin', 'ali', 'furqan', 'umer', 'sam'];
usernames.pop();
usernames.pop();
usernames.pop();
usernames.pop();
usernames.pop();
if (usernames.length == 0) {
    console.log("We need to find some users!");
}
else if (usernames.length != 0) {
    var Person_age = 66;
    if (Person_age < 2) {
        console.log("Person is a baby.");
    }
    else if (Person_age == 2 || Person_age < 4) {
        console.log("The person is a toddler.");
    }
    else if (Person_age == 4 || Person_age < 13) {
        console.log("The person is a kid.");
    }
    else if (Person_age == 4 || Person_age < 13) {
        console.log("The person is a kid.");
    }
    else if (Person_age == 13 || Person_age < 20) {
        console.log("The person is a teenager.");
    }
    else if (Person_age == 20 || Person_age < 65) {
        console.log("The person is an adult");
    }
    else if (Person_age >= 65) {
        console.log("The person is an elder.");
    }
    else {
    }
}
