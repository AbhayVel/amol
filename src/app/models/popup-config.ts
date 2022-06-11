export class PopupConfig {

  public isShow?: boolean = false;
  public isShowDialog?: boolean = false;

  public header?: string = '';

  public isFooter?: boolean = true
  public isHeader?: boolean = true;

  public isShowCloseButton?: boolean = true;
  public isShowSaveButton?: boolean = true;

  public saveButtonText?: string = 'Save';

  public closeButtonText?: string = 'Close';

  static createPopupConfig(poupConfig: PopupConfig) {
    let pc = new PopupConfig();
    debugger;
    pc = Object.assign(pc, poupConfig);

    return pc;

  }


}
