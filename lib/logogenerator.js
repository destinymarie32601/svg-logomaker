const shapes = require('./shapes');

function generateSvg({shape, text, textColor, shapeColor}) {
    let logo = '';

    if (shape === "Circle") {
        logo = new shapes.Circle(text,textColor,shapeColor).render();

    } else if (shape === "Triangle") {
        logo = new shapes.Triangle(text,textColor,shapeColor).render();

    } else {
        logo = new shapes.Square(text, textColor,shapeColor).render();
    }

    return logo;
}
module.exports = generateSvg;