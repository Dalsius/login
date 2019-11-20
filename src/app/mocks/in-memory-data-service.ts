import{InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService
{
    createDb()
    {
        const user = 
        [
            {user: 'Cristabel', pass: 123456},
            {user: 'Bastian', pass: 123456},
            {user: 'Eliah', pass: 123456}
        ];
        return {user};
    }
}
