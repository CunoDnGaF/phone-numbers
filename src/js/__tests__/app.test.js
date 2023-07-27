import formattingNumber from '../app';

test('should throw a formatted number "+79270000000"', () => {
    const number = '8 (927) 000-00-00';
    
    expect(formattingNumber(number)).toBe('+79270000000');
});

test('should throw a formatted number "+79600000000"', () => {
    const number = '+7 960 000 00 00';
    
    expect(formattingNumber(number)).toBe('+79600000000');
});

test('should throw a formatted number "+860000000000"', () => {
    const number = '+86 000 000 0000';
    
    expect(formattingNumber(number)).toBe('+860000000000');
});

test('should throw a formatted number "+70123456789"', () => {
    const number = '0123456789';
    
    expect(formattingNumber(number)).toBe('+70123456789');
});

test('should throw the error "Номер введен не полностью"', () => {
    const number = '8123456789';
    
    expect(() => formattingNumber(number)).toThrow('Номер введен не полностью');
});


