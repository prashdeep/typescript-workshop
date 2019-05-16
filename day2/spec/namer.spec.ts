import {Namer} from '../src/namer';

describe('Namer get name should be invoked', () => {
  it('should be defined', () => {
      const namer = new Namer();
      expect(namer.getName()).toBeDefined("The definition getName() should be defined");
  });
  it('should not be blank', () => {
      const  namer = new Namer();
      expect(namer.getName()).not.toMatch("","The function getName() should return")
  });
  
  it('Should return MYName', () => {
      const  namer = new Namer();
      expect(namer.getName()).toMatch("MyName");
  });
  
})
