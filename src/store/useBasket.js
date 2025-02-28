import { create } from "zustand";

const useBasket = create((set , get)=>({
    items: [],
    invoice : {
        totalprice: 0,
        deliveryCost:0,
    },
    addToBasket: (payload)=>{
        const alreadyExist = get().items.some((_item)=>_item.id === payload.id);
        if (alreadyExist) {
            set((oldState)=>({
                invoice :{
                    totalprice : oldState.invoice.totalprice + payload.price,
                 },
                 items: oldState.items.map((_item)=>{
                    if (_item.id===payload.id) {
                        return{
                        ..._item,
                        quantity: _item.quantity +1
                        }                       
                    }else{
                        return _item;
                    }
                 })
            }))
        }else{
            set((oldState)=>({
                invoice :{
                   totalprice : oldState.invoice.totalprice + payload.price,
                },
                items:[...oldState.items,{...payload, quantity: 1}],
            }))
        }
    },
    removeBasket: (payload)=>{
        const shouldRemove = payload.quantity === 1;
        if (shouldRemove) {
            set((oldState)=>({
                items: oldState.items.filter((_item)=>_item.id !== payload.id),
                invoice:{
                   totalprice: oldState.invoice.totalprice - payload.price,
                } 
            }))
        }else{
            set((oldState)=>({
                invoice :{
                    totalprice : oldState.invoice.totalprice - payload.price,
                 },
                 items: oldState.items.map((_item)=>{
                    if (_item.id===payload.id) {
                        return{
                        ..._item,
                        quantity: _item.quantity -1
                        }                       
                    }else{
                        return _item;
                    }
                 })
            }))
        }
    },
}))

export default useBasket