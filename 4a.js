class person{
    constructor(name, age, gender){
        this.name= name;
        this.age= age;
        this.gender= gender;
    }
    getDetails(){
        return 'Name: ${this.name}, Age: ${this.age}, Gender: {this.name}';
    }
     
}
 class employee extends person{
    constructor( name, age, gender, employeeId, department){
         super(name, age, gender);
         this.employeeId = employeeId;
         this.department = department
    }
    getEmployeeDetails(){
        return 'Employee ID: ${this.employeeId}, Department : ${this.department}';
    }
 }
 class Student{
    constructor(studentId, course) {
        this. studentId =  studentId;
        this. course =  course;
    }
    getStudentDetails(){
        return 'student id : ${this.studentId} , course: ${this.course}';
    }
 }
 class EmployeeAccount{
    constructor(person, employee, student){
        this.  person =   person;
        this.  employee =  employee;
        this.  student =   student;
    }
    getAllDetails(){
        const personDetails = this.person.getDetails();
        const  employeeDetails = this.employee.getEmployeeDetails();
        const  studentDetails = this.person.getStudentDetails();
        return '${personDetails}\n${EmployeeDetails}\n${StudentDetails';

    }
 }
 const personInfo = new person("Steve", 25, "male");
 const employeeInfo = new  employee(" mike", 23, "male", "re123", "hr");
 const studentInfo = new student(" vr123", "ict");
 const EmployeeAccount = new EmployeeAccount(personInfo, employeeInfo, studentInfo);
 console.log(EmployeeAccount.getAllDetails());



 