describe('A startCalc tesztje', () => {
    it('Input 15, 15, elvárt 2827.4333882308138', () => {    
        let actual = startCalc(15, 15);
        expect(actual).toBe(2827.4333882308138);
    });
    it('Input a, a, elvárt Hibás adat ', () => {
        let actual = startInput(a, a);
        expect(actual).toBe('Hibás bevitt értékek');
    });
    
   
    
   
});

describe('A isGoodInput() tesztjei', () => {
    it('Számot ad az input?', () => {
        let actual = isGoodInput('22');
        expect(actual).toBe(true);
    });
    it('Ha nem szám a bemenet, akkor false-t kapunk?', () => {
        let actual = isGoodInput('aa');
        expect(actual).toBe(false);
    });
});
