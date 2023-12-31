import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API: string = '/api/courses';

  constructor(private httpClient: HttpClient) {}

  listFindAll() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first()
      //delay(2000),
    );
  }
}
