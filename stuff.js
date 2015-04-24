Parse.initialize("Jlsk3dPD05eCFHICf8IhS786NsrKR9kP4QNgJ1wL", "8XPomIMiytGITQmvBIZSxYgdslw5RIokTQuHzN1p");

function test() {
    var rq = new request("biff", null, "hundo", "cvs", "both", "3my")
    putPost(rq)
}

function putPost(request) {

    var Posts = Parse.Object.extend("Posts")
    var post = new Posts()

    console.log("hi")

    post.set("username", request.name)
    post.set("deliveryFee", request.fee)
    post.set("pickup", request.company)
    post.set("comments", request.item)
    post.set("dropoff", request.dropoff)

    post.save(null, {
        success: function(post) {
            console.log("DIDIT")
        },
        error: function(post, error) {
            console.log("FUCK")
        }
    })
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

function login(u, p) {

    Parse.User.logIn("u", "p", {
        success: function(user) {
            window.location = requestpage.html
        },
        error: function(user, error) {
            console.log("nope");
        }
    });
}

function signup(u, p, e) {

    var user = new Parse.User();
    user.set("username", u);
    user.set("password", p);
    user.set("email", e);

    user.signUp(null, {
        success: function(user) {
            window.location = requestpage.html
        },
        error: function(user, error) {
            console.log("wat");
        }
    });
}
