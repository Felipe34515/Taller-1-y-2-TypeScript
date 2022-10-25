export class Serie {
    public id:number;
    public nombre: string;
    public canal: string;
    public temporadas: number;
    public descripcion: string;
    public pagina: string;
    public imagen: string;
    
    constructor(id:number, nombre: string, canal: string, temporadas: number, descripcion: string, pagina: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.pagina = pagina;
        this.imagen = imagen;
    }
}

