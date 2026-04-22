let teacher ={

    makeVideo: true,
   
}

let student ={  
 makeAssignments: false,
 attendence: true,
}

let team ={      
    makeVideo: true,
    isAvailable : true,
}
teacher.__proto__ = team;      // teacher can access the property of Team
teacher.__proto__ = student; // teacher can access the property of student

console.log(teacher.makeAssignments);       // student - makeassi..- false

//              new syntax               //

Object.setPrototypeOf(teacher, team);
Object.setPrototypeOf(teacher, student);
