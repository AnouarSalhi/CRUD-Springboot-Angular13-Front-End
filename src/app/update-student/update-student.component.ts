import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student=new Student();
  constructor(private route:ActivatedRoute,private studentService:StudentService ) { }
  id:number;
  showAlert = false;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudent(this.id).subscribe((response:any)=>{
     console.log("this.student");
      this.student=response;
     
   });
  }

  updateStudent() {
    this.studentService.updateStudent(this.student,this.id).subscribe((response) => {
      this.showAlert = true;
      console.log(response);
    });
  }
  closeAlert() {
    this.showAlert = false;
  }

  
 
}
