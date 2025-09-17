import { Component, signal } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { data } from './data-source';
import dayjs from 'dayjs';

@Component({
  selector: 'app-root',
  imports: [GridModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('syncfusion-grid-demo');
  public data: Object[] = data
  // public data: Object[] = data.map(item => ({
  //   ...item,
  //   date: dayjs(item.date).toDate()
  // }));
//   public data: Object[] = data.map(item => ({
//   ...item,
//   date: dayjs(item.date.substring(0, 10)).toDate()
// }));
}
