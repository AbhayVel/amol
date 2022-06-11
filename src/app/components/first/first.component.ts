import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first, abc-first,qdn-first,.firstClass,[other],#first',

 
  templateUrl: './first.component.html',
   
  styleUrls: ['./first.component.css'],
  styles: [`.bluecls{
 color: blue;
}`],
  encapsulation: ViewEncapsulation.Emulated
})
export class FirstComponent implements OnInit {

 static count = 0; //class 
  name = 'Abahy'; //instance 

  constructor() { }

  ngOnInit(): void {

  }

 

  //accessModifier   VariableName : Datatype = VariableValue;
 //accessModifier  Datatype VariableName = VariableValue;

  showData()  {
    let nameData = "Quick";  //local 
  }

}

//FirstComponent.count = 0;
//class
//instance
//local 
