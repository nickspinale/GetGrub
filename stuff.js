Parse.initialize("Jlsk3dPD05eCFHICf8IhS786NsrKR9kP4QNgJ1wL", "8XPomIMiytGITQmvBIZSxYgdslw5RIokTQuHzN1p");

// function tst() {
//     var acc = ""
//     var psts = getPosts()
//     for ( x in psts ) {
//         acc = acc + " " + psts[x].item
//     }
//     alert(acc)
// }

function putPost(request) {
    
}

function getPosts() {

    var posts = []

    var query = new Parse.Query("Posts")

    var rand = Math.floor((Math.random() * 8) + 1);

    query.find({
        success: function(results) {
            for ( x in results ) {
                posts.push( new request( results[x].attributes.username
                                       , rand
                                       , results[x].attributes.deliveryFee
                                       , results[x].attributes.pickup
                                       , results[x].attributes.comments
                                       , results[x].attributes.dropoff
                                       )
                          )
            }
        },
        error: function(error) {
            console.log("error retriving");
        }
    });

    return posts
}

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
