export class Car {
    constructor(private name:string, private color:string, private model:string){
        this.name = name;
        this.color = color;
        this.model = model;
    }

    setColor(color:string){
        this.color = color;
    }

    description():string{
        return `Car ${this.name} with color: ${this.color} and model of ${this.model}`; 
    }
}