
export class Note { 
    constructor(data){
        this.title = data.title
        this.description = data.description || ''
        this.color = data.color
    }
}
