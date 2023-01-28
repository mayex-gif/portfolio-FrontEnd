export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    img?: string;
    descripcion: string;

    constructor(nombre: string, apellido: string, img: string, descripcion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
    }
}
