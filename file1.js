class Rectangle {
    constructor(width,heigth){
        this.width = width;
        this.heigth = heigth;
    }
    area(){
        return this.width * this.heigth;
    }
    perimetr(){
        return 2 *(this.width * this.heigth);
    }
}

const n1 = new Rectangle(12,30);
console.log(n1.area());
console.log(n1.perimetr());
