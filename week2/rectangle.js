class Rectangle {
    // height;
    static count = 0;

    constructor(height, width) {
        this.height = height;
        this.width = width;
        Rectangle.count++;
    }

    get area() {
        return this.calcArea();
    }

    static printCount() {
        console.log(Rectangle.count);
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area);
Rectangle.printCount();
