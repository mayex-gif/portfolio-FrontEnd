export class Skill {
    id: number;
    nombre: string;
    porcentaje: number;
    subtitle: string;

    constructor(nombre: string, porcentaje: number, subtitle: string) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.subtitle = subtitle;
    }
}