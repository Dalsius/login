export class User 
{
    user: string;
    pass: string;

    constructor
    (
        user?: string,
        pass?: string
    )
        {
            this.user=user;
            this.pass=pass;
        }
}
