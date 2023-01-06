import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';

function isEmpty(value) {
  return value.trim() === '';
}

export default function Checkout({ onCancelClick }) {
  const [
    { nameIsValid, emailIsValid, addressIsValid, cityIsValid },
    setInputValidity,
  ] = useState({
    nameIsValid: null,
    emailIsValid: null,
    addressIsValid: null,
    cityIsValid: null,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid;

    setInputValidity({
      nameIsValid: enteredNameIsValid,
      emailIsValid: enteredEmailIsValid,
      addressIsValid: enteredAddressIsValid,
      cityIsValid: enteredCityIsValid,
    });

    if (!formIsValid) {
      return;
    }

    console.log('submit');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name:
        <Input
          invalid={nameIsValid === false}
          ref={nameInputRef}
          type="text"
          id="name"
        />
        {nameIsValid === false && (
          <ErrorMessage>Name must not be empty</ErrorMessage>
        )}
      </Label>
      <Label htmlFor="email">
        Email:
        <Input
          invalid={emailIsValid === false}
          ref={emailInputRef}
          type="email"
          id="email"
        />
        {emailIsValid === false && (
          <ErrorMessage>Email must not be empty</ErrorMessage>
        )}
      </Label>
      <Label htmlFor="address">
        Address:
        <Input
          invalid={addressIsValid === false}
          ref={addressInputRef}
          type="text"
          id="address"
        />
        {addressIsValid === false && (
          <ErrorMessage>Address must not be empty</ErrorMessage>
        )}
      </Label>
      <Label htmlFor="city">
        City:
        <Input
          invalid={cityIsValid === false}
          ref={cityInputRef}
          type="text"
          id="city"
        />
        {cityIsValid === false && (
          <ErrorMessage>City must not be empty</ErrorMessage>
        )}
      </Label>
      <Buttons>
        <Button moreStyles="font-weight: bold;" type="submit">
          Checkout
        </Button>
        <Button
          onClick={onCancelClick}
          moreStyles="font-weight: bold;"
          type="button"
        >
          Cancel
        </Button>
      </Buttons>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid black;
  ${({ invalid }) =>
    invalid && 'border: 1px solid red; background-color: #ffd7d7;'}
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;

  button {
    width: 50%;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;
