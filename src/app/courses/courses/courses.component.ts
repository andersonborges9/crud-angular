import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  courses: Course[] = [

    {_id: '1', name: 'Anderson', category: 'Borges'}

  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses=[];
   }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
