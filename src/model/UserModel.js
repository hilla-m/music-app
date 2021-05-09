export default class UserModel {
    constructor (plainUser){
        this.id= plainUser.id,
        this.fullName= plainUser.fullName,
        this.email= plainUser.email,
        this.password= plainUser.password,
        this.playlists= plainUser.playlists,
        this.albums= plainUser.albums,
        this.artists= plainUser.artists
    }

}

