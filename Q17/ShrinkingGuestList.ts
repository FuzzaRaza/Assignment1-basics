var Guests=['Khadija', 'Nusrat','Kiran', 'Khalida',"Furqan",'Mahnoor', 'Salman','Zarina'];
console.log('I can invite only two people for dinner')
var Message="I'm sorry to say that I can't invite you for dinner."
console.log(Guests.pop(),Message);
console.log(Guests.pop(),Message);
console.log(Guests.pop(),Message);
console.log(Guests.pop(),Message);
console.log(Guests.pop(),Message);
console.log(Guests.pop(),Message);

var invite=", You are still invited.";
console.log(Guests[0],invite);
console.log(Guests[1],invite);

Guests.pop();
Guests.pop()
console.log(Guests);