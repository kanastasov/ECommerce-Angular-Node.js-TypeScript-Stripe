import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html' 
})
export class ProductHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdate(newSort: string): void {
    this.sort= newSort
  }

  onItemsUpdate(count: number): void {
    this.itemsShowCount= count;
  }

  onColumnsUpdated(colsNum: number):void{
    this.columnsCountChange.emit(colsNum);
  }
}
