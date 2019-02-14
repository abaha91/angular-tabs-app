import { Component, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="angular-app--tabs-list">
      <li *ngFor="let tab of tabs" class="angular-app--tab-list-item {{tab.active ? 'active' : ''}}" (click)="selectTabOnClick(tab)">
          {{ tab.tabTitle }}
      </li>
    </ul>
    <ng-content></ng-content>`
})
export class TabsComponent implements AfterContentInit {

    tabs: TabComponent[] = [];

    ngAfterContentInit() {
        this.selectTabOnContentLoaded();
    }

    selectTabOnClick(tab: TabComponent) {
        this.tabs.forEach((tab) => {
            tab['active'] = false;
        });
        tab['active'] = true;
        localStorage.setItem('currentTab', tab.tabTitle);
    }

    selectTabOnContentLoaded() {
        this.tabs.forEach((tab) => {
            if (localStorage.getItem('currentTab') == null && !this.tabs.indexOf(tab)) {
                tab['active'] = true;
            } else if (localStorage.getItem('currentTab') !== null && tab.tabTitle === localStorage.getItem('currentTab')) {
                tab['active'] = true;
            }
        });
    }

    addTab(tab: TabComponent) {
        this.tabs.push(tab);
    }
}
