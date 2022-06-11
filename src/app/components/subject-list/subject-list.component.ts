import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../services/first.service';

@Component({
  selector: 'qdn-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
  
})
export class SubjectListComponent implements OnInit {

  constructor(private first: FirstService) { }


  show() {
    this.first.count = this.first.count + 1;
    console.log(this.first.count);

  }
  ngOnInit(): void {
  }

}
