import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qdn-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

 tree= [
   {
     id: 1,
     name: "a",
     parentId: 0
   },
   {
     id: 2,
     name: "B",
     parentId: 1
   },
   {
     id: 4,
     name: "X",
     parentId: 1
   },
   {
     id: 3,
     name: "C",
     parentId: 2
   },
   {
     id: 4,
     name: "C",
     parentId: 3
   }

  ]


  parent(tree : Array<any>, id: number) {
    const data= tree.filter((e) => {
      return e.parentId ==id;
    })

    return data;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
