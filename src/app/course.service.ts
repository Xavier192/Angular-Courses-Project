import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { COURSES } from './courses';
import { Course } from './course';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(private MessageService:MessageService) { }

  getCourses():Observable<Course[]>{
    this.MessageService.add('Courses retrieved from courses service');
    
    return of (COURSES);
  }
}
