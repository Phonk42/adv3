import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() tasks: any[] = [];
  @Output() editChild = new EventEmitter;

  edit(task: any): void {
    this.editChild.emit(task) ;
  }

  delete(i: number): void {
    let task = this.tasks[i];
    if (task && task.status) {
      this.tasks.splice(i, 1);
    }
  }
}
