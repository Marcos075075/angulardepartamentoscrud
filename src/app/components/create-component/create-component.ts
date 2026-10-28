import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
    public mensaje!: string;
    @ViewChild("cajaid") cajaId!: ElementRef;
    @ViewChild("cajanombre") cajaNombre!: ElementRef;
    @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _service: ServiceDepartamentos,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ){}

  async insertDepartamento(): Promise<void>{
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let dept: Departamento = new Departamento(id, nombre, localidad);
    let response = await this._service.createDepartamento(dept);
    this._router.navigate(["/"]);
    // this.mensaje = "Departamento insertado"
    // this._cdr.detectChanges();
  }
}
