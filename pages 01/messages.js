var messageArea = document.getElementById("correspondences");

var currConvo;

function getConversations(){
	var query = new Parse.Query("Conversations");
	query.equalTo("user1", localStorage["username"]);
	query.find().then(function(u){
		if(u.length>0){
		currConvo = u[0].attributes.conversationId;
		} else{
			currConvo = 0;
		}
		for(i=0;i<u.length;i++){
			document.getElementById("convos").innerHTML += '<li class="contact" onclick="switchConversation('+u[i].attributes.conversationId+
			')" ><p class="contactname">'+ 
			u[i].attributes.user2 + '</p></li>';
		}
	});
}

function sendMessage(s){
	var query = new Parse.Query(Parse.User);
	query.equalTo("username", localStorage["username"]);

	query.find().then(function(t) {
		var text = document.getElementById("text").value;

		var Messages = Parse.Object.extend("Messages");
		var message = new Messages();


		//copy this format for each value.
		message.set("username", localStorage["username"]);
		message.set("messageContent", document.getElementById("text").value);
		message.set("conversationId", currConvo);
		message.set("time", (new Date()).toDateString());
		message.set("userNum", t[0].attributes.userNum);

		message.save(null, {
            success: function(post) {
                console.log("DIDIT")
                switchConversation(currConvo);
                document.getElementById("text").value='';
            },
            error: function(post, error) {
                console.log("FUCK")
            }
        });
	});
}

function switchConversation(cId){
	messageArea.innerHTML = ''

	var query = new Parse.Query("Messages");
	query.equalTo("conversationId", String(cId));
	query.find().then(function(u){
		console.log("#messages: " + u.length);
		for(i=0;i<u.length;i++){
			if(u[i].attributes.username==localStorage["username"]){
				messageArea.innerHTML += '<p class="rmessage" align="left">'+u[i].attributes.messageContent+'</p><br><br><br><br>';
			} else{
				messageArea.innerHTML += '<p class="lmessage" align="left">'+u[i].attributes.messageContent+'</p><br><br><br><br>';	
			}
		}
		messageArea.scrollTop = messageArea.scrollHeight;
	})
}	

function sampleConvo(){
	var Conversations = Parse.Object.extend("Conversations");
	var convo = new Conversations();

	//copy this format for each value.
	convo.set("user1", localStorage["username"]);
	convo.set("user2", "John Doe");
	convo.set("messageContent", document.getElementById("text").value);
	convo.set("conversationId", "123465");	
	convo.set("user2Num", "5");
	convo.save(null, {
        success: function(post) {
            console.log("DIDIT")
        },
        error: function(post, error) {
            console.log("FUCK")
        }
    });
}
getConversations();
switchConversation(currConvo);
