/* eslint-disable no-param-reassign */
/* eslint-disable operator-linebreak */
import React, { useMemo, useReducer, useEffect } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;

  const itemMatchIndex = state.items.findIndex(
    (item) => item.id === action.item.id,
  );

  const itemMatch = state.items[itemMatchIndex];
  let updatedItems;

  // ADD ITEMS
  if (action.type === 'addItem') {
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
    if (itemMatch.amount) {
      updatedItems[itemMatchIndex].remove();
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
