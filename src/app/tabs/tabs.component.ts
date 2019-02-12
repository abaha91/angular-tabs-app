import { Component, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  styleUrls: ['./tabs.component.scss'],
  template: `
    <ul>
      <li *ngFor="let tab of tabs">{{ tab.tabTitle }}</li>
    </ul>
    <ng-content></ng-content>`
})
export class TabsComponent {
  tabs: TabComponent[] = [];
  addTab(tab: TabComponent) {
    console.log(tab);
    this.tabs.push(tab);
  }
}
