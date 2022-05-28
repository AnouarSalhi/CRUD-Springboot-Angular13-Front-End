import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student/student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student=new Student();
  showAlert = false;
  closeAlert() {
    this.showAlert = false;
  }

  constructor(private studentService:StudentService ) { }

  ngOnInit(): void {
  }

  saveStudent(){
     this.studentService.createStudent(this.student).subscribe((response)=>{
       console.log("response");
       this.student = new Student();
       this.showAlert = true;
     });
  }

}
