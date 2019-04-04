

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
            this.catchPhrase = instructorAttrs.catchPhrase,
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
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}
