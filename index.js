///Hoisting in JS
/*console.log(x);

console.log(getName);

console.log(getTitle);

var x = 7;
function getName() {
    return "Hello Tharun";
}

var getTitle = () => {
    return "Hello Title";
}
console.log(x);
console.log(getName());
console.log(getTitle());*/

///Scope Chain and Lexical environment
/*function a()
{
    var b = 10;
    return function () {
        console.log(b);
    }
}

a()();*/

///let and const declaration
//console.log(a);
/*let a;
console.log(a);
a = 10;*/

///Closures
/*function a() {
    var b = 100;

    function c() {
        console.log(b);
    }
    c();
}

a();
*/

///setTimeOut

/*
setTimeout(() => {
    console.log("Hello from settimeout");
}, 5000);

var a = 10;
console.log(a);
*/