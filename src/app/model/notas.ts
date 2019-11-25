export class Notas {
    rut: string;
    nota1: number;
    nota2: number;

    constructor
    (
        rut?: string,
        nota1?: number,
        nota2?: number
    )
        {
            this.rut=rut;
            this.nota1=nota1;
            this.nota2=nota2;
        }
}
