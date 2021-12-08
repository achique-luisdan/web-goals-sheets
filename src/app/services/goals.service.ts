import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseListGoals } from '../models/goals-responses';

@Injectable({
  providedIn: 'root',
})
/**
* Descripción: Servicio para consultar las metas.
* Autor: achique-luisdan
* Fecha: 07-12-2021
*/
export class GoalsService {
  url: string = 'http://localhost:3000/api/goals/';

  /**
   * Descripción: Clase Goal.
   * Autor: achique-luisdan
   * Fecha: 07-12-2021
  */
  constructor(private http: HttpClient) { }

  /**
   * @return {ResponseListGoals} Response de lista de objetivos.
   */
  listGoal(): Observable<ResponseListGoals> {
    return this.http
        .get(
            this.url,
        )
        .pipe(
            map((response) => {
              return response as ResponseListGoals;
            }),
        );
  }
}
