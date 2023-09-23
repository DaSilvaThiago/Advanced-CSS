export class Pokemon{
    private id: number;
    private name: string;
    private photo: string;
    private description: string;

    constructor(id:number, name:string, photo:string, description:string){
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.description = description;
    }

    public getName():string{
        return this.name;
    }

    public getPhoto():string{
        return this.photo;
    }

    public getDescription():string{
        return this.description;
    }
}