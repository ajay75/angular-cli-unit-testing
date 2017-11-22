import {ShoppingItem} from './shopping-item.model';

describe('ShoppingItem', () => {

  it('should create the object correctly', () => {
    const item = new ShoppingItem(1, 'Milk');
    expect(item).toEqual(new ShoppingItem(1, 'Milk'));
  });

});
