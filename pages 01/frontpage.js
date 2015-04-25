function test() {
	//alert("Hi.")
	var username = document.loginForm.userid.value;
	var password = document.loginForm.password.value;

    Parse.User.logIn(username, password, {
        success: function(user) {
            console.log('fuckyeah')
            window.location = requestpage.html
        },
        error: function(user, error) {
            console.log("nope");
        }
    });
}
