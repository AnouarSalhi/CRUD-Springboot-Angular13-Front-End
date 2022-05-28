import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  
 baseUrl=environment.API_BASE_URL;
  
 createStudent(student:Student){
   return this.http.post(this.baseUrl,student);
  }

  updateStudent(student:Student,id:number){
    return this.http.put(this.baseUrl+"/"+id,student);
   }

   getStudentsList(){
    return this.http.get(this.baseUrl);
   }
   
   getStudent(id: number){
    return this.http.get(this.baseUrl+"/"+id);
   }

   deleteStudent(id: number){
    return this.http.delete(this.baseUrl+"/"+id);
   }
}
