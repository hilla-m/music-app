class TrackModel {
    constructor(plainTrack) {
        this.id= plainTrack.id;
        this.title= plainTrack.title;
        this.length= plainTrack.length;
        this.albumId= plainTrack.albumId;
        this.play = plainTrack.play;
        this.file = plainTrack.file;
    }

}

export default TrackModel;
