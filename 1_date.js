// 1 Num
// a
function getDayOfWeek(dateData) {
  const date = new Date(dateData);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
}

const inputDate = "2023-06-19";
const dayOfWeek = getDayOfWeek(inputDate);
console.log(dayOfWeek); // Output: Monday

// !a

// b
function getCurrentDayOfWeek() {
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
  return currentDayOfWeek;
}
const resultDay = getCurrentDayOfWeek();
console.log(resultDay); // Output: (e.g., "Wednesday")

// !b
//! 1 num
