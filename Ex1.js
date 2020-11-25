/** @format */

// Hash table class, will include functions for;
//  inserting, retrieving and displaying data from the hash table
// as well as other functions if neccessary as well.

function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.display = display;
	this.put = put;
	// this.get = get;
}

// this function will sum the value of the letter in the key using the build in method charCodeAt() to return's a characters value, that hash is then the sum modulo the size of the array.
function simpleHash(data) {
	let total = 0;
	for (let i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}
	console.log(`Hash Value ${data} ${total}`);
	return total % this.table.length;
}

function betterHash(string) {
	let primeNum = 31;
	let total = 0;

	for (i = 0; i < string.length; i++) {
		total += primeNum * total + string.charCodeAt(i);
	}

	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length - 1;
	}
	return parseInt(total);
}

// put function will insert or place a data in the hash table.
// it will get the array index value from the simpleHash method, then store that data element in that position.
function put(data) {
	const position = this.simpleHash(data);
	this.table[position] = data;
}

function put(data) {
	const position = this.betterHash(data);
	this.table[position] = data;
}

// this function will display the data in the hash table
function display() {
	const number = 0;
	for (let i = 0; i < this.table.length; i++) {
		if (this.table[i] !== undefined) {
			console.log(`${i} ${this.table[i]}`);
		}
	}
}

const animals = [
	"lion",
	"cheetah",
	"jaguar",
	"zebra",
	"hippo",
	"crocodile",
	"puma",
	"dog",
	"elephant",
];

const hash = new HashTable();
for (let i = 0; i < animals.length; i++) {
	hash.put(animals[i]);
}
hash.display();
