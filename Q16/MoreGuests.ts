var Message="Dear guests,luckily i found a big table so there would be more guest than earlier. The more,the merrier."
console.log(Message);
var old_Guests=['Nusrat','Kiran','Khalida','Mahnoor','Salman'];

old_Guests.push("Zarina");old_Guests.splice(0,0,'Khadija');
var Guests=old_Guests;
Guests.splice(3,0,'Furqan');

var invite="Assalamualikum, I'm organizing a party of friends I wish you could join us.";
console.log(Guests[0],"!",invite);
console.log(Guests[1],"!",invite);
console.log(Guests[2],"!",invite);
console.log(Guests[3],"!",invite);
console.log(Guests[4],"!",invite);
console.log(Guests[5],"!",invite);
console.log(Guests[6],"!",invite);
console.log(Guests[7],"!",invite);
