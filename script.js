// function multiply(a, b) {
// 	return a*b
// 	}	
// alert(multiply(4, 5));
	

// multiply(5, 10);

// function test(c, d) {
// 	if (c=== 10 || d === 10) {
// 		return "This is good";
// 	} else {
// 		return "This is bad"
// 	}
// }
// test(8)

// function checkMyAge(age) {
// 	if(Number(age) > 23) {
// 		return "That is above the age";
// 	}else if (Number(age) === 23) {
//          return "This is the perfect age";
// 	} else if(Number(age) < 23) {
// 		return "you are too young to do it";
// 	}
// }
// checkMyAge();





// function checkDriverAge(age) {
// 	if (Number(age) < 18) {
// 		return "Sorry, you are too yound to drive this car. Powering off";
// 	} else if (Number(age) > 18) {
// 		return "Powering On. Enjoy the ride!";
// 	} else if (Number(age) === 18) {
// 		return "Congratulations on your first year of driving. Enjoy the ride!";
// 	}
// }
// checkDriverAge();

// var list = ["tiger", "bear", "lion", "bird"]




// var database = [
//   {
//   	username: "andy",
//   	password: "suppersecet",
//   },
//   {
//   	username: "Moshe",
//   	password: "Moshe6700!",
//   },
//   {
//   	username: "hendel",
//   	password: "123456",
//   },
//   {
//   	username: "Chavy",
//   	password: "12!",
//   },
// ];

// var newsFeed = [
//   {
//   	username: "booby",
//   	timeline: "So tired of all that learning",
//   },
//   {
//   	username: "Sally",
//   	timeline: "test this is amazing",
//   }
// ];

// function isUserValid(username, password) {
// 	for (var i=0; i < database.length; i++) {
// 		if(database[i].username === username && database[i].password === password) {
// 			return true;
// 		}

// 	}
// 	return false;
// }

// var userNamePrompt = prompt("what's your username?");
// var passwordPrompt = prompt("what's your password?");

// function signIn(username, password) {
// 	if (isUserValid(username, password)) {
// 		console.log(newsFeed);
// 	}else {
// 		alert("Sorry, wrong username or password");
// 	}
// }
// signIn(userNamePrompt, passwordPrompt);
// var todos = [
//   "clean room",
//   "brush teeth",
//   "exercise",
//   "study javascript",
//   "eat healty",
// ];
// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++) {
//   todos.pop();
// }



// var counterOne = 10;
// while (counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne--;
// }





    


// 









// function myFunction() {
// // 	document.getElementById("test").innerHTML = "Look what is going on here!!";
// // }

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3")
var body = document.getElementById("gradient");

function addGradient() {
	body.style.background =
	 "linear-gradient(to right,"
	  + color1.value + "," 
	  + color2.value + ","
	  + color3.value + ")";

	  css.textContent = body.style.background + ",";
}
color1.addEventListener("input", addGradient); 
color2.addEventListener("input", addGradient); 
color3.addEventListener("input", addGradient);
	



 var elements = document.getElementsByTagName("li");
for (var i = 0; i < elements.length; i++) {
    document.getElementsByTagName("li")[i].textContent += "!";
}