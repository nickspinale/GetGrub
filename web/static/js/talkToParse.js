Parse.initialize("Jlsk3dPD05eCFHICf8IhS786NsrKR9kP4QNgJ1wL", "8XPomIMiytGITQmvBIZSxYgdslw5RIokTQuHzN1p");

function isNumber(obj) { return !isNaN(parseFloat(obj)) }

function putPost() {
	var doLocation = document.getElementById("dropofflocation").value;
	var puLocation = document.getElementById("pickuplocation").value;
	var comments = document.getElementById("comments").value;
	var delFee = document.getElementById("deliveryfee").value;

	if(!isNumber(delFee)){
		alert("illegal value for deliveryfee.")
	} else{

        var Posts = Parse.Object.extend("Posts")
        var post = new Posts()

        var num = "JAVASCRIPTSMD"
        var q = new Parse.Query(Parse.User)
        q.equalTo("username", localStorage["username"])
        q.find().then(function(u) {

            num = u[0].get("userNum")

            console.log("NUMIS" + num)

            post.set("username", localStorage["username"])
            post.set("deliveryFee", delFee)
            post.set("pickup", puLocation)
            post.set("comments", comments)
            post.set("dropoff", doLocation)
            post.set("userNum", num)
            post.set("time", (new Date()).toDateString())

            post.save(null, {
                success: function(post) {
                    window.location = "requestpage.html"
                    console.log("DIDIT")
                },
                error: function(post, error) {
                    console.log("FUCK")
                }
            })
        })
	}
}


function login() {
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
    localStorage["username"] = username
}

function signup() {
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

        localStorage["username"] = username

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
