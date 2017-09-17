var myName: String = "Jakub";
var myAge: number = 41;
var canVote: boolean = true;
var anything: any;
//anything = 2;

document.getElementById("tsStuff").innerHTML = "My name is " + myName;

document.write("myname is a " + typeof (myName) + "<br />");
document.write("canVote is a " + typeof (canVote) + "<br />");
document.write("myAge is a " + typeof (myAge) + "<br />");
document.write("anything is a " + typeof (anything) + "<br /><br /><br />");

var strToNum: number = parseInt("5");
var numToStr: number = 6;

document.write("numToStr is a " + typeof (numToStr.toString()) + "<br />");

const PI = 3.14159



interface SuperHero {
    realName: String;
    superName: String;
}

var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
}
document.write(superman.realName + " is " + superman.superName + "<br />");


var employees: string[] = ["alice", "bob", "celine"];

//employees.push(5);
document.write(employees.toString() + "<br />")
