// 1)  sinifler array i
// 2)  muellimler arrayi
// 3) sagirdler arrayi

// sinif ornek obj  ={
// teacher : {}
// name:bp216
// students:[
// ]
// }

// 1- sinifler
// 2- muellimler
// 3- sagidrler
// 4- cixis

//  1)
//    -1 - butun sinfleri goster
//    0- sinif goster id ye gore
//    1- sinif yarat
//    2- sinif sil
//    3- sinife telebe elave et
//    4 - sinife muellim deyis
//    5-  sinifin icindeki sagirdleri goster

// 2 )
//     1-  butun muellimler goster
//     2- muellimler id ye gore goster
//     3-  muellimler id ye gore sil
//     4- muellimler guncelle

// 3 )
//     1-  butun sagidrler goster
//     2- sagirdi id ye gore goster
//     3-  sagirdi id ye gore sil
//     4- sagirdi guncelle

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
while (isRunning) {
  input = prompt(text_main_menu);
  if (input === "4") {
    isRunning = false;
  } 
  else if (input === "3") {
    input = prompt(text_teachers_menu);
    if (input === "1") {
      displayAllTeachers(teachers);
    } else if (input === "2") {
      let id = prompt("input id: ");
      displayTeachersByID(teachers, id);
    } else if (input === "3") {
      let id = prompt("input id:");
      deleteTeacherByID(id);
    } else if (input === "4") {
      let id = prompt("input id:");
      updateTeacherByID(id);
    } 
  }
  else if (input === "2") {
    input = prompt(text_students_menu);
    if (input === "1") {
        displayAllStudents(students);
      } else if (input === "2") {
        let id = prompt("input id: ");
        displayStudentByID(students, id);
      } else if (input === "3") {
        let id = prompt("input id:");
        deleteStudentByID(id);
      } else if (input === "4") {
        let id = prompt("input id:");
        updateStudentByID(id);
      } 
  }
}


function getTeacherByID(id) {
  return teachers.find((a) => a.teacher_id === id);
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
  alert(Object.entries(getTeacherByID(id)));
}
function deleteTeacherByID(id) {
  teachers = teachers.filter((a) => a.teacher_id != id);
  console.table(teachers);
}
function updateTeacherByID(id) {
  let teacher = getTeacherByID(id);
  teachers = teachers.filter((a) => a.teacher_id !== id);
  input = prompt("input one by one: {id}, name, surname, salary");
  teacher.teacher_id = input;
  input = prompt("input one by one: id, {name}, surname, salary");
  teacher.name = input;
  input = prompt("input one by one: id, name, {surname}, salary");
  teacher.surname = input;
  input = prompt("input one by one: id, name, surname, {salary}");
  teacher.salary = input;
  teachers.push(teacher);
  console.table(teachers);
}


function getStudentByID(id) {
    return students.find((a) => a.student_id === id);
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
function displayStudentsByID(id) {
    alert(Object.entries(getStudentByID(id)));
}
function deleteStudentByID(id) {
    students = students.filter((a) => a.student_id != id);
    console.table(students);
}
function updateStudentByID(id) {
    let student = getStudentByID(id);
    students = students.filter((a) => a.student_id !== id);
    input = prompt("input one by one: {id}, name, surname, teacher_id");
    student.student_id = input;
    input = prompt("input one by one: id, {name}, surname, teacher_id");
    student.name = input;
    input = prompt("input one by one: id, name, {surname}, teacher_id");
    student.surname = input;
    input = prompt("input one by one: id, name, surname, {teacher_id}");
    student.salary = input;
    students.push(student);
    console.table(students);
}  
// displayAllTeachers(teachers);
console.table(teachers);
displayStudentsByID("ST1523")
getStudentByID("ST1523")