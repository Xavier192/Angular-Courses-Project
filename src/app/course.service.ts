import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { COURSES } from './courses';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor() { }

  getCourses():Observable<Course[]>{
    return of (COURSES);
  }
}
