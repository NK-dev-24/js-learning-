//callbacks, Promise, Thenables, Asycn/Await

//Callback - Callback Hell

//function firstFunction (parameters, callbacks){
//callbacks();
//}

//Promise - 3 state: Pending, Fullfilled, rejected
//const myPromise = new Promise((resolve, reject)=>{
	//const error = false;
	//if (!error) {
		//resolve("Yes! resolved the promise");
	//}else {
		//reject("No! rejected the Promise");
	//}
//});

//myPromise.then(value => console.log(value))
//.catch(err => {
	//console.error(err)
//})


//const myNextPromise = new Promise((resolve, reject)=>{
	//setTimeout(function(){
		//resolve("myNextPromise resolved");
	//},3000);
//})

//myNextPromise.then (value => {
	//console.log(value)
//})

//const user = fetch("https://jsonplaceholder.typicode.com/users");

//pending
//fetch ("https://jsonplaceholder.typicode.com/users")
	//.then(response => {
//		return response.json();
//	})
//	.then(data => {
//		data.forEach(user => {
//			console.log(user);
//		})
//	})

// async/await

//const myfunction = async() => {
	//const response = await fetch("https://jsonplaceholder.typicode.com/users");
	//const jsonUserData = await response.json();
	//return jsonUserData;
//}

//const anotherFunc = async() => {
	//const data = await myfunction();
	//console.log(data);
//}
//anotherFunc();
	
//Async/await Example
//1. Workflow Function 

//const getAllUserEmails = async() => {
	//const responce = await fetch("https://jsonplaceholder.typicode.com/users");
	//const jsonUserData = await responce.json();
	//const userEmailArray = jsonUserData.map(user => {
	//	return user.email;
	//})
	//console.log(userEmailArray)
	//postToWebPage(userEmailArray)
//}

//const postToWebPage = (data) => {
//	console.log(data)
//}

//getAllUserEmails()


//Example 2 - 2nd Parameter 

//const getDadJoke = async() => {
	//const response = await fetch("https://icanhazdadjoke.com/",{
	//	method: "GET",
	//	headers:{
	//		accept: "appication/json"
	//	}
//	});
//	const jsonJokesData = await response.json();
//	console.log(jsonJokesData)
//} 

//getDadJoke();	


//Example 3 - Post Data

//const jokeObject = {
  //id: 'XgiydUKu4Ed',
  //joke: 'What do you call a fish wearing a bowtie? Sofishticated.',
//}

//const postData = async (jokeobj) => {
//		const response = await fetch("https://httpbin.org/post",{
//			method:"POST",
//			headers:{
//				"Content-Type": "application/json"
//			},
//			body: JSON.stringify(jokeobj)
//		});
		
//		const jokeResponse = await response.json();
//		console.log(jokeResponse);
//}

//postData(jokeObject)

//Example 4 - Retriving Data From URL

//const requestJoke = async (firstName, LastName) => {
	
//	const response = await fetch(`http://api.icndb.com/jokes/random?firstName=$(firstName)&lastName=$(lastName)`);
//	const jsonResponse = await response.json();
//	
//	console.log(jsonResponse.value.joke)
//}

//requestJoke("Ram","Baru");

 
 // Abstract into function 
 // form 
 
 //const getDataFromForm = () => {
	//const requestObj = {
		//firstName: "Bruce"
		//lastName: ""
	//}
 //}
 
 
 
 
 
 // Create Student Attendance Record - Namelist
 
 
 const requestJoke = async () => {
	
	const response = await fetch(`http://api.icndb.com/jokes/random?`);
	const jsonResponse = await response.json();
	
	console.log(jsonResponse.value.joke)
}

requestJoke();