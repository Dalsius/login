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
                pass: 123
            },
            {
                id: 2,
                name: 'Bastian', 
                lastname: 'Rozas', 
                user: 'Dalsius', 
                pass: 123
            },
            {
                id: 3,
                name: 'Juan', 
                lastname: 'Topo', 
                user: 'Topox', 
                pass: 123
            },
            
        ];
        return {user};
    }
}
