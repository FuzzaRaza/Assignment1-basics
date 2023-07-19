function make_album(artistName, title, tracks) {
    if (tracks != null) {
        console.log("Artist: ".concat(artistName, ", Album Name: ").concat(title, ",number of tracks ").concat(tracks));
    }
    else {
        console.log("Artist: ".concat(artistName, ", Album Name: ").concat(title));
    }
}
make_album('Atif', 'Bol');
make_album('Atif', 'Bulbul');
make_album('Qasim', 'Savariya', 5);
/*
make_album({artistName:'Atif',title:'Bol'});
make_album({artistName:'Atif',title:'Bulbul'});
make_album({artistName:'Qasim',title:'Savariya',tracks:5});
console.log()*/ 
