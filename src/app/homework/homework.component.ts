import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent {
  public tasks: any[] = [];
  public inputModel = '';
  public true_false = false;
  public message !: string;

  addUser(): void {
    if (this.inputModel.length > 0) {
      let newTask = {
        name: this.inputModel,
        status: this.true_false
      };
      this.tasks.push(newTask);
      this.inputModel = '';
    }
  }

  edit(data: any): void {
    this.message = data;
  }
}
