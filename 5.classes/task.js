// Задача N1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }


    fix() {
        this.state = this.state*1.5
    }

    set state (value) {
        if (value < 0 ){
            this.state  = 0;
        }
        else if (value > 100){
            this.state  = 100;
        }
        else {
            this._state  = value;
        }
    }    

    get state () {
        return this._state
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount)
        this.type = "magazine";
    }

}

class Book extends PrintEditionItem {
    constructor( author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount)
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount)
        this.type = "novel";
    }
    
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount)
        this.type = "fantastic";
    }
    
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount)
        this.type = "detective";
    }
    
}

 
// Задача N2

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book, state = 100) {
        if (state > 30) {
            this.books.push(book);
        }
    }

    findBookBy (type, value) {

         let result = this.books.find (item => item[type] === value);
        if(!!result)
            return result;
        else
            return result = null;
     
        }

    giveBookByName(bookName) {
        let result = this.books.find (item => item.name === bookName);
        if(!!result){
            let deleteResultId = this.books.findIndex (item => item.name === bookName);
            this.books.splice([deleteResultId], 1)
            return result;
        }
        else {
            return result = null;
        }
     }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log (library.books)
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3



// Задача N3
class predmetNames {
    constructor(predmetName){
    this.predmetName  = predmetName;
    marks = [];
    }
} 

class Student {
    constructor(name){
        this.name  = name;
        this.predmetNames = [];
    }


     addMark(predmetName) {
         let result = this.Student.findIndex (item => item.predmetNames === predmetName);
         if (!!result) {
            this.predmetNames.push(predmetName)
         } 
         else {
            this.predmetNames.push(predmetName)
         }
        }
                  

   }



const studentN = new Student("Олег Никифоров");
const studentI = new Student("Сеиен Слепаков");
const studentS = new Student("Гоша Куценко");
console.log(studentN, studentI, studentS)
studentN.addMark(5, "algebra");
studentN.addMark(5, "algebra");
studentN.addMark(5, "geometry");
studentN.addMark(4, "geometry");