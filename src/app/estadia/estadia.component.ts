import { Component, OnInit } from '@angular/core';
import { Estadia } from '../estadia';
import { EstadiaService } from '../estadia.service';

@Component({
  selector: 'app-estadia',
  templateUrl: './estadia.component.html',
  styleUrls: ['./estadia.component.css']
})
export class EstadiaComponent implements OnInit {

  estadias: Estadia[];
  select: boolean;
  estadia: Estadia;
  newEstadia: Estadia;
  update: boolean;

  constructor(private service: EstadiaService) { }

  ngOnInit() {
    this.select=false;
    this.estadia=null;
    this.newEstadia=new Estadia;
    this.update=false;
    this.getAll();
  }

  getAll(): void {
    this.service.getAll()
    .subscribe(data => this.estadias=data);
  }

  selectedItem(id: number): void {
    this.service.getById(id)
    .subscribe(data => {
      this.estadia=data;
      this.select=true;
    });
  }

  save(direccion: string, ciudad: string,pais: string, costoxdia: number, tipoestadia: string) : void {
    this.newEstadia.direccion=direccion;
    this.newEstadia.ciudad=ciudad;
    this.newEstadia.pais=pais;
    this.newEstadia.costoxdia=costoxdia;
    this.newEstadia.tipoestadia=tipoestadia;
    this.service.save(this.newEstadia)
    .subscribe(data => this.getAll());
  }

  eliminar(id: number): void {
    this.service.delete(id)
    .subscribe(data => {
      this.select=false;
      this.getAll()
    });
  }

  porActualizar() : void {
    this.update=true;
  }

  actualizarCancel() : void {
    this.update=false;
  }

  actualizar(id: number, direccion: string, ciudad: string,pais: string, costoxdia: number, tipoestadia: string, comprado: string): void {
    this.newEstadia.id = id;
    this.newEstadia.direccion=direccion;
    this.newEstadia.ciudad=ciudad;
    this.newEstadia.pais=pais;
    this.newEstadia.costoxdia=costoxdia;
    this.newEstadia.tipoestadia=tipoestadia;
    if(comprado == "true")
    {
      this.newEstadia.comprado=true;
    } else {
      this.newEstadia.comprado=false;
    }
    this.service.update(this.newEstadia)
    .subscribe(data => {
      this.getAll();
      this.update=false;
    })
  }
}
