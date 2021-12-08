/* eslint-disable @angular-eslint/use-lifecycle-interface */

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Goal } from './models/goals-models';
import { ResponseListGoals } from './models/goals-responses';
import { GoalsService } from './services/goals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
/**
 * Descripción: Componente App
 * Autor: achique-luisdan
 * Fecha: 07-12-2021
 */
export class AppComponent implements AfterViewInit, OnInit {
  responseListGoals: ResponseListGoals = new ResponseListGoals();

  public displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'startDate',
    'endDate',
  ];

  public dataSource = new MatTableDataSource
    <Goal>(this.responseListGoals.goals);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
 * Descripción: Despues de inicializar la vista del componente.
 */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Descripción: Constructor del servicio.
   */
  constructor(private goalsService: GoalsService) { }

  /**
   * Descripción: Al inicializar el componente.
   */
  ngOnInit(): void {
    this.listGoals();
  }

  /**
   * Descripción: Función para Listar objetivos.
   */
  listGoals(): void {
    this.goalsService.listGoal().subscribe((response) => {
      this.responseListGoals = response;
      this.dataSource.data = this.responseListGoals.goals;
    });
  }
}
