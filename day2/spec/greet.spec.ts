import {Greet} from '../src/greet';

describe('Greet function get name should be invoked', () => {
  it('should be defined', () => {
      const greet = new Greet();
      expect(greet.greet('Mahesh', "Good evening")).toBeDefined("The definition greet() should be defined");
  });
  it('shoud be equal', () => {
      const  greet = new Greet();
      expect(greet.greet('Mahesh', "Good evening")).toEqual("Welcome Mahesh!! Good evening")
  });
  
  it('Should not be equal - Negative test case', () => {
      const  greet = new Greet();
      expect(greet.greet('Mahesh', "Good evening")).not.toEqual("Welcome Mahesh Good evening")  });

})
