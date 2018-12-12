import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'mwl-calendar-scheduler-view-user',
  template: `
     <!--<ng-template--
      <!--let-user="user">-
       <!--<div *ngIf="user">
        <!--{{ user | json}
         <!--</di

           <!--</ng-templ
    <ng-template [ngTemplateOutlet]="userTemplate">
                <!--[ngTemplateOutletCont
      >
        <!--us
      r-->

    </ng-template>
  `
})
export class CalendarSchedulerViewUserComponent {
  // @Input()
  // user: string;

  @Input()
  userTemplate: TemplateRef<any>;
}
