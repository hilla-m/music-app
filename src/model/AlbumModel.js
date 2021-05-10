class AlbumModel {
    constructor(plainAlbum) {
        this.id= plainAlbum.id;
        this.title= plainAlbum.title;
        this.artistId= plainAlbum.artistId;
        this.year= plainAlbum.year;
        this.genre= plainAlbum.genre;
        this.image= plainAlbum.image;
    }

}

export default AlbumModel;

