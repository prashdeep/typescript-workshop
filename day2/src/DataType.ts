
let courseName:string = "Typescript";
let duration:number = 2;
let classRoomTraining:boolean = true;

//implicit types
let city:string;
city = "Bangalore"

let greet = function(name:string, message:string):string{
    return ` ${message.toUpperCase()} ${name.toUpperCase()}`
}

let result:string = greet("Ramesh","Welcome to Typescript course");

console.log(result);
