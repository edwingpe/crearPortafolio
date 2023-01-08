import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  mostrar: Boolean = false;
  icono: String = "fa-solid fa-plus"
  estudiositos: any;
  nombresito : String = '';

  constructor(private datos: DatosService){}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.estudiositos = data.estudios;
      this.nombresito = data.nombre;
    })
  }
  
  mostrarOcultar(){

    if(this.mostrar){
      this.mostrar = false;
      this.icono = "fa-solid fa-plus"
    } else{
      this.mostrar = true;
      this.icono = "fa-solid fa-minus"
    }
  }

}
