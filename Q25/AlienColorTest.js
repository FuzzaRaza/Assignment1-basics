//pass version
var color = new Array('green', 'yellow', 'red');
for (var i = 0; i < color.length; i++) {
    if (color[i] == 'green') {
        console.log("You have earned 5 points.");
    }
}
//fail version
for (var i = 0; i < color.length; i++) {
    if (color[i] == 'purple') {
        console.log("You have earned 5 points.");
    }
}
