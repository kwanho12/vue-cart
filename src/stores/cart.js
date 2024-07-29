import { reactive } from 'vue'
import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', () => {
  const item = reactive([
    {
      id: 1,
      name: 'banana',
      price: 1000,
    },
    {
      id: 2,
      name: 'orange',
      price: 3000,
    },
    {
      id: 3,
      name: 'mango',
      price: 5000,
    },
    {
      id: 4,
      name: 'apple',
      price: 4000,
    }
  ])
  const cartItem = reactive([]);
  const outCart = (id) => {
    const indexToRemove = cartItem.findIndex((v) => v === id);
    if(indexToRemove !== -1) {
      cartItem.splice(indexToRemove, 1);
    }
  };
  return { item, cartItem, outCart };
})
