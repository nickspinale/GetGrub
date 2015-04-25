function submit() {
	//alert("Hi.");
	var username = document.register.userid.value;
	var email = document.register.email.value;
	var password = document.register.password.value;
	var confirm = document.register.confirmpassword.value;

	//replace this with whatever we want to do.
	if(password !== confirm){
		alert("Password and confirm don't match.");
	}
	alert(username+" "+email+" "+password+" "+confirm);

}