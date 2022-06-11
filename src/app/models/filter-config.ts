export class FilterConfig<X> {
 public data: Array<X>=[];
  public rows: Array<X> = [];
 public filter: any;
  public pages: Array<number> = [];
  public currentPage: number = 1;
  public rowPerPage: number = 2;
}
