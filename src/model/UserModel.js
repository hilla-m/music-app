class UserModel {
    constructor(plainUser) {
        this.id= plainUser.id;
        this.name= plainUser.name;
        this.email= plainUser.email;
        this.password= plainUser.password;
        this.albums= plainUser.albums;
        this.artists= plainUser.artists;
    }

    login(email , password) {
        return email.toLowerCase() === this.email.toLowerCase() && password===this.password;
    }
}

export default UserModel;

