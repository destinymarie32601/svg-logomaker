class Shape{ //base class for all the shapes
    constructor(text,textColor,shapeColor){
        this.text=text;
        this.textColor= textColor;
        this.shapeColor = shapeColor;
    }
    render() { //set the shape dimensions and font size and format
        const shapeType = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        const shapeText = `<text x="150" y="150" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return [shapeType, shapeText];
    }
}

class Circle extends Shape{  //circle constructor
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        const shapeType = super.render();
        const shapeText = super.render();
        return `${shapeType[0]}<circle cx="150" cy="110" r="80" fill="${this.shapeColor}"/>${shapeText[1]}</svg>`;
    }
}

class Triangle extends Shape{ //triangle constructor
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render(){
        const shapeType = super.render();
        return `${shapeType[0]}<polygon points="150, 18 282, 283 18, 283" fill="${this.shapeColor}"/><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

class Square extends Shape{ //square constructor
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render(){
        const shapeType = super.render();
        return `${shapeType[0]}<rect width="200" height="200" fill="${this.shapeColor}"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

module.exports = {Circle,Triangle,Square};