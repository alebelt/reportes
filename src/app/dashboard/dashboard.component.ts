import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Expediente } from '../expediente';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  expediente: Expediente[] = [];
  expedientes:any = null;
  total_expedientes:number = 0;
  total_audiencias:number = 0;
  ultimo_movimiento:Date | undefined;
  
  constructor(private studentApiService: ApiService) {
  }

  ngOnInit(){
    //call this method on component load

  }

  getExpedientes(){
    this.studentApiService.getExpedientes()
      .subscribe((response)=>{
        console.log(response)
        this.expedientes = response;
      })
  }

  calcularReporte(){
    this.total_expedientes = this.expedientes.length;
    this.total_audiencias = this.expedientes.reduce((acc:any, array:any) => acc + array.nro_audiencias, 0);
    this.ultimo_movimiento = this.expedientes[0].registrado;
  }

}
