import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  sayhello(component:string){
   alert("hello from "+component);
  }
}
