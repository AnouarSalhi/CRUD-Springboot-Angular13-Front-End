import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:Student[];

  constructor( private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentsList().subscribe((response:any)=>{
      this.students=response;
    });
  }

  deleteStudent(id) {
    this.studentService.deleteStudent(id).subscribe((response) => {
      console.log(response);
      this.students = this.students.filter((s :any )=>{
        return id !=  s.id;
      });
    });
  }


}
