/**
 * Descripción: Clase Action.
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
 * Descripción: Clase Goal.
 * Autor: achique-luisdan
 * Fecha: 07-12-2021
 */
export class Goal {
  id: number;
  name: string;
  descripcion: string;
  startDate: string;
  endDate: string;
  actions: Action [];
}
