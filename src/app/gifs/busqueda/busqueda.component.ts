import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
//va  y busca en el html la referencia el tipo elementref y accedmos a ella sin necesidad de one way ni de reactive form ni form module

constructor(
  private gifsService : GifsService
){

}
  buscar(){
    
    const valor = this.txtBuscar.nativeElement.value;
    
    if( valor.trim().length === 0){
      return;
    }
    
    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }


}
