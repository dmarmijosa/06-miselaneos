import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) { 
    console.log("Directiva llamada");
    el.nativeElement.style.backgroundColor="Yellow";
  }
  @Input("appResaltado") nuevoColor:string;


  @HostListener('mouseenter') mouseEntro(){
    this.resaltado(this.nuevoColor || 'yellow');
    //this.el.nativeElement.style.backgroundColor="Yellow";
  }
  @HostListener('mouseleave') mouseSalio(){
    this.resaltado(null);
  }
  private resaltado(color:string){
    this.el.nativeElement.style.backgroundColor=color;

  }



}
