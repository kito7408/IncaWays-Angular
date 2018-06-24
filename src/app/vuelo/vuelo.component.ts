import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../vuelo';
import { VueloService } from '../vuelo.service';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {

  vuelos: Vuelo[];
  select: boolean;
  vuelo: Vuelo;
  newVuelo: Vuelo;

  constructor(private service: VueloService) { }

  ngOnInit() {
    this.select=false;
    this.newVuelo=new Vuelo;
    this.vuelo=null;
    this.getAll();
  }

  getAll(): void {
    this.service.getAll()
    .subscribe(data => this.vuelos=data);
  }

  selectedItem(id: number): void {
    this.service.getById(id)
    .subscribe(data => {
      this.vuelo=data;
      this.select=true;
    });
  }

  save(avion: string,origen: string,destino: string,fechasalida: string,horasalida: string,tarifabase:number,tarifanino: number,tarifaadulto: number,tarifafc: number): void {
    this.newVuelo=new Vuelo;
    this.newVuelo.avion=avion;
    this.newVuelo.origen=origen;
    this.newVuelo.destino=destino;
    this.newVuelo.fechasalida=fechasalida;
    this.newVuelo.horasalida=horasalida;
    this.newVuelo.tarifabase=tarifabase;
    this.newVuelo.tarifanino=tarifanino;
    this.newVuelo.tarifaadulto=tarifaadulto;
    this.newVuelo.tarifafc=tarifafc;
    this.service.save(this.newVuelo)
    .subscribe(data => this.getAll());
  }

  eliminar(id: number): void {
    this.service.delete(id)
    .subscribe(data => {
      this.select=false;
      this.getAll();
    })
  }
}
