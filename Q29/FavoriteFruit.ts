//Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
var fruits :string[]= new Array("Apple","Banana","Peach","Mango","Coconut");
for(var i=0;i<fruits.length;i++)
{
    if (fruits[i]=="Mango")
    {
        console.log('true');
    }
    else if(fruits[i]=='Plum')
    {
        console.log('true')
    }

    else if(fruits[i]=='Guava')
    {
        console.log('true')
    }
}
//Make a array of your three favorite fruits and call it favorite_fruits
var favorite_fruits=["Apple","Banana","Peach"];
//If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
for(var i=0;i<fruits.length;i++)
{
    if (fruits[i]=="Mango")
    {
        console.log('Mango is your favorite');
    }
    else if(fruits[i]=='Plum')
    {
        console.log('Plum is your favorite')
    }

    else if(fruits[i]=='Guava')
    {
        console.log('Guava is your favorite')
    }
}