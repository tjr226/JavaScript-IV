

class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name,
            this.age = personAttrs.age,
            this.location = personAttrs.location,
            this.gender = personAttrs.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty,
            this.favLanguage = instructorAttrs.favLanguage,
            this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}




class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground,
            this.className = studentAttrs.className,
            this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function (element) {
            console.log(element)
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}


class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName,
            this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

// person - name age location gender
// instructor - specialty favLanguage catchPhrase
// student - previousBackground, className, favSubjects
// pm gradClassName, favInstructor

const studentOne = new Student({
    name: 'Tim',
    age: 33,
    location: 'Brooklyn',
    gender: 'M',
    previousBackground: 'Sales',
    className: 'Web19',
    favSubjects: ['Python', 'Algos', 'Django']
});

const studentTwo = new Student({
    name: 'Amy',
    age: 23,
    location: 'LA',
    gender: 'F',
    previousBackground: 'Marketing',
    className: 'Web18',
    favSubjects: ['React', 'Angular', 'NodeJS']
});

const instructorOne = new Instructor({
    name: 'Elizabeth',
    age: 30,
    location: 'Florida',
    gender: 'F',
    specialty: 'low-level programming',
    favLanguage: 'C++',
    catchPhrase: 'point to this'
});

// person - name age location gender
// instructor - specialty favLanguage catchPhrase
// student - previousBackground, className, favSubjects
// pm gradClassName, favInstructor

const pmOne = new ProjectManager({
    name: 'Helen',
    age: 35,
    location: 'Utah',
    gender: 'F',
    specialty: 'CSS',
    favLanguage: 'LESS',
    catchPhrase: 'Phew it compiled',
    gradClassName: 'Web11',
    favInstructor: 'Josh'
});



console.log(studentTwo);
studentTwo.listsSubjects();
console.log(studentTwo.PRAssignment('JS3'));
console.log(studentTwo.sprintChallenge('Advanced Javascript'));


console.log(instructorOne);
console.log(instructorOne.demo('the DOM'));
console.log(instructorOne.grade(studentOne, 'Axios'));


console.log(pmOne);
console.log(pmOne.standUp('web19'));
console.log(pmOne.debugsCode(studentOne, 'JS classes'));
console.log(pmOne.debugsCode(studentTwo, 'linked lists'));
console.log(pmOne.grade(studentOne, 'Axios'));