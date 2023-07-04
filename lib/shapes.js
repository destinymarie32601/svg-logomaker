class Shape{
    constructor(){
        this.colors=''
    }
    setColor(color){
        this.color=(color);
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="25" cy="75" r="20" height="50" width="50" fill="${this.color}"/>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon height = "100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
}
