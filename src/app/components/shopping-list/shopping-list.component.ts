import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingItem[] = [];
  itemId: number;
  shoppingForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.itemId = 1;
    this.initForm();
  }

  initForm()
  {
    this.shoppingForm = new FormGroup({itemName  : new FormControl('', [Validators.required])});
  }

  onFormSave(value)
  {
    if (this.shoppingForm.valid) {
      this.addShoppingItem(value.itemName);
      this.initForm();
    }
    else {
      const me = this;
      Object.keys(this.shoppingForm.controls).forEach((e) => {
        me.shoppingForm.get(e).markAsTouched();
      });
    }
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
