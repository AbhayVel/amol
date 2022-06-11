import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FilterConfig } from '../../models/filter-config';
import { PopupConfig } from '../../models/popup-config';
import { SortConfig } from '../../models/sort-config';
import { Subject } from '../../models/subject';
import { User } from '../../models/user';
import { PopupComponent } from '../../modules/shared/popup/popup.component';
import { GenderTitlePipe } from '../../pipes/gender-title.pipe';
import { SubjectMasterPipe } from '../../pipes/subject-master.pipe';
import { FirstService } from '../../services/first.service';
import { GridServiceService } from '../../services/grid-service.service';
import { UserService } from '../../services/user.service';
import { SharedUtility } from '../../utilities/shared-utility';


@Component({
  selector: 'qdn-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  
})
export class UserListComponent implements OnInit {

  //insatance variable can be access from Html

  //insatance variable can be access from Html

    @ViewChild('popRef')
  popRef: PopupComponent = new PopupComponent;


  d = new Date();

  user = new User();

  gs: GridServiceService;
  popupConfig: PopupConfig = PopupConfig.createPopupConfig({
    header: 'Edit User',
    closeButtonText: 'Cancel',
    isHeader: true
  })

  subjectArray: Array<Subject> = [
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: '.net'
    },
    {
      id: 3,
      name: 'Selenium'
    },
    {
      id: 4,
      name: 'Java'
    }

  ]

  
  sortConfig: SortConfig = {
    orderBy: 1,
    columnName: 'id',
    columnType: 'num',
    customLogic: undefined
  }



  filterConfig: FilterConfig<User> = {
    data: [],
    rows: [],
    pages: [],
    currentPage: 1,
    rowPerPage: 2,
    filter: {
      id: {
        columnName: "id",
        columnValue: "",
        columnType: "num",
        customLogic: undefined
      },
      gender: {
        columnName: "gender",
        columnValue: "",
        columnType: "cistr",
        customLogic: undefined
      },
      subject: {
        columnName: "subject",
        columnValue: "",
        columnType: "num",
        customLogic: undefined
      },
      feesGte: {
        columnName: "fees",
        columnValue: "",
        columnType: "numGte",
        customLogic: undefined
      },
      feesLte: {
        columnName: "fees",
        columnValue: "",
        columnType: "numLte",
        customLogic: undefined
      },
      dojGte: {
        columnName: "doj",
        columnValue: "",
        columnType: "dateGte",
        customLogic: undefined
      },
      dojLte: {
        columnName: "doj",
        columnValue: "",
        columnType: "dateLte",
        customLogic: undefined
      },
      status: {
        columnName: "status",
        columnValue: "",
        columnType: "cistrematch",
        customLogic: undefined
      },
      name: {
        columnName: "name",
        columnValue: "",
        columnType: "xx",
        customLogic: SharedUtility.nameSearch
      },
    }
  }



  add() {
    this.router.navigate(['user', 'edit', 0]);

  }

  editSamePage(u: User) {
    this.router.navigate(['users', 'edit','samepage', u.id], { queryParams: { name: u.name.firstName }, skipLocationChange: false });
    ///user/edit/12;

  }

  editR(u: User) {
   this.router.navigate(['user', 'edit', u.id], { queryParams: { name: u.name.firstName}  , skipLocationChange  : false });
    ///user/edit/12;

  //  this.router.navigateByUrl(`user/edit/${u.id}?name=${u.name.firstName}`, { skipLocationChange : true });
  }

  deleteUser(u: User) {
    this.us.deleteUser(u).subscribe(() => {
      this.ngOnInit();
    })
  }

  edit(u: User) {
     //this.popupConfig.isShow = true;
     //this.popupConfig = { ...this.popupConfig };
    this.user = u;
    this.popupConfig.header = "Edit User";
     this.popRef.show();
  }
  show() {
    this.first.count = this.first.count + 1;
  console.log(this.first.count);

  }

 
  constructor(gs: GridServiceService,
    private first: FirstService,
    private router: Router,
    private us: UserService

  ) {
    this.gs = gs;

  }

  popupCLose() {
    console.log("I am in CLose");
  }

  search(columnName: string,columnValue: any): any {
    this.filterConfig.filter[columnName].columnValue = columnValue;
    this.gs.execute(this.filterConfig, this.sortConfig);
  }


  pageChange(p: number) {
    this.gs.execute(this.filterConfig, this.sortConfig);
  }
   

  sortData(columnName: string, columnType: string) {
    this.sortConfig.orderBy = this.sortConfig.orderBy * -1;
    this.sortConfig.columnName = columnName;
    this.sortConfig.columnType = columnType;


    if (columnName == 'name') {
      this.sortConfig.customLogic = SharedUtility.nameSort;
    } else if (columnName == 'subject') {
      this.sortConfig.customLogic = SharedUtility.subjectNameSort;
    }  else {
      this.sortConfig.customLogic = undefined;
    }

    this.gs.execute(this.filterConfig, this.sortConfig);
    //let orderBy = this.orderBy;



      // this.userArray.sort((e1: any, e2: any)=>{  ///  callback es 5  //Arrow function is available in es 6 and above
      //   if (columnType == 'cistr') {
      //     return e1[columnName].toLowerCase() > e2[columnName].toLowerCase() ? this.orderBy : -1 * this.orderBy;
      //   } else if (columnType == 'date') {

      //     let val1 = this.convertDate( e1[columnName]);
      //     let val2 = this.convertDate(e2[columnName]);


      //     return val1 > val2 ? this.orderBy : -1 * this.orderBy;
      //   } else {
      //     return e1[columnName] > e2[columnName] ? this.orderBy : -1 * this.orderBy;
      //   }
         
      //});


    //if (this.orderBy == -1) {
    //  this.userArray.sort(function (e1: any, e2: any) {

    //    return e1[columnName] > e2[columnName] ? 1 : -1;
    //  });
    //} else {

    //  this.userArray.sort(function (e1: any, e2: any) {

    //    return e1[columnName] > e2[columnName] ? -1 : 1;
    //  });
    //}
      

    //if (columnName == 'id') {
    //  this.userArray.sort(function (e1, e2) {

    //    return e1.id > e2.id ? -1 : 1;
    //  });
    //} else if (columnName == 'name') {
    //  this.userArray.sort(function (e1, e2) {

    //    return e1.name > e2.name ? -1 : 1;
    //  });
    //} else if (columnName == 'gender') {
    //  this.userArray.sort(function (e1, e2) {

    //    return e1.gender > e2.gender ? -1 : 1;
    //  });
    //}
   
     
  }

  ngOnInit(): void {


    this.us.getAllUser().subscribe((userArray: Array<User>) => {
      this.filterConfig.data = userArray;
      this.filterConfig.rows = userArray;
      this.gs.execute(this.filterConfig, this.sortConfig);
    },
      (err)=>{
        alert("There is error");
      }

    )
   
  }



  ngAfterContentChecked(): void {
    console.log("I am in ngAfterContentChecked");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("I am in ngOnChanges");
  }
  ngOnDestroy(): void {
    console.log("I am in ngOnDestroy");
  }
  ngAfterViewChecked(): void {
    console.log("I am in ngAfterViewChecked");
  }
  ngDoCheck(): void {
    console.log("I am in ngDoCheck");
  }
  ngAfterViewInit(): void {
    console.log("I am in ngAfterViewInit");
  }
  ngAfterContentInit(): void {
    console.log("I am in ngAfterContentInit");
  }
}
