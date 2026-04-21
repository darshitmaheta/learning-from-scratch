

//            constructor function
function User(username, password, logintime, signin){
    this.username = username;
    this.logintime = logintime;
    this.password = password;
    this.signin = signin;
    
    this.userDetails = function() {
        console.log(this);
    }
   
}
 const User1 =  User("darsh", 1234, 5000, true);
    const User2 =  User("darshit", 1234, 4000, false);
    const User3 =   User("darshil", 1234, 3000, true);

    console.log(User1);
    console.log(User2);
    console.log(User3);