const obj = {
    p1: "foo",
    m1: function() {
        console.log('fifi');
        console.log(this.p1);
    },
    m2() {
        console.log('tutu');
    },
    m3: () => {
        console.log("m3");
    }
};

const Student = function(name) {
    const sname = name;
    const getName = () => sname;
    this.displayName = () => {
        console.log(sname);
    }
    this.sayHello = function() {
        console.log('Hello');
    }
};
Student.prototype.whereIam = () => "in the kitchen";
const stud1 = new Student("Riri");
stud1.displayName();
console.log(stud1.whereIam());