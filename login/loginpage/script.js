var database=[{
	username:"jovan",
	password:"mudejob56@",
	},
	{username:"jov",
	password:"mudejob56#",},
	{username:"jovy",
	password:"mudejob56*",}
];
var newsFeed=[
	{
	username:"bobby",
	timeline:"so tired from all learning",
	},
	{
		username:"sally",
		timeline:"Javascript is soo cool!",
	}
];

var userNamePrompt=prompt("what is your user name?");
var passwordPrompt=prompt("What is your password?");
function uservalid(username,password){
	for(var i=0; i<database.length; i++){
		if(username===database[i].username && password===database[i].password){
			return true;
		}
	}
	return false;		
}

 function signIn(username,password){
	if(uservalid(username,password)){
		console.log(newsFeed);}
		else{
		alert("sorry, wrong username or password!");
		}
}
signIn(userNamePrompt,passwordPrompt);