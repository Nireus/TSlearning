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
var superheroes = [];
superheroes.push({
    realName: "Bruce Wayne",
    superName: "Batman"
});
superheroes.push(superman);
document.write(superheroes[0].realName + " is a " + superheroes[0].superName + "<br /><br /><br />");
document.write("5 + 4 = " + (5 + 4) + "<br />");
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
document.write("sampLet : " + sampLet + "<br />");
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write("sampVar : " + sampVar + "<br /><br />");
var randArray = [5, 6, 7, 8];
for (var val in randArray) {
    document.write(val + "<br />");
}
document.write("<br />");
var strArray = randArray.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + "<br />");
}
document.write("<br />");
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
document.write("5 + 2 = " + theSum1 + "<br />");
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write("5 - 2 = " + getDiff(5) + "<br />");
document.write("5 - 3 = " + getDiff(5, 3) + "<br />");
document.write("5 - 4 - 3 = " + getDiff(5, 4, 3) + "<br />");
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write("Sum : " + sum + "<br />");
};
sumAll(1, 2, 3, 4, 5, 6, 7);
var addOne = function (x) { return x + 1; };
document.write("1 + 1 = " + addOne(1) + "<br />");
document.write("\"1\" + 1 = " + addOne("1") + "<br />");
