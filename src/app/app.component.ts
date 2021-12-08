/* eslint-disable @angular-eslint/use-lifecycle-interface */

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Goal} from './models/goals-models';
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
  title = 'web-goals-sheets';
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
   * Descripción: Constructor
   * Autor: achique-luisdan
   * Fecha: 07-12-2021
   */
  constructor(private goalsService:GoalsService) {}

  /**
   * Descripción: Componente App
   * Autor: achique-luisdan
   * Fecha: 07-12-2021
   */
  ngOnInit(): void {
    this.listGoals();
  }

  /**
   * Descripción: Componente App
   * Autor: achique-luisdan
   * Fecha: 07-12-2021
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Descripción: listGoals
   * Autor: achique-luisdan
   * Fecha: 07-12-2021
   */
  listGoals(): void {
    this.goalsService.listGoal().subscribe((response) => {
      this.responseListGoals = response;
      this.dataSource.data = this.responseListGoals.goals;
      console.log(this.responseListGoals);
    });
  }
}

