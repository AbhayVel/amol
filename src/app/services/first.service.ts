import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root'
})

//@Injectable()
export class FirstService {

  count: number = 0;
  constructor(private ss: SecondService) { }
}
