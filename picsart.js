



class PicsatAcademy{
    constructor(classroom,library,kitchen){
this.classroom = new Classroom(101);
this.library = new Library();
this.kitchen = new Kitchen();
    }
showInfo(){
    console.log('the Academy has 4 faculties');
}
}

class Classroom{
    constructor(room_num){
        this.room_num = room_num;
        this.list_of_students = [];
    }

    addStudent(name){
        this.list_of_students.push(name);
    }
    listStudents(){
        for(let i = 0; i < list_of_students.length;i++){
        console.log(`${this.list_of_students}`);
    }
}
}

class Library {
    constuctor(){
        this.books = [];
    }
    addBook(title, author){
        this.books.push(new Book(title,author));
    }

    listBooks(){

        for(let i = 0; i < this.books.length;i++){
        console.log(`${this.books}`);
        }
    }
}

class Kitchen{
    constructor( ){
        this.staff = [];
    }

addWorker(name){
    this.staff.push(name);

}
listWorkers(){
 
        for(let i = 0; i < this.staff.length;i++){
        console.log(`${this.staff}`);
        }
    }   

}

const academy = new PicsatAcademy(Classroom,Library,Kitchen)
academy.classroom.addStudent("Alice");
academy.library.addBook("Clean Code", "Robert C. Martin");
academy.kitchen.addWorker("Chef Bob");
academy.showInfo();
