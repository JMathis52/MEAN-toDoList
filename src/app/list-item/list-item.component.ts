import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnDestroy {

  items: Item[] = [];
  private itemsSub: Subscription;

  constructor(public itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService.getItems();
    this.itemsSub = this.itemsService.getItemUpdateListener()
      .subscribe((items: Item[]) => {
        this.items = items;
      });
  }

  onDelete(itemId: string) {
    this.itemsService.deleteItem(itemId);
  }

  ngOnDestroy() {
    this.itemsSub.unsubscribe();
  }

}
