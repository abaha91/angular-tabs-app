import { Component, Input, AfterContentInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  template: `
    <div class="lds-dual-ring" *ngIf="loading"></div>
    <div class="angular-app--tab" [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input() tabTitle;
  loading: boolean;
  active: boolean;
  blocked: boolean;


  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }
}
