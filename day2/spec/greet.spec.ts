import {Greet} from '../src/greet';

describe('Greet function get name should be invoked', () => {
  it('should be defined', () => {
      const greet = new Greet();
      expect(greet.greet()).toBeDefined("The definition greet() should be defined");
  });
  it('should not be blank', () => {
      const  greet = new Greet();
      expect(greet.greet()).not.toMatch("test")
  });
  
  it('Should return the greet with hello world', () => {
      const  greet = new Greet();
      expect(greet.greet()).toMatch("hello world");
  });

  it('Should always return the greet ', () => {
      const greet = new Greet();
      expect(greet.greet()).toContain('hello');
  });
  
})
