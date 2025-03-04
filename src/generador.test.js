import generador from "./generadorRomanos.js"

describe("generadorRomanos", () => {
    it("Deberia generar numero uno romano", () => {
        expect(generador(1)).toEqual('I');
    });
});

describe("generadorRomanos", () => {
    it("Deberia generar numero uno y dos romano", () => {
        expect(generador(2)).toEqual('II');
    });
});

describe("generadorRomanos", () => {
    it("Deberia generar numero uno, dos y tres romano", () => {
        expect(generador(3)).toEqual('III');
    });
});

describe("generadorRomanos", () => {
    it("Deberia generar numeros del 1 al 4 a romano", () => {
        expect(generador(4)).toEqual('IV');
    });
});

describe("generadorRomanos", () => {
    it("Deberia generar numeros del 1 al 5 a romano", () => {
        expect(generador(5)).toEqual('V');
    });
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 8 a romano", () => {
        expect(generador(8)).toEqual('VIII');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 9 a romano", () => {
        expect(generador(9)).toEqual('IX');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 10 a romano", () => {
        expect(generador(10)).toEqual('X');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 39 a romano", () => {
        expect(generador(39)).toEqual('XXXIX');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 40 a romano", () => {
        expect(generador(40)).toEqual('XL');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 49 a romano", () => {
        expect(generador(49)).toEqual('XLIX');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 50 a romano", () => {
        expect(generador(50)).toEqual('L');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 89 a romano", () => {
        expect(generador(89)).toEqual('LXXXIX');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 90 a romano", () => {
        expect(generador(90)).toEqual('XC');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 99 a romano", () => {
        expect(generador(99)).toEqual('XCIX');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 100 a romano", () => {
        expect(generador(100)).toEqual('C');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 399 a romano", () => {
        expect(generador(399)).toEqual('CCCXCIX');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 400 a romano", () => {
        expect(generador(400)).toEqual('CD');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 499 a romano", () => {
        expect(generador(499)).toEqual('CDXCIX');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 500 a romano", () => {
        expect(generador(500)).toEqual('D');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 899 a romano", () => {
        expect(generador(899)).toEqual('DCCCXCIX');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 900 a romano", () => {
        expect(generador(900)).toEqual('CM');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 999 a romano", () => {
        expect(generador(999)).toEqual('CMXCIX');
    })
});

describe("generadorRomanos", () =>{
    it("Deberia generar numeros del 1 al 1000 a romano", () => {
        expect(generador(1000)).toEqual('M');
    })
});