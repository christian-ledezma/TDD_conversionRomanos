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