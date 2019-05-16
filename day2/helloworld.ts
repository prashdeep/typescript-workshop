let greet = function(name){
    let message = `Hello !! ${name}`;
    console.log(message);
}


class User {
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    setName(name){
        this.name = name;
    }

    setAge(age){
        this.age = age;
    }
}