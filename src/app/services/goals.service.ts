import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ListGoals } from '../models/goals-responses';

@Injectable({
  providedIn: 'root',
})
/**
* Descripción: Servicio para consultar los objetivos.
* Autor: achique-luisdan
* Fecha: 07-12-2021
*/
export class GoalsService {
  url: string = 'http://localhost:3000/api/goals/';

  /**
   * Descripción: Constructor del servicio.
  */
  constructor(private http: HttpClient) { }

  /**
   * Descripción: Lista los objetivos.
   * @return {ListGoals} Respuesta de lista de objetivos.
   */
  listGoal(): Observable<ListGoals> {
    return this.http
        .get(
            this.url,
        )
        .pipe(
            map((response) => {
              return response as ListGoals;
            }),
        );
  }
}
