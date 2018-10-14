import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  private items: Item[] = [];
  private itemsUpdated = new Subject<Item[]>();

  constructor(private http: HttpClient) {}

  getItems() {
    this.http.get<{ message: string, items: any }>('http://localhost:3000/api/items')
    .pipe(map((itemData) => {
      return itemData.items.map(item => {
        return {
          id: item._id,
          content: item.content,
        };
      });
    }))
    .subscribe((transformedItems) => {
      this.items = transformedItems;
      this.itemsUpdated.next([...this.items]);
    });
  }

  getItemUpdateListener() {
    return this.itemsUpdated.asObservable();
  }

  addItem(content: string) {
    const item: Item = { id: null, content: content };
    this.http.post<{ message: string, itemId: string }>('http://localhost:3000/api/items', item)
    .subscribe((resData) => {
      const id = resData.itemId;
      item.id = id;
      this.items.push(item);
      this.itemsUpdated.next([...this.items]);
    });
  }

  deleteItem(itemId: string) {
    this.http.delete('http://localhost:3000/api/items/' + itemId)
      .subscribe(() => {
        const updatedItems = this.items.filter(item => item.id !== itemId);
        this.items = updatedItems;
        this.itemsUpdated.next([...this.items]);
      });
  }
}
