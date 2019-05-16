import { Car } from "../src/Car";

describe('Test cases for Car', () => {
    
    it('Car object not initialized ', () => {
        let bmw = null;
        expect(bmw).not.toBeTruthy();
    });

    it('Car object should be initialized ', () => {
        let bmw = new Car("BMW",'RED', 'X1');
        expect(bmw).toBeTruthy();
    });

    it('Car object should be initialized', () => {
        let bmw = new Car("BMW",'RED', 'X1');
        expect(bmw).toBeDefined();
    });
    it('Car should have a color of RED', () => {
        let bmw = new Car("BMW",'RED', 'X1');
        expect(bmw.description()).toBe("Car BMW with color: RED and model of X1");
    });
    
});
