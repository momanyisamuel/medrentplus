import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import item from "../api/items";
import { authService } from "../helpers/auth";

const BookItem = () => {
  const [itemStatus, setitemStatus] = useState("rented");
  const [itemDestinationAdress, setItemDestinationAdress] = useState("");
  const [itemReservePeriod, setItemReservePeriod] = useState("");
  const [itemPaymentMethod, setItemPaymentMethod] = useState("");
  const [itemPaymentAmount, setItemPaymentAmount] = useState("");
  const [itemRentedBy, setItemRentedBy] = useState("");
  const { id } = useParams();
  const userId = authService.currentUserValue.user._id;
  useEffect(() => {
    loadItem();
    setItemRentedBy(userId);
  }, []);
  const onFormSubmit = (event) => {
    event.preventDefault();
    item
      .put(`api/medItem/${id}`, {
        itemStatus,
        itemDestinationAdress,
        itemReservePeriod,
        itemPaymentMethod,
        itemPaymentAmount,
        itemRentedBy,
      })
      .then((result) => {});
    window.location.replace("/items");
  };

  const loadItem = () => {
    item.get("api/medItem/" + id).then((result) => {});
  };

  return (
    <form className="mw5 mw7-ns center pa3 ph5-ns" onSubmit={onFormSubmit}>
      <div className="measure">
        <label htmlFor="name" className="f6 b db mb2">
          Booking Period
        </label>
        <input
          id="name"
          onChange={(event) => setItemReservePeriod(event.target.value)}
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          required
          aria-describedby="name-desc"
        />
      </div>
      <div className="measure">
        <label htmlFor="name" className="f6 b db mb2">
          Destination Address
        </label>
        <input
          id="name"
          onChange={(event) => setItemDestinationAdress(event.target.value)}
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          required
          aria-describedby="name-desc"
        />
      </div>
      <div className="measure">
        <label htmlFor="name" className="f6 b db mb2">
          Payment Method
        </label>
        <input
          id="name"
          onChange={(event) => setItemPaymentMethod(event.target.value)}
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          required
          aria-describedby="name-desc"
        />
      </div>
      <div className="measure">
        <label htmlFor="name" className="f6 b db mb2">
          Payment Amount
        </label>
        <input
          id="name"
          onChange={(event) => setItemPaymentAmount(event.target.value)}
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          required
          aria-describedby="name-desc"
        />
      </div>
      <div className="measure">
        <button
          type="submit"
          className="f6 button-reset link dim ph3 pv2 mb2 dib white bg-black"
        >
          Book Item
        </button>
      </div>
    </form>
  );
};

export default BookItem;
