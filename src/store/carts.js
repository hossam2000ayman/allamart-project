import { defineStore } from "pinia";

export const CartsModule = defineStore("CartsModule", {
  //in pinia state act as state + getters
  state: () => ({
    cartItems: [],
  }),
  //in pinia actions act as mutations + actions
  actions: {
    addItem(item) {
      let exists = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == item.id) {
          this.cartItems[i].quantity += item.quantity;
          exists = true;
          break;
        }
      }
      if (!exists) {
        // to make the object not reference with the inputs when it passed to add to cart button
        // you have to serialize (object to string) and then deserialize (string to object) (to make variable have no reference)
        this.cartItems.push(JSON.parse(JSON.stringify(item)));
      }
      //   localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
      this.$cartItems = this.cartItems;
      console.log("Global cartItems :: ", this.$cartItems);
      //   console.log("Local cartItems :: ", this.cartItems);
    },

    getCartItems() {
      if (this.$cartItems.length > 0) {
        this.cartItems = JSON.parse(JSON.stringify(this.$cartItems));
      }
      console.log("Cart Items :: ", this.cartItems);
    },

    deleteItem(id) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id === id) {
          this.cartItems.splice(i, 1);
          this.$cartItems = this.cartItems;
          break;
        }
      }
      console.log("Global Cart Items after delete is :: ", this.$cartItems);
    },
  },
});
