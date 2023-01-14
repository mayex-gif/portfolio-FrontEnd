export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    desdehastaE: string;

    constructor(nombreE: string, descripcionE: string, desdehastaE: string) {
        this.nombreE = nombreE
        this.descripcionE = descripcionE
        this.desdehastaE = desdehastaE
    }
}
