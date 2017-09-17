var myName = "Jakub";
var myAge = 41;
var canVote = true;
var anything;
//anything = 2;
document.getElementById("tsStuff").innerHTML = "My name is " + myName;
document.write("myname is a " + typeof (myName) + "<br />");
document.write("canVote is a " + typeof (canVote) + "<br />");
document.write("myAge is a " + typeof (myAge) + "<br />");
document.write("anything is a " + typeof (anything) + "<br /><br /><br />");
var strToNum = parseInt("5");
var numToStr = 6;
document.write("numToStr is a " + typeof (numToStr.toString()) + "<br />");
var PI = 3.14159;
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
document.write(superman.realName + " is " + superman.superName + "<br />");
var employees = ["alice", "bob", "celine"];
//employees.push(5);
document.write(employees.toString() + "<br />");
