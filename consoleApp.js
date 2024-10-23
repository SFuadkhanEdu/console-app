const person = {
  name: "Joe",
  surname: "Biden",
  job: "President",
  occupation: "Idle Old Man",
};

let isProgramRunning = true;
const inputText = `which info u need?
1. name
2. surname
3. job
4. occupation
5. exit`;
const CONSTANTS = ["name", "surname", "job", "occupation"];
while (isProgramRunning) {
  const input = prompt(inputText);
  if (!input || isNaN(input) || parseInt(input) > 5 || parseInt(input) < 1) {
    alert("wrong input");
  } else if (input === "5") {
    isProgramRunning = false;
  } else {
    alert(person[CONSTANTS[parseInt(input) - 1]]);
  }
}
