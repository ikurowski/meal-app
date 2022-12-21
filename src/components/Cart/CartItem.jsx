import React from 'react';
import styled from 'styled-components';

export default function CartItem({ item, removeItem, addItem }) {
  function addItemHandler(itemObj) {
    addItem({
      ...itemObj,
      amount: 1,
    });
  }

  function removerItemHandler(id) {
    removeItem(id);
  }

  return (
    <CartItemStyled>
      <div>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <p>Amount: {item.amount}</p>
      </div>
      <Buttons>
        <button
          onClick={() => removerItemHandler(item.id)}
          aria-label="remove item"
          type="button"
        >
          -
        </button>
        <button
          onClick={() => addItemHandler(item)}
          aria-label="add item"
          type="button"
        >
          +
        </button>
      </Buttons>
    </CartItemStyled>
  );
}
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const CartItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`;
