import { Component, Input, AfterContentInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  template: `
    <div class="angular-app--tab" [hidden]="!active">
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
