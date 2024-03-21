import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.getCartFromLocalStorage());
  private cart: Cart = this.cartSubject.value;
// export class CartService {
//   private cart: Cart = new Cart(); // Initialize cart here
//   private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  getCart(): Cart {
    return this.cart;
  }

  constructor() {
    this.cart = this.getCartFromLocalStorage();
  }



  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) return;

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  // getCartFromLocalStorage(): Cart {
  //   if (typeof localStorage !== 'undefined') {
  //     const cartData = localStorage.getItem('cart');
  //     if (cartData) {
  //       return JSON.parse(cartData);
  //     }
  //   }
  //   return { items: [], totalPrice: 0, totalCount: 0 };
  // }

  getCartFromLocalStorage(): Cart {
    if (typeof localStorage !== 'undefined') {
      const cartData = localStorage.getItem('Cart'); // Corrected case sensitivity
      if (cartData) {
        return JSON.parse(cartData) as Cart; // Cast to Cart type
      }
    }
    return { items: [], totalPrice: 0, totalCount: 0 };
  }


}


