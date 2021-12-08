import { Goal } from './goals-models';

/**
 * Descripción: Modelo Respuesta base, se hereda por otros response.
 * Autor: achique-luisdan
 * Fecha: 07-12-2021
 */
export class ResponseBase {
  msg: string;
  code: number;
}

/**
 * Descripción: Modelo Respuesta de lista de objetivos
 */
export class ResponseListGoals extends ResponseBase {
  goals: Goal[] = [];
  lenght: number;
}
