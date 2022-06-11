import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qdn-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  @Input('tree') tree: Array<any>=[];
  @Input('first') first: any = 0;


  parent(tree: Array<any>, id: number) {
    const data = tree.filter((e) => {
      return e.parentId == id;
    })

    return data;
  }
  ngOnInit(): void {
  }

}
