let greet2  = function(name:string):void{
    let message = `Hello !! ${name}`;
    console.log(message);
}


class User {
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    setName(name:string){
        this.name = name;
    }

    setAge(age:number){
        this.age = age;
    }
}