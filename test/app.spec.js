describe('A calcSurface tesztje', () => {
    it('Input 15, 15, elvárt 2827.4333882308138', () => {    
        let actual = calcSurface(15,15);
        expect(actual).toBeCloseTo(2827.4333882308138,2);
    });
    it('Input 500, 500, elvárt 3141592.653589793', () => {    
        let actual = calcSurface(500, 500);
        expect(actual).toBeCloseTo(3141592.653589793,2.0);
    });
    it('Input 12.5, 12.5, elvárt 3141592.653589793', () => {    
        let actual = calcSurface(12.5, 12.5);
        expect(actual).toBeCloseTo(1963.4954084936207,2.0);
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
