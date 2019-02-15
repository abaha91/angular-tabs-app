import { Component, AfterContentInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="angular-app--tabs-list">
      <li *ngFor="let tab of tabs"
          class="angular-app--tab-list-item {{tab.active ? 'active' : ''}} {{tab.blocked ? 'blocked' : ''}}"
          (click)="selectTabOnClick(tab)">
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
            tab.blocked = true;
            tab.active = false;
            tab.loading = false;
        });
        tab.loading = true;
        setTimeout(() => {
            tab.active = true;
            tab.loading = false;
            localStorage.setItem('currentTab', tab.tabTitle);
            this.tabs.forEach((tab) => {
                tab.blocked = false;
            });
        }, 3000);

    }


    selectTabOnContentLoaded() {
        this.tabs.forEach((tab) => {
            if (localStorage.getItem('currentTab') == null && !this.tabs.indexOf(tab)) {
                tab.active = true;
            } else if (localStorage.getItem('currentTab') !== null && tab.tabTitle === localStorage.getItem('currentTab')) {
                tab.active = true;
            }
        });
    }

    addTab(tab: TabComponent) {
        this.tabs.push(tab);
    }
}
