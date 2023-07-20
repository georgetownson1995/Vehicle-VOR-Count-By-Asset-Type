import { Component } from '@angular/core';
import { LegendTitle } from '@progress/kendo-angular-charts';

@Component({
  selector: 'my-app',
  template: `
    <kendo-chart>
      <kendo-chart-title
        text="">
      </kendo-chart-title>
      <kendo-chart-legend
        [title]="legendTitle"
        position="right"
      >
      </kendo-chart-legend>
      <kendo-chart-series>
        <kendo-chart-series-item
          *ngFor="let item of series"
          type="line"
          [name]="item.name"
          [data]="item.data"
        >
        </kendo-chart-series-item>
      </kendo-chart-series>
      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item
          [categories]="categories"
        >
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>
    </kendo-chart>
  `,
})
export class AppComponent {
  public series = [
    {
      name: 'Vehicles',
      data: [10, 9, 6, 15, 10, 11, 7, 4, 13, 15, 10, 6],
    },
    {
      name: 'Trailers',
      data: [15, 10, 12, 9, 11, 7, 3, 10, 8, 9, 12, 13],
    },
  ];

  public categories: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public legendTitle: LegendTitle = {
    text: 'Countries',
    font: '18px Arial',
  };
}
