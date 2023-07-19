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
ReverseOrder(places);
places = places;
ReverseOrder(p);
AlphabeticOrder(places);
places = places;
console.log(places);
ReverseOrder(places);
places = places;
console.log(places);
