class Forma {
    constructor(tipoDeForma = 'Forma Abstrata') {
        // this.tipoDeForma = 'Forma Abstrata';
        this.tipoDeForma = tipoDeForma;
    }

    imprimeForma() {
        // alert(`Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
        try {
            alert(`Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
            console.log("aqui");
        } catch (error) {
            alert("O código está com erro");
        }
    }

    calculaArea() {
        throw new Error('O método calculaArea() deve ser implementado na subclasse.');
    }
}