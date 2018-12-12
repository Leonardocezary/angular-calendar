import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarCommonModule } from 'angular-calendar';
import { CalenderSchedulerViewComponent } from './calender-scheduler-view.component';
import { CalendarSchedulerViewHeaderComponent } from './calendar-scheduler-view-header.component';
import { CalendarSchedulerViewEventComponent } from './calendar-scheduler-view-event.component';
import { CalendarSchedulerViewUserComponent } from './calendar-scheduler-view-user.component';

@NgModule({
  imports: [
    CommonModule,
    ResizableModule,
    DragAndDropModule,
    CalendarCommonModule
  ],
  declarations: [
    CalenderSchedulerViewComponent,
    CalendarSchedulerViewHeaderComponent,
    CalendarSchedulerViewEventComponent,
    CalendarSchedulerViewUserComponent
  ],
  exports: [
    CalenderSchedulerViewComponent,
    CalendarSchedulerViewHeaderComponent,
    CalendarSchedulerViewEventComponent,
    CalendarSchedulerViewUserComponent
  ]
})
export class CalenderSchedulerModule {}
