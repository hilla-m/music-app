class UserModel {
    constructor(plainUser) {
        this.id= plainUser.id;
        this.name= plainUser.name;
        this.email= plainUser.email;
        this.password= plainUser.password;
        this.playlists= plainUser.playlists;
        this.albums= plainUser.albums;
        this.artists= plainUser.artists;
    }

}

export default UserModel;

