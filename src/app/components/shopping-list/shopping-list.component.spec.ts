import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';
import {ShoppingItem} from "../../models/shopping-item/shopping-item.model";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.itemId).toBe(1);
    expect(component.shoppingList.length).toBe(0);
  });

  it('should add to shopping list and increment ID', () => {
    const itemToAdd = 'Milk';
    const expectedResult: ShoppingItem[] = [
      new ShoppingItem(1, 'Milk')
    ];
    component.addShoppingItem(itemToAdd);
    fixture.detectChanges();

    expect(component.shoppingList.length).toBe(1);
    expect(component.shoppingList).toEqual(expectedResult);
    expect(component.itemId).toBe(2);
  });

  it ('should add then delete an item in shopping list', () => {
    component.addShoppingItem('Milk');
    component.deleteShoppingItem(1);
    fixture.detectChanges();

    expect(component.shoppingList.length).toBe(0);
    expect(component.shoppingList).toEqual([]);
    expect(component.itemId).toBe(2);
  });

  it ('should initialize the form correctly', () => {
    component.initForm();
    fixture.detectChanges();

    expect(component.shoppingForm).toBeTruthy();
    expect(component.shoppingForm.get('itemName')).toBeTruthy();
  })
});
