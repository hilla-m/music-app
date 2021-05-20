class PlaylistModel {
    constructor(plainPlaylist) {
        this.id= plainPlaylist.id;
        this.title= plainPlaylist.title;
        this.userId= plainPlaylist.userId;
        this.tracksId= plainPlaylist.tracksId;
        this.active=plainPlaylist.active;
    }

}

export default PlaylistModel;
