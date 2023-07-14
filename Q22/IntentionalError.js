//Introducing intentional error
// if the type is not identified for the index variable error is introducted
var data = new Array('Hill park', 'Water lilies', 'Karakoram', 'Arabic', 'Sign language', 'Persian', 'Austin', 'Munich', 'San diago', 'chinese', 'Arabian sea', 'Mount-everest', 'Arabian sea', 'Mongolia', 'Great Wall of china');
/*for ( i=0;i<data.length;i++)
{
    console.log(data[i]);
}*/
//Correcting error
for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
}
