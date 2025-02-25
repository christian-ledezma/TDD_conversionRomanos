import generador from "./generadorRomanos.js"

describe("generadorRomanos", () => {
    it("Deberia generar numero romano", () => {
        expect(generador(1)).toEqual('I');
    });
});