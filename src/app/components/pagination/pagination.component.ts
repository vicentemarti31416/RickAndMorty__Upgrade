import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Output() public emitter = new EventEmitter<number>();

  page: number = 1;

  public changePage(page: number) {
    this.page = page;
    this.emitter.emit(page);
  }

}
