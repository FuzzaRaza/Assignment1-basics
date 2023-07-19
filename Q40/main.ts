function make_album(artistName,title,tracks?:number){
    interface Album_details{
        artistName:string;
        title:string;
        tracks?:null;
    }
    if (tracks!= null)
    {
        console.log(`Artist: ${artistName}, Album Name: ${title},number of tracks ${tracks}`);
    }
    else
    {
        console.log(`Artist: ${artistName}, Album Name: ${title}`);
    }
}

make_album('Atif','Bol');
make_album('Atif','Bulbul');
make_album('Qasim','Savariya',5);
/*
make_album({artistName:'Atif',title:'Bol'});
make_album({artistName:'Atif',title:'Bulbul'});
make_album({artistName:'Qasim',title:'Savariya',tracks:5});
console.log()*/