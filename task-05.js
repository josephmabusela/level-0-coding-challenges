function areaOfATriangle(half, base, height) {

    var sides = (half + base + height) / 2;

    var area = Math.sqrt(sides * ((sides - half) * (sides - base) * (sides = height)));

    return area
}

console.log(areaOfATriangle(3, 5, 6));