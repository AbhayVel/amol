import { Injectable } from '@angular/core';
import { FilterConfig } from '../models/filter-config';
import { SortConfig } from '../models/sort-config';
import { FilterPipe } from '../pipes/filter.pipe';
import { SortPipe } from '../pipes/sort.pipe';

//@Injectable({
//  providedIn: 'root'
//})
export class GridServiceService {

  constructor() { }


  //5-> 2

  public execute(filterConfig: FilterConfig<any>, sortConfig: SortConfig) {

    let fp = new FilterPipe();
    let sp = new SortPipe();
    let rows = fp.transform(filterConfig.data, filterConfig);
    rows = sp.transform(rows, sortConfig);

    let rowPerPage = filterConfig.rowPerPage;
    let totalRows = rows.length;
    let pageCount = Math.ceil( totalRows / rowPerPage);
    let currentPage = filterConfig.currentPage;
    if (currentPage > pageCount) {
      currentPage = 1;
      filterConfig.currentPage = 1;
    }
    let pages = [];
    for (let i = 1; i <= pageCount; i = i + 1) {
      pages.push(i);
    }
    
    filterConfig.pages = pages;

    filterConfig.rows = rows.slice((currentPage - 1) * rowPerPage, (currentPage) * rowPerPage);

  }
}
