import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];

  constructor(private CourseService:CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses():void{
    this.CourseService.getCourses().subscribe((courses:Course[])=>this.courses = courses);
  }

}
