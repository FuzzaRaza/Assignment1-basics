var artistName;var title;
let musicAlbum={
    a:artistName,
    t:title
}

function make_album(musicAlbum){

    //var album:string[]=new Array(artistName,title);
    console.log("artist:"+musicAlbum.a);
    //return musicAlbum.a;
    //return musicAlbum.t;
    console.log("music title:",musicAlbum.t);

}
musicAlbum.a='fahad';
musicAlbum.t='home';
make_album(musicAlbum);

/*
console.log(make_album)
make_album('Atif','Bol');
make_album('Atif','Bulbul');
make_album('Qasim','Savariya');

function art(artistName,title,tracks:string='1'){
    this.art=artistName,
    this.t=title,
    this.tr=tracks
}
let a1=new art('Kaile','vacant','3');
console.log(art);*/