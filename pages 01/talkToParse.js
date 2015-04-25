Parse.initialize("Jlsk3dPD05eCFHICf8IhS786NsrKR9kP4QNgJ1wL", "8XPomIMiytGITQmvBIZSxYgdslw5RIokTQuHzN1p");

function putPost(request) {

    var Posts = Parse.Object.extend("Posts")
    var post = new Posts()

    console.log("hi")

    post.set("username", request.name)
    post.set("deliveryFee", request.fee)
    post.set("pickup", request.company)
    post.set("comments", request.item)
    post.set("dropoff", request.dropoff)
    post.set("animalNo", Post.User.current.attribute.userNo)

    post.save(null, {
        success: function(post) {
            console.log("DIDIT")
        },
        error: function(post, error) {
            console.log("FUCK")
        }
    })
}

// function request(name, animalNo, fee,company, item, dropoff){
//         this.name = name;
//         this.animalNo = animalNo;
//         this.fee = fee;
//         this.company = company;
//         this.item = item;
//         this.dropoff = dropoff;
// }

function getPosts() {

    var posts = []

    var query = new Parse.Query("Posts")

    query.find({
        success: function(results) {
            console.log(results.length);
            for ( x in results ) {
                posts.push({ name     : results[x].attributes.username
                           , animalNo : results[x].attributes.userNum
                           , fee      : results[x].attributes.deliveryFee
                           , company  : results[x].attributes.pickup
                           , item     : results[x].attributes.comments
                           , dropoff  : results[x].attributes.dropoff
                           })
                console.log(posts[posts.length-1].name);
            }
        },
        error: function(error) {
            console.log("error retriving");
        }
    });

    return posts
}

function login() {
	//alert("Hi.")
	var username = document.loginForm.userid.value;
	var password = document.loginForm.password.value;

    Parse.User.logIn(username, password, {
        success: function(user) {
            console.log('fuckyeah')
            window.location = "requestpage.html"
        },
        error: function(user, error) {
            console.log(error.message);
        }
    });
}

function signup() {
	//alert("Hi.");
	var username = document.register.userid.value;
	var email = document.register.email.value;
	var password = document.register.password.value;
	var confirm = document.register.confirmpassword.value;

	//replace this with whatever we want to do.
	if(password !== confirm){
		alert("Password and confirm don't match.");
	} else {

        var user = new Parse.User();
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);

        var rand = Math.floor((Math.random() * 8) + 1);
        user.set("userNum", rand + "")

        user.signUp(null, {
            success: function(user) {
                window.location = "requestpage.html"
            },
            error: function(user, error) {
                console.log(error.message);
            }
        });
    }

}
