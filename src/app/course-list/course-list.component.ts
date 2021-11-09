import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses:Course[] = [];
  selectedCourse:Course = {id:-1, name:''}

  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  onSelect(course:Course){
    this.selectedCourse = course;
  }

  getCourses(){
    this.CourseService.getCourses().subscribe((courses:Course[]) => this.courses = courses);
  }

}
