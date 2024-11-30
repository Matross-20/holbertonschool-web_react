export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  export interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
  };
  
  // Example usage
  const printedTeacher = printTeacher("kamelia", "Jeo");
  console.log(printedTeacher); 
  
  export interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Interface for the StudentClass
  export interface Student {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Class definition
  export class StudentClass implements Student {
    // Properties
    firstName: string;
    lastName: string;
  
    // Constructor
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Methods
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage
  const studentData: StudentConstructor = {
    firstName: "John",
    lastName: "Doe",
  };
  
  const studentInstance = new StudentClass(studentData);
  console.log(studentInstance.displayName()); // Output: John
  console.log(studentInstance.workOnHomework());
