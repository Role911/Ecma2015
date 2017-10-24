// lecture let and consta t
/*

//es5
/*
var name5 = "Jane Smith";
var age5 = 23;

name = "jane miller";
console.log(name5);
`
const name6 = "jane smith";
let age6 = 23;
name6 = "jane miller";

console.log(name6);
*/
//fs5   
/*
function diversLicence5(passedTest) {
    if (passedTest) {
        var firstName = "John";

        var yearOfBirth = 1990;


        console.log(firstName + " born in " + yearOfBirth + " is now offical allowed to drive a car.");
    }
}
diversLicence5(true);
*/
//es6
/*
function diversLicence(passedTest) {
    const yearOfBirth=1990 ;
    let firstName = "smith";
    if (passedTest) {
        console.log(firstName + " born in " + yearOfBirth + " is now offical allowed to drive a car.");
    }
};
diversLicence(true);


let i=23;

for(let i=0; i<5; i++){
    console.log(i);
};
console.log(i);
*/
//Blocks and IIEFs
//es5

/*
{
const a =1;
let b=2;
var c= 3;
}
//console.log(a+b);


(function(){
var c= 3;
})();

//console.log(c)
*/

//strigs
/*
let firstName = "john";
let lastName = "smith";

const yearOfBirth= 1990;

function calcAge(year) {
    return 2016-year;
}

//es5
console.log("This is " + firstName + " " + lastName + " .He is born in " + yearOfBirth + " Today, he is " + calcAge(yearOfBirth) + " years ");

//es6
console.log(`This is ${firstName} ${lastName}.He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName};`
console.log(n.startsWith("n"));
console.log(n.endsWith("hn"));
console.log(n.includes("m"));
console.log(n.startsWith("n"));
*/
/*
const years = [1990,1902,1982,1937];

//es5
var ages5= years.map(function(el){
    return 2016-el;
});
console.log(ages5);

const ages6=years.map(el => 2016-el);
console.log(ages6);

ages7=years.map((el,index) => `Age element ${index + 1 }: ${2016 - el}`);

console.log(ages7);

ages8=years.map((el, index)=>{
const now= new
Date().getFullYear();
const age=now-el
return `Age element ${index + 1 }: ${age}`;
});
console.log(ages8);
*/

//ES5
/*
var box5 = {
    color: "green",
    position:1,
    clickMe: function() {
        var self=this;
        document.querySelector(".green").addEventListener("click", function(){
            var str = "This is box number " + self.position + " and it is " + self.color;
            alert(str);
        })
    }
}

//box5.clickMe();

//es6
var box6 = {
    color: "green",
    position:1,
    clickMe: function() {
        document.querySelector(".green").addEventListener("click",()=> {
            var str = "This is box number " + this.position + " and it is " + this.color;
            alert(str);
        })
    }
}
box6.clickMe();
*/

//es5
/*
function Person(name) {
    this.name=name;
}

Person.prototype.myFriends5= 
    function(friends){
    var arr= friends.map(function(el){
        return this.name + " is friends with " + el;
    }.bind(this));

    console.log(arr);
}

var friends= ["Bob","Jane", "Mark"];
new Person("John").myFriends5(friends);


//es6
function Person(name) {
    this.name=name;
}
Person.prototype.myFriends6= 
    function(friends){
        var arr= friends.map(el =>
            `${this.name}  is friends with  ${el}`);
    console.log(arr);
}
var friends= ["Bob","Jane", "Mark"];
new Person("John").myFriends6(friends);
*/
//es5
/*
var john = ["John", 26];
var name= john[0];
var age=john[1]



//es6
const[name1,age1]= ["John", 26];
console.log(name1);
console.log(age1);


const obj = {
    firstName:"John",
    lastName:"Smith"
};
*/


//Arrays
/*
const boxes = document.querySelectorAll(".box");
*/
/*
// es5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor="dodgerblue";
});
/*
const boxesArr6 = Array.from(boxes);

Array.from(boxes).forEach(cur =>
    cur.style.backgroundColor =
    "dodgerblue");

//es5
/*
for(var i=0; i<boxesArr5.length; i++) {
    if(boxesArr5[i].className === "box blue"){
        continue;
    }
    boxesArr5[i].textContent = "I changed to blue !";
}
*/
//ES6
/*
for(const cur of boxesArr6){
if(cur.className.includes("blue")){
    continue;
}
cur.textContent="I changed to blue!";
}
*/
//es5
/*
var ages= [12,454,4,65,234];


//es6

console.log(ages.findIndex(cur => cur>=18));
console.log(ages.find(cur => cur>=18))bind
*/
/*
function addFourAges(a,b,c,d,e,g){
    return a + b+ c+ d+e+g;
}
var sum1= addFourAges(18,20,29,40);
//console.log(sum1);

//es5
var ages1= [12,45,12,64,45,4900];
*/
/*
var sum2= addFourAges.apply(null,ages);
console.log(sum2);
*/
/*
const sum3= addFourAges(...ages1);
console.log(sum3);

const familySmith = ["John","Jane","Mark"];
const familyRodo = ["John","Jane","Mark"];

const bigFamily =[...familySmith, ...familyRodo];

console.log(bigFamily);  
*/
/*
const h = document.querySelector("h1");

const boxes= 
document.querySelectorAll(".box");

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = "purple");

*/
//ES 5
/*
function isFullAge5() {
    //console.log(arguments);
    var argsArr= Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2017 - cur)>= 18);
    })
}
isFullAge5(1990,1991,2000);

//ES6

function isFullAge6(...years) {
years.forEach(cur => 
    console.log((2016-cur) >=18));
    
}

isFullAge6(1990,1991,2000);
*/
/*
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr= Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2017 - cur)>= limit);
    })
}
isFullAge5(21,1990,1991,2000);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => 
        console.log((2016-cur) >= limit));
        
    }    
isFullAge6(40,1990,1991,2000);
*/
//defalult parametatrs

//ES5
/*
function SmithPerson(firstName,yearOfBirth,lastName,nationality){

    lastName === undefined ? lastName ="Smith" : lastName=lastName;
    nationality === undefined ? nationality = "american" : nationality = nationality;

    this.firstName=firstName;
    this.yearOfBirth=yearOfBirth;
    this.lastName=lastName;
    this.nationality= nationality;
}
*/
/*
var john= new SmithPerson("John",1990);
var emily = new SmithPerson("Emily", 1982, "Diaz","Spanish");


*/
/*
const question = new Map();

question.set("question", "What is the offical name of lastes major JavaScript version");

question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES7");
question.set(4, "ES2015");
question.set(5, "ES2016");

question.set("correct", 3);
question.set(true, "correct answer");
question.set(false, "Wrong answer please try again");

//console.log(question.get("question"));
//console.log(question.size);
*/

//question.clear();
/*
question.forEach((value, key) =>
console.log(`This is a ${key}, and its set to ${value}`));
*/

/*
for (let [key, value] of
    question.entries()) {
    if (typeof(key) === "number") {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt("Write the correct answer"))
console.log(question.get(ans===question.get("correct")));

*/
//Lecture
/*
var Person5 =function(name, yearOfBirth,job) {
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;

}
Person5.prototype.calculateAge=function(){
    var age= new Date().getFullYear-this.yearOfBirth;
    console.log(age);
}

var john5= new Person5("John", 1990, "teacher");

//es6

class Person6{
    constructor (name,yearOfBirth, job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job= job; 
    }
    calculateAge(){
        var age= new Date().getFullYear-this.yearOfBirth;
        console.log(age);
    }
}
/*
const john6= new Person6("John", 1990, "teacher");
*/
/*
var Person5 =function(name, yearOfBirth,job) {
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;

}
Person5.prototype.calculateAge=function(){
    var age= new Date().getFullYear()-this.yearOfBirth;
    console.log(age);
}

var john5= new Person5("John", 1990, "teacher");


var Athlete5=function(name,yearOfBirth,job,olymicGames, medals)
{
    Person5.call(this,name,yearOfBirth,job);
    this.olymicGames=olymicGames;
    this.medals=medals;
}

Athlete5.prototype=
Object.create(Person5.prototype);

Athlete5.prototype.wonMedal=
function() {
    this.medals++;
    console.log(this.medals);
}


var johnAthlete5 = new
Athlete5("John", 1990,"swimmer",3,10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/
//es6
/*
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olypicGames, medals) {
        super(name, yearOfBirth, job);
        this.olypicGames = olypicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6("John", 1990, "swimer", 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/
//CODING CHALLANGE
/*
class Park {
    constructor(nameOfPark, yearOfPark,numsOfPark,numOfTrees, parkArea) {
        this.nameOfPark = nameOfPark;
        this.yearOfPark=yearOfPark;
        this.numsOfPark = numsOfPark;
        this.numOfTrees=numOfTrees;
        this.parkArea=parkArea;
    }
    densityOfParks() {
        var averageNumberOfParks= this.numOfTrees/this.parkArea;
        console.log(averageNumberOfParks);  
    }
} 

class Park1 extends Park {
    constructor(nameOfPark, yearOfPark, numsOfPark,numOfTrees, parkArea,averageNum,overThos) {
        super(nameOfPark, yearOfPark,numsOfPark,numOfTrees, parkArea);
        this.averageNum = averageNum;
        this.overThos=overThos;
    }
}
const park1=new Park1("green", 1990, 3, 6666,100);
const park2=new Park1("brown", 1342, 3, 53000,200);
const park3=new Park1("yellow", 1445, 3, 50700,100);







const question = new Map();

question.set("question", "What is the offical name of lastes major JavaScript version");

question.set(green, green);
question.set(2, "brown");
question.set(3, "yellow");

var green=park1.densityOfParks();
var brown=park2.densityOfParks();
var yellow=park3.densityOfParks();

for (let [key, value] of
    question.entries()) {
    if (typeof(key) === "green") {
        console.log(`Answer ${key}: ${value}`);
    }
}

*/

//Coding challange

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Park extends Element {
    constructor(name, buildYear, area, numOfTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numOfTrees = numOfTrees;
    }
    treeDesity() {
        const density = this.numOfTrees / this.area;
        console.log(`${this.name} park has a tree density of ${density} trees per km`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classification = new Map();

        classification.set(1,"tiny");
        classification.set(2,"small");
        classification.set(3,"normal");
        classification.set(4,"big");
        classification.set(5,"huge");
        console.log(`${this.name}, build in ${this.buildYear} , is a classification.get{this.size} street.`);
    }
}

const allParks = [new Park("Green Park", 1998, 0.2, 215),
new Park("National Park", 1839, 2.9, 2345),
new Park("Bam Bam", 1700, 4.0, 12123),
new Park("Role Role", 1900, 9.0, 12123)];

const allStreets = [new Street("Green Street", 1998, 2, 21),
new Street("National Street", 1839, 2, 45),
new Street("Bam Bam Street", 1323, 4, 123),
new Street("Role Role Street", 1323, 9, 211)];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log("---------REPORT PARKS-----------");
    // DESITY
    p.forEach(el => el.treeDesity());
    //AVERAGE AGES
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} age.`);
    //WHICH PARK HAS MORE THAN 1000 TREES
    const i = p.map(el => el.numOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
    console.log("---------REPORT STREETS-------------");
    //Total and avg length of streets
    const [totalLength, avgLength]=calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    //Classify sizes
    s.forEach(el => el.classifyStreet());
}
reportParks(allParks);
reportStreets(allStreets);