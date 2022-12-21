/* eslint-disable operator-linebreak */
import React, { useMemo, useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  // ADD ITEMS
  if (action.type === 'addItem') {
    const itemMatchIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    const itemMatch = state.items[itemMatchIndex];
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    let updatedItems;

    if (itemMatch) {
      const updatedItem = {
        ...itemMatch,
        amount: itemMatch.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itemMatchIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // REMOVE ITEMS
  if (action.type === 'removeItem') {
    const itemMatchIndex = state.items.findIndex(
      (item) => item.id === action.id,
    );
    const itemMatch = state.items[itemMatchIndex];
    const updatedTotalAmount = state.totalAmount - itemMatch.price;
    let updatedItems;

    if (itemMatch.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...itemMatch,
        amount: itemMatch.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[itemMatchIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
}

export default function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );
  const addItem = (item) => {
    dispatchCartAction({
      type: 'addItem',
      item,
    });
  };

  const removeItem = (id) => {
    dispatchCartAction({
      type: 'removeItem',
      id,
    });
  };

  const cartContext = useMemo(
    () => ({
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem,
      removeItem,
    }),
    [cartState],
  );

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
