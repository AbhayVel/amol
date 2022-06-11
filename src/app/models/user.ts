export class NameType {
  public firstName: string = '';
  public lastName: string = '';

}


export class User {

  public id: number = 0;
  public name: NameType=new NameType;
  public gender: string = 'F';
  public doj: string = '';
  public subject: number = 0;
  public fees: number = 0;
  public status: string='';

}


