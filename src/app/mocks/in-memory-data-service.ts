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
        return {user, country};
    }
}
