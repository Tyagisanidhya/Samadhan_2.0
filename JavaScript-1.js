const student = {
    name: "Sanidhya Tyagi",
    age: 20,
    rollno: "0103AD231181",
    hackathon:"Samadhan 2.0",
    printDetails: function(){
        console.log("Student Details:");
console.log("Name=>", this.name);
console.log("Age=>", this.age);
console.log("RollNo=>", this.rollno);
console.log("Hackathon=>", this.hackathon);
    }
};

//Directly printing the results
console.log("Name=> " + student.name);
console.log("Age=> " + student.age);
console.log("Roll No=> " + student.rollno);
console.log("Hackathon=> " + student.hackathon);



