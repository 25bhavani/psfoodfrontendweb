// import { CartItem } from "./CartItem";
//
// export class Cart{
//   items:CartItem[] = [];
//   totalPrice:number = 0;
//   totalCount:number = 0;
//   next: any;
// }


// Cart.ts
import { CartItem} from "./CartItem";

export class Cart {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;

  constructor() {
    this.items = [];
    this.totalPrice = 0;
    this.totalCount = 0;
  }
}
