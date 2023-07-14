var places = new Array('Eifel tower', 'Niagra Waterfall', 'Deep sea', 'Center of Earth', 'Cave-Hira');
var p = new Array('Eifel tower', 'Niagra Waterfall', 'Deep sea', 'Center of Earth', 'Cave-Hira');
var s = new Array('Eifel tower', 'Niagra Waterfall', 'Deep sea', 'Center of Earth', 'Cave-Hira');
function OrgPlace(places) {
    console.log("Original", places);
    return places;
}
function ReverseOrder(p) {
    p.sort();
    console.log("Reverse order", p.reverse());
}
function AlphabeticOrder(s) {
    console.log("Sorted", s.sort());
}
OrgPlace(places);
AlphabeticOrder(s);
OrgPlace(places);
ReverseOrder(p);
OrgPlace(places);
ReverseOrder(p);
ReverseOrder(p);
AlphabeticOrder(places);
places = places;
console.log(places);
ReverseOrder(places);
places = places;
console.log(places);
/*
//array in alphabetical order without modifying the actual list
console.log("Sorted",places.sort());
//original array is still in its original order by printing it.
var places:string[]=['Eifel tower','Niagra Waterfall','Deep sea','Center of Earth','Cave-Hira'];
console.log("Actual array",places);//places;
//reverse alphabetical order without changing original list
console.log("Reverse order",places.reverse());
//var places:string[]=['Eifel tower','Niagra Waterfall','Deep sea','Center of Earth','Cave-Hira'];
console.log("Actual array",places);
var r:string[]=places.reverse();
*/
