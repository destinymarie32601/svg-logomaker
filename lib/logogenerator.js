const shapes = require('./shapes'); //imports shapes.js

function generateSvg({shape, text, textColor, shapeColor}) { //function to generate logo based on the user input choices
    let logo = ''; //sets the logo to empty 

    if (shape === "Circle") { //if statements to generate each logo based on the users choices
        logo = new shapes.Circle(text,textColor,shapeColor).render();

    } else if (shape === "Triangle") {
        logo = new shapes.Triangle(text,textColor,shapeColor).render();

    } else {
        logo = new shapes.Square(text, textColor,shapeColor).render();
    }

    return logo;
}
module.exports = generateSvg; //export the generate svg function