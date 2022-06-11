import { Component, Input, OnChanges, OnInit, Output, SimpleChanges , EventEmitter} from '@angular/core';
 
import { PopupConfig } from '../../../models/popup-config';

@Component({
  selector: 'qdn-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit , OnChanges{

  @Input('config') config: PopupConfig = new PopupConfig();

  @Output('saveEvent') saveEvent : EventEmitter<any> = new EventEmitter<any>()
  @Output('closeEvent') closeEvent: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes.config && changes?.config?.currentValue['isShow'] === true) {
      this.show();
    }
     
    }

  hideClick() {
   this.hide();
   this.closeEvent.next();
  }

  saveClick() {

   this.saveEvent.next();
  }
  ngOnInit(): void {
  }

public  show() {
  this.config.isShow = true;
  setTimeout(() => {
    this.config.isShowDialog = true;
  }, 10);
    
  }

  hide2() {
    this.config.isShowDialog = false;
  }

  hide() {
    this.config.isShowDialog = false;

    setTimeout(() => {
      this.config.isShow = false;
    }, 5000);
   
   
  }

}
