import{InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService
{
    createDb()
    {
        const user = 
        [
            {
                id: 1,
                name: 'Cristabel', 
                lastname: 'Barra', 
                user: 'Cristal', 
                pass: 123,
                countryId: 1
            },
            {
                id: 2,
                name: 'Bastian', 
                lastname: 'Rozas', 
                user: 'Dalsius', 
                pass: 123,
                countryId: 2
            },
            {
                id: 3,
                name: 'Juan', 
                lastname: 'Topo', 
                user: 'Topox', 
                pass: 123,
                countryId: 3
            },
            
        ];

        const country = 
        [
            {
                id: 1,
                name: 'Chile' 
            },
            {
                id: 2,
                name: 'Peru' 
            },
            {
                id: 3,
                name: 'Colombia' 
            },
            {
                id: 4,
                name: 'Venezuela' 
            }
        ];

        const alumno = 
        [
            {
                rut: '19.379.270-7',
                nombre: 'Bastian',
                apellido: 'Rozas', 
                edad: 23, 
                direccion: 'Guadal 952' 
            },
            {
                rut: '18.457.192-7',
                nombre: 'Cristabel',
                apellido: 'Barra', 
                edad: 26, 
                direccion: 'Minnesota 8044' 
            },
            {
                rut: '18.458.174-5',
                nombre: 'Andrea',
                apellido: 'Batta', 
                edad: 24, 
                direccion: 'Chile'
            },
            {
                rut: '14.487.321-4',
                nombre: 'Daniel',
                apellido: 'Posas', 
                edad: 25, 
                direccion: 'Chile' 
            }
        ];
        const notas = 
        [
            {
                rut: '19.379.270-7',
                nota1: 5, 
                nota2: 4.8
            },
            {
                rut: '18.457.192-7',
                nota1: 4.5,
                nota2: 5
            },
            {
                rut: '18.458.174-5',
                nota1: 6.8,
                nota2: 3.7
            },
            {
                rut: '14.487.321-4',
                nota1: 3.2,
                nota2: 7
            }
        ];

        return {user, country, alumno, notas};
    }
}
