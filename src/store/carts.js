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
      this.$cartItems = this.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },

    changeQuantity(item, operand) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == item.id) {
          if (operand === "+") this.cartItems[i].quantity++;
          else if (operand === "-") this.cartItems[i].quantity--;

          break;
        }
      }
      this.$cartItems = this.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },

    getCartItems() {
      if (localStorage.getItem("cartItems")) {
        this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
        console.log("Cart Items :: ", this.cartItems);
      }
    },

    deleteItem(id) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id === id) {
          this.cartItems.splice(i, 1);
          localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
          this.$cartItems = this.cartItems;
          break;
        }
      }
    },
    setToLocalStorage() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      this.$cartItems = this.cartItems;
    },
  },
});
