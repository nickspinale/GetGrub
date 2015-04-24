Parse.initialize("Jlsk3dPD05eCFHICf8IhS786NsrKR9kP4QNgJ1wL", "8XPomIMiytGITQmvBIZSxYgdslw5RIokTQuHzN1p");

function go() {

    Parse.User.logIn("nick", "nick", {
        success: function(user) {
            alert("yup");
        },
        error: function(user, error) {
            alert("nope");
        }
    });

}

function og() {

    var user = new Parse.User();
    user.set("username", "chill");
    user.set("password", "imchill");
    user.set("email", "chill@abc.edu");

    user.signUp(null, {
        success: function(user) {
            alert("yay");
        },
        error: function(user, error) {
            alert("wat");
        }
    });

}

function goo() {

    var query = new Parse.Query("Posts")

    query.find({
        success: function(results) {
            var users = "0"
            for ( x in results ) {
                users = users + ", " + results[x].attributes.comments
            }
            alert(users)    
        },
        error: function(error) {
            alert("waat");
        }
    });
}
