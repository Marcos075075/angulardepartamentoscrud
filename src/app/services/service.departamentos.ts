import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/departamento";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceDepartamentos {
    constructor(private _http: HttpClient) {}
    url = environment.apiDepartamentos

    async getDepartamentosAsync(): Promise<Departamento[]>{
        let request = "api/departamentos";
        return firstValueFrom(this._http.get<Departamento[]>(this.url + request))
    }

    async createDepartamento(departamento: Departamento): Promise<any> {
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders();
        header = header.set("content-type", "application/json");
        let request = "api/departamentos";
        return firstValueFrom(
            this._http.post(this.url + request, json, {headers: header})
        )
    }
}