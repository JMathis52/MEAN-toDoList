import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {

  constructor(public itemsService: ItemsService) {}

  onAddItem(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.itemsService.addItem(form.value.item);
    form.resetForm();
  }

}
