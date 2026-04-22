let teacher ={

    makeVideo: true,
   
}

let student ={  
 makeAssignments: false,
 attendence: true,
}

let TAc ={      
    makeVideo: true,
    isAvailable : true,
}
teacher.__proto__ = TAc;      // teacher can access the property of TAc
teacher.__proto__ = student; // teacher can access the property of student

console.log(teacher.makeAssignments);       // student - makeassi..- false

//              new syntax               //

Object.setPrototypeOf(teacher, TAc);
Object.setPrototypeOf(teacher, student);