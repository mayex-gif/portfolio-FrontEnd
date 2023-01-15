export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    linkP: string;

    constructor(nombreP: string, descripcionP: string, linkP: string) {
        this.nombreP = nombreP
        this.descripcionP = descripcionP
        this.linkP = linkP
    }
}
