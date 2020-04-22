var a = {
    name: 'My name',
    protocol: 'https',
    maxStudentsCound: 10,
    isOnline: true,
    students: ['Ivan', 'Andrey', 'Fred'],
    classroom: {
        teacher: {
            name: "vasia",
            age: 18
        }
    }
}

/* 2 Links to 1 object */
var b = a;

/* Spread operator. Soft copy object will copy only simple string int bool. Objects inside will be only links */
var b = {...a};

/* Deep copy */
var b = {...a};
b.classroom = {...a.classroom };
b.classroom.teacher = {...a.classroom.teacher };
b.students = [...a.students];

