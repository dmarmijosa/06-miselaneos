import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  template: `
    
    <app-ng-style></app-ng-style> 
    
    <app-css></app-css>
    
    <app-clases></app-clases> 
    
    <p [appResaltado]="'blue'">
        Hola mundo
    </p> 

    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit,OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy{
  
  constructor() {

   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnChanges():void{
    console.log("ngOnChanges");  
  }
  
  ngDoCheck():void{
    console.log("ngDoCheck");
  }
  
  ngAfterContentInit():void{
    console.log("ngAfterContentInit");
  }
  
  ngAfterContentChecked():void{
    console.log("ngAfterContentChecked");
  }
  
  ngAfterViewInit():void{
    console.log("ngAfterViewInit");
  }
  
  ngAfterViewChecked():void{
    console.log("ngAfterViewChecked");
  }
  private route: Router
  ngOnDestroy():void{
    
    if(confirm("desea cambiar de pagina")){
      console.log("cambio de pagina");
      

    }else{
      console.log("no cambio de pagina");
      
    }
  }
  

}
