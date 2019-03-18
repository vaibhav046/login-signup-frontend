export class User {
    email: String;
    password: String;
    username: String;
    static instance: User;
    constructor(email, password, username) {
        this.email = email;
        this.password = password;
        this.username = username;
    }


    static getInstance(email, password, username) {
        if (!User.instance) {
            User.instance = new User(email, password, username);
        }
        return User.instance;
    }
}
