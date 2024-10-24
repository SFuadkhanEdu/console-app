function generateID(subID) {
  return subID + (Math.random() * 10000).toFixed(0);
}
let students = [
  {
    student_id: "ST1523",
    name: "st_name_1",
    surname: "st_surname_1",
    teacher_id: "TC760",
  },
  {
    student_id: "ST1524",
    name: "st_name_2",
    surname: "st_surname_2",
    teacher_id: "TC760",
  },
  {
    student_id: "ST1525",
    name: "st_name_3",
    surname: "st_surname_3",
    teacher_id: "TC760",
  },
  {
    student_id: "ST1526",
    name: "st_name_4",
    surname: "st_surname_4",
    teacher_id: "TC760",
  },
  {
    student_id: "ST1527",
    name: "st_name_5",
    surname: "st_surname_5",
    teacher_id: "TC760",
  },
  {
    student_id: "ST1528",
    name: "st_name_6",
    surname: "st_surname_6",
    teacher_id: "TC760",
  },
  {
    student_id: "ST1529",
    name: "st_name_7",
    surname: "st_surname_7",
    teacher_id: "TC760",
  },
  {
    student_id: "ST1530",
    name: "st_name_8",
    surname: "st_surname_8",
    teacher_id: "TC760",
  },
  {
    student_id: "ST1531",
    name: "st_name_9",
    surname: "st_surname_9",
    teacher_id: "TC760",
  },
  {
    student_id: "ST1532",
    name: "st_name_10",
    surname: "st_surname_10",
    teacher_id: "TC760",
  },

  {
    student_id: "ST1533",
    name: "st_name_11",
    surname: "st_surname_11",
    teacher_id: "TC761",
  },
  {
    student_id: "ST1534",
    name: "st_name_12",
    surname: "st_surname_12",
    teacher_id: "TC761",
  },
  {
    student_id: "ST1535",
    name: "st_name_13",
    surname: "st_surname_13",
    teacher_id: "TC761",
  },
  {
    student_id: "ST1536",
    name: "st_name_14",
    surname: "st_surname_14",
    teacher_id: "TC761",
  },
  {
    student_id: "ST1537",
    name: "st_name_15",
    surname: "st_surname_15",
    teacher_id: "TC761",
  },
  {
    student_id: "ST1538",
    name: "st_name_16",
    surname: "st_surname_16",
    teacher_id: "TC761",
  },
  {
    student_id: "ST1539",
    name: "st_name_17",
    surname: "st_surname_17",
    teacher_id: "TC761",
  },
  {
    student_id: "ST1540",
    name: "st_name_18",
    surname: "st_surname_18",
    teacher_id: "TC761",
  },
  {
    student_id: "ST1541",
    name: "st_name_19",
    surname: "st_surname_19",
    teacher_id: "TC761",
  },
  {
    student_id: "ST1542",
    name: "st_name_20",
    surname: "st_surname_20",
    teacher_id: "TC761",
  },

  {
    student_id: "ST1543",
    name: "st_name_21",
    surname: "st_surname_21",
    teacher_id: "TC762",
  },
  {
    student_id: "ST1544",
    name: "st_name_22",
    surname: "st_surname_22",
    teacher_id: "TC762",
  },
  {
    student_id: "ST1545",
    name: "st_name_23",
    surname: "st_surname_23",
    teacher_id: "TC762",
  },
  {
    student_id: "ST1546",
    name: "st_name_24",
    surname: "st_surname_24",
    teacher_id: "TC762",
  },
  {
    student_id: "ST1547",
    name: "st_name_25",
    surname: "st_surname_25",
    teacher_id: "TC762",
  },
  {
    student_id: "ST1548",
    name: "st_name_26",
    surname: "st_surname_26",
    teacher_id: "TC762",
  },
  {
    student_id: "ST1549",
    name: "st_name_27",
    surname: "st_surname_27",
    teacher_id: "TC762",
  },
  {
    student_id: "ST1550",
    name: "st_name_28",
    surname: "st_surname_28",
    teacher_id: "TC762",
  },
  {
    student_id: "ST1551",
    name: "st_name_29",
    surname: "st_surname_29",
    teacher_id: "TC762",
  },
  {
    student_id: "ST1552",
    name: "st_name_30",
    surname: "st_surname_30",
    teacher_id: "TC762",
  },
];

let teachers = [
  {
    teacher_id: "TC760",
    name: "tc_name_1",
    surname: "tc_surname_1",
    salary: 1500,
  },
  {
    teacher_id: "TC761",
    name: "tc_name_2",
    surname: "tc_surname_2",
    salary: 1800,
  },
  {
    teacher_id: "TC762",
    name: "tc_name_3",
    surname: "tc_surname_3",
    salary: 1600,
  },
];

let classes = [
  {
    class_id: "CL101",
    number: 101,
    students_id: [
      "ST1523",
      "ST1524",
      "ST1525",
      "ST1526",
      "ST1527",
      "ST1528",
      "ST1529",
      "ST1530",
      "ST1531",
      "ST1532",
    ],
    teacher_id: "TC760",
  },
  {
    class_id: "CL102",
    number: 102,
    students_id: [
      "ST1533",
      "ST1534",
      "ST1535",
      "ST1536",
      "ST1537",
      "ST1538",
      "ST1539",
      "ST1540",
      "ST1541",
      "ST1542",
    ],
    teacher_id: "TC761",
  },
  {
    class_id: "CL103",
    number: 103,
    students_id: [
      "ST1543",
      "ST1544",
      "ST1545",
      "ST1546",
      "ST1547",
      "ST1548",
      "ST1549",
      "ST1550",
      "ST1551",
      "ST1552",
    ],
    teacher_id: "TC762",
  },
];
let isRunning = true;
let input;

const text_main_menu = `Choose an option:
        1. classes
        2. students
        3. teachers
        4. exit`;
const text_teachers_menu = `Choose an option:
1. display all teachers
2. display by id
3. delete by id
4. update teacher
5. main menu`;
const text_students_menu = `Choose an option:
1. display all students
2. display by id
3. delete by id
4. update student
5. main menu`;
const text_classes_menu = `Choose an option:
1. display all classes
2. display class by ID
3. create class
4. delete class
5. add student to class
6. change teacher
7. display all students in class`;
while (isRunning) {
  input = prompt(text_main_menu);
  if (input === "4") {
    isRunning = false;
  } else if (input === "3") {
    input = prompt(text_teachers_menu);
    if (input === "1") {
      displayAllTeachers(teachers);
    } else if (input === "2") {
      let id = prompt("input id: ");
      displayTeachersByID(id);
    } else if (input === "3") {
      let id = prompt("input id:");
      deleteTeacherByID(id);
    } else if (input === "4") {
      let id = prompt("input id:");
      updateTeacherByID(id);
    }
  } else if (input === "2") {
    input = prompt(text_students_menu);
    if (input === "1") {
      displayAllStudents(students);
    } else if (input === "2") {
      let id = prompt("input id: ");
      displayStudentByID(id);
    } else if (input === "3") {
      let id = prompt("input id:");
      deleteStudentByID(id);
    } else if (input === "4") {
      let id = prompt("input id:");
      updateStudentByID(id);
    }
  } else if (input === "1") {
    input = prompt(text_classes_menu);
    if (input === "1") {
      displayAllClasses();
    } else if (input === "2") {
      let id = prompt("input id");
      displayClassByID(id);
    } else if (input === "3") {
      addClass();
    } else if (input === "4") {
      let id = prompt("input id");
      deleteClassByID(id);
    } else if (input === "5") {
      let class_id = prompt("input class id");
      let student_id = prompt("input student id");
      addStudentToClass(class_id, student_id);
    } else if (input === "6") {
      let class_id = prompt("input class id");
      let teacher_id = prompt("input teacher id");
      changeTeacherInClass(class_id, teacher_id);
    } else if (input === "7") {
      let class_id = prompt("input class id");
      displayAllStudentsInClass(class_id);
    }
  }
}

function getClassByID(id) {
  let classesFound = classes.find((a) => a.class_id === id);
  return classesFound ? classesFound : alert("NO SUCH CLASS");
}
function displayAllClasses() {
  let i = 1;
  let resultArr = [];
  classes.forEach((element) => {
    resultArr.push(
      i++ + " - " + element.class_id + " - " + element.number + "   "
    );
  });
  alert(resultArr);
}
function displayClassByID(id) {
  let classFound = getClassByID(id);
  if (classFound) {
    alert(Object.entries(classFound));
  }
}
function addClass() {
  let classCreated = [];
  classCreated.class_id = generateID("CL");
  input = prompt("input one by one: class_id, {number}, student_id");
  classCreated.number = input;
  input = prompt("input one by one: class_id, number, {student_id}");
  classCreated.student_id = input;
  classes.push(classCreated);
  console.table(classes);
}
function deleteClassByID(id) {
  classes = classes.filter((a) => a.class_id !== id);
}
function addStudentToClass(class_id, student_id) {
  let classFound = getClassByID(class_id);
  if (classFound) {
    let studentFound = getStudentFromClass(classFound, student_id);
    if (!studentFound) {
      classFound.students_id.push(student_id);
    }
  }
  // classes.find((a) => a.class_id === class_id).students_id.push(student_id);
}
function changeTeacherInClass(class_id, teacher_id) {
  classFound = getClassByID(class_id);
  teacherFound = getTeacherByID(teacher_id);
  if (classFound && teacherFound) {
    classFound.teacher_id = teacher_id;
  }
  // classes.find((a) => a.class_id === class_id).teacher_id = teacher_id;
}
function displayAllStudentsInClass(class_id) {
  let class_found = getClassByID(class_id);
  if (class_found) {
    const result_arr = class_found.students_id
      .map((student_id) => {
        const student = students.find(
          (student) => student.student_id === student_id
        );
        return student
          ? `${student.student_id} - ${student.name} ${student.surname}`
          : null;
      })
      .filter((student) => student !== null);
    alert(result_arr.join(""));
  }
}

function getTeacherByID(id) {
  let teacherFound = teachers.find(a => a.teacher_id === id);
  return teacherFound ? teacherFound : alert("NO SUCH TEACHER");
}
function displayAllTeachers(teachers) {
  let i = 1;
  let resultArr = [];
  teachers.forEach((element) => {
    resultArr.push(
      i++ + " - " + element.teacher_id + " - " + element.name + "   "
    );
  });
  alert(resultArr);
}
function displayTeachersByID(id) {
  teacherFound = getTeacherByID(id);
  if (teacherFound) {
    alert(Object.entries(teacherFound));
  }
}
function deleteTeacherByID(id) {
  teachers = teachers.filter((a) => a.teacher_id != id);
  console.table(teachers);
}
function updateTeacherByID(id) {
  let teacher = getTeacherByID(id);
  if (!teacher) {
    alert("UPDATE METHOD WILL WORK AS ADD TO CANCEL INPUT 'CANCEL' ");
    teacher = []
    teacher.teacher_id = generateID("TC")
  }
  else{
    teachers = teachers.filter((a) => a.teacher_id !== id);
  }
  input = prompt("input one by one: id, {name}, surname, salary");
  if (input.toLowerCase() === "cancel") {
    return;
  }
  teacher.name = input;
  input = prompt("input one by one: id, name, {surname}, salary");
  if (input.toLowerCase() === "cancel") {
    return;
  }
  teacher.surname = input;
  input = prompt("input one by one: id, name, surname, {salary}");
  if (input.toLowerCase() === "cancel") {
    return;
  }
  teacher.salary = input;
  teachers.push(teacher);
  console.table(teachers);
}

function getStudentFromClass(classFound, id) {
  studentFound = classFound.students_id.includes(id);
  if (studentFound) {
    alert("ALREADY SUCH STUDENT EXISTS");
    return studentFound;
  }
}
function getStudentByID(id) {
  let studentFound;
  studentFound = students.find((a) => a.student_id === id);

  return studentFound ? studentFound : alert("NO SUCH STUDENT");
}
function displayAllStudents(students) {
  let i = 1;
  let resultArr = [];
  students.forEach((element) => {
    resultArr.push(
      i++ + " - " + element.student_id + " - " + element.name + "   "
    );
  });
  alert(resultArr);
}
function displayStudentByID(id) {
  let studentFound = getStudentByID(id);
  if (studentFound) {
    alert(Object.entries(studentFound));
  }
}
function deleteStudentByID(id) {
  students = students.filter((a) => a.student_id != id);
  console.table(students);
}
function updateStudentByID(id) {
  let student = getStudentByID(id);
  if (!student) {
    alert("UPDATE METHOD WILL WORK AS ADD TO CANCEL INPUT 'CANCEL' ");
    student = []
    student.student_id = generateID("ST");
  }
  else{
    students = students.filter((a) => a.student_id !== id);
  }
  input = prompt("input one by one: id, {name}, surname, teacher_id");
  if (input.toLowerCase() === "cancel") {
    return;
  }
  student.name = input;
  input = prompt("input one by one: id, name, {surname}, teacher_id");
  if (input.toLowerCase() === "cancel") {
    return;
  }
  student.surname = input;
  input = prompt("input one by one: id, name, surname, {teacher_id}");
  if (input.toLowerCase() === "cancel") {
    return;
  }
  student.teacher_id = input;
  students.push(student);
  console.table(students);
}