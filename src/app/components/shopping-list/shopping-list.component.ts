import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../models/shopping-item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingItem[] = [];
  itemId: number;

  constructor() { }

  ngOnInit() {
    this.itemId = 1;
  }

  addShoppingItem(itemName: string)
  {
    const shoppingItem = new ShoppingItem(this.itemId, itemName);
    this.shoppingList.push(shoppingItem);
    this.itemId++;
  }

  deleteShoppingItem(itemId: number)
  {
    this.shoppingList = this.shoppingList.filter(e => {
      return e.id != itemId;
    });
  }

}
