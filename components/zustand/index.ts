"use client"

import produce from 'immer';
import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';

const productStore = (set : any) => ({
    seller: '',
    title: '',
    description: '',
    amount: '',
    quantity: '',
    
    updateSeller : (seller : string) => set({seller: seller}),
    updateTitle : (title : string) => set({title: title}),
    updateDescription : (description : string) => set({description: description}),
    updateAmount : (amount : string) => set({amount: amount}),
    updateQuantity : (quantity : string) => set({quantity: quantity}),
    
})

const log = (config : any) => (set : any, get : any, api : any) =>
  config(
    (...args : any) => {
      console.log(args);
      set(...args);
    },
    get,
    api
  );

  

export const useProductStore = create(
    subscribeWithSelector(log(persist(devtools(productStore), { name: 'productStore' })))
  );
  