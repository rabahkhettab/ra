import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-exemple2',
  templateUrl: './exemple2.component.html',
  styleUrls: ['./exemple2.component.scss']
})
export class Exemple2Component implements OnInit {
  [x: string]: any;

  public description = 'This is a description';
  colors=['red','blue','green'];
  curentdate=new Date();

  constructor(private service:MyserviceService) { }
  myfunction(){
    alert("rabah khettab is here ");
  }
  change(){
    alert("color changed");
  }

  ngOnInit() {
   this.service.sayhello("exemple2");
  }

}
