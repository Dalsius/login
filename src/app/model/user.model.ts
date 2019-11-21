export class User 
{
    id: number;
    user: string;
    pass: string;
    name: string;
    lastname: string;

    constructor
    (
        user?: string,
        pass?: string,
        name?: string,
        lastname?: string
    )
        {
            this.user=user;
            this.pass=pass;
            this.name=name;
            this.lastname=lastname;
        }
}
