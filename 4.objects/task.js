function Student(name, gender, age) {
  // Ваш код
  this.name  = name;
  this.gender = gender;
  this.age = age;
}
const StudentI = new Student("Eduard", "men", 17);
const StudentM = new Student("Latifa", "women", 18);
const StudentN = new Student("Sigizmund", "men", 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
 if(this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);  
    }
   else {
     this.marks.push(mark);  
 }
}

Student.prototype.addMarks = function (...mark) { 
  if(this.marks === undefined) {
    this.marks = [];
    this.marks.push.apply(this.marks, mark);  
    }
  else {
    this.marks.push.apply(this.marks, mark);  
  }
}

Student.prototype.getAverage = function (mark) {
    let average = this.marks.reduce((acc, item, idx, arr) => {
    acc += item;
    if (idx === arr.length - 1) {
      return this.average  = acc / arr.length;
    } 
    else {
      return acc;
    }
  })
  return average
}



Student.prototype.excluded = function (reason) {
  delete this.subject  
  delete this.marks 
  delete this.average   
  this.excluded = reason;
}



















































