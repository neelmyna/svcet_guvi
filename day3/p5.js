// Program to create and use JS object using ES6 syntax
const trainer = {
	name : 'Nithin',
	tech1() {  // ES6 Syntax to define a Method

 		console.log("AIML JavaFS Trainer")
	},
	tech2() {  // ES6 Syntax to define a Method
		console.log("C++ MERN Trainer")
	}
};

function myFunction(param) {
	trainer.tech1(); // Call to the method tech1()
	trainer['name'] = 'Nithin Belamkar' // name of the trainer object modified
	trainer[param]();
}

myFunction('tech1');
