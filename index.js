/**
 * Created by Ucenik on 30.3.2017..
 */



/**
var rectangle = {
    width: 20,
    height: 30
};

var calcArea = function (){
    this.area = this.width * this.height;
};

var calcPerimeter = function (){
    this.perimeter = 2 * this.width + 2 * this.height;
};
rectangle.calcArea = calcArea;
rectangle.calcPerimeter = calcPerimeter;

rectangle.calcArea();
rectangle.calcPerimeter();

console.log(rectangle.area);
console.log(rectangle.perimeter);
 */




var bob = new Object();
bob.age = 30;
var susan = new Object();
susan.age = 20;

var setAge = function (newAge){
    this.age = newAge;
};
bob.setAge = setAge;
susan.setAge = setAge;

bob.setAge(70);
susan.setAge(60);

console.log("Bob is ",bob.age," years old.");
console.log("Susan is ",susan.age, " years old.");

function ageCheck() {
    if (bob.age > susan.age) {
        console.log("Bob is older.")
    }
    else if (bob.age < susan.age) {
        console.log("Susan is older.")
    }
    else if (bob.age == susan.age) {
        console.log("They're both the same age.")
    }
}
ageCheck();




/**
var nino = {
    firstName: "Nino",
    lastName: "Macut",
    homeAddress: "Vrbovečki Pavlovec 91a",
    birthYear: "1999",
    class: "3G",
    year: "2016/2017"
};

var text = "";

document.getElementById("button").addEventListener("click",buttonfunction);
function buttonfunction(){
    nino.firstName = document.getElementById("tekst").value;
    nino.lastName = document.getElementById("tekst2").value;

    for (var x in nino) {
        text += nino[x] + "<br>";
    }
    document.getElementById("ispis").innerHTML = text;
    }
 */


