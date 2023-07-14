function show_magicians(magicians){
    for (var i=0;i<magicians.length;i++)
    {
        console.log(magicians[i]);
    }
}
var magicians:string[]= new Array('john','jacob','kiel');
show_magicians(magicians);
function make_great(magicians){
    for(var i=0;i<magicians.length;i++)
    {
        magicians[i]=('Great'.concat(magicians[i]));
    }
    return magicians;
}
make_great(magicians);
var greatMagician=magicians;
show_magicians(greatMagician);