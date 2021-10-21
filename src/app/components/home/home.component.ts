import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from 'src/app/studentdetails.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StudentdetailsService],
})
export class HomeComponent implements OnInit {
  
  public students:any;
  cb: any;
  name: any;
  markattendance(frm:any){
    console.log("Makred");
    console.log(frm.value.Abc1);
    for (let  i=0; i<this.students.length; i++)
    {
        
        
        

    }
    
    
    
   
    
    // this.studentsdb.addattendance(frm.)
  }
  

  


  constructor(private studentsdb: StudentdetailsService) { }

  ngOnInit(): void {
    this.students=this.studentsdb.getstudent();
    console.log(this.students);
  }
  

}
