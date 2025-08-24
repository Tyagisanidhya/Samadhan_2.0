
let student = {
 
    math: 85,
    english: 78,
    science: 92
 
};
let total = student.math + student.english + student.science;

function average(totalMarks, Subjects) {
  return totalMarks / Subjects;
}

let avg = average(total, 3);
let grade = "";
if (avg >= 90) grade = "A+";
else if (avg >= 75) grade = "A";
else if (avg >= 60) grade = "B+";
else if (avg >= 50) grade = "B";
else if (avg >= 40) grade = "C+";
else if (avg >= 30) grade = "C";
else grade = "F";

console.log("Total Marks:", total);
console.log("Average:", avg.toFixed(2));
console.log("Grade:", grade);
