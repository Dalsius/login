export class Alumno {
    rut: string;
    nombre: string;
    apellido: string;
    edad: number;
    direccion: string;

    constructor
    (
        rut?: string,
        nombre?: string,
        apellido?: string,
        edad?: number,
        direccion?:string
    )
        {
            this.rut=rut;
            this.nombre=nombre;
            this.apellido=apellido;
            this.edad=edad;
            this.direccion=direccion;
        }
}
