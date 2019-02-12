import { Component, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  styleUrls: ['./tab.component.scss'],
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input() tabTitle;
  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }
}
