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

function request(name, animalNo, fee,company, item, dropoff){
        this.name = name;
        this.animalNo = animalNo;
        this.fee = fee;
        this.company = company;
        this.item = item;
        this.dropoff = dropoff;
}

function getPosts() {

    var posts = []

    var query = new Parse.Query("Posts")

    

    query.find({
        success: function(results) {
            console.log(results.length);
            for ( x in results ) {
                var rand = Math.floor((Math.random() * 8) + 1);
                posts.push({ name : results[x].attributes.username
                                       , animalNo : rand
                                       , fee : results[x].attributes.deliveryFee
                                       , company : results[x].attributes.pickup
                                       , item : results[x].attributes.comments
                                       , dropoff : results[x].attributes.dropoff
                                       }
                          )
                console.log(posts[posts.length-1].name);
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
