import { NgModule ,ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';


class MyError implements ErrorHandler{
    handleError(error: any): void {
        //api call..
      debugger;
    }

}


@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PopupComponent],
  providers: [
    {
      provide: ErrorHandler, useFactory: () => {

        return new MyError();
      }
    }

  ]

})
export class SharedModule { }
