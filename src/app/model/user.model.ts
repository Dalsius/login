export class User 
{
    id: number;
    user: string;
    pass: string;
    name: string;
    lastname: string;
    countryId: number;

    constructor
    (
        user?: string,
        pass?: string,
        name?: string,
        lastname?: string,
        countryId?:number
    )
        {
            this.user=user;
            this.pass=pass;
            this.name=name;
            this.lastname=lastname;
            this.countryId=countryId;
        }
}
