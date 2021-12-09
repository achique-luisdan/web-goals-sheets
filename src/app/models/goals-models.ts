/**
 * Descripción: Modelo Acción
 * Autor: achique-luisdan
 * Fecha: 07-12-2021
 */
export class Action {
  id: number;
  descripcion: string;
  done: boolean;
  goal: Goal;
}

/**
 * Descripción: Modelo Objetivo
 */
export class Goal {
  id: number;
  name: string;
  descripcion: string;
  startDate: string;
  endDate: string;
  actions: Action[];
}

/**
 * Descripción: Clase contiene la información del progreso de un objetivo
 * Autor: achique-luisdan
 * Fecha: 07-12-2021
 */
export class Progress {
  done: number;
  todo: number;
  quantity: number;
  percent: number;
}
