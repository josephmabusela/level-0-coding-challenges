function areaOfATriangle(side1, side2, side3) {

    var sides = (side1 + side2 + side3) / 2
    var area = Math.sqrt(sides*((sides - side1) * (sides - side2) * (sides - side3)));

    return area;
}

console.log(areaOfATriangle(3, 5, 6));