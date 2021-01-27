import React, { useState } from "react";
import item from "../api/items";
import Navigation from "../Navigation/Navigation";

const NewMedItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemModel, setItemModel] = useState("");
  const [itemBrand, setItemBrand] = useState("");
  const [itemInfo, setItemInfo] = useState("");
  const [itemStatus, setitemStatus] = useState("available");
  const [itemCategory, setItemCategory] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    item
      .post(`api/medItem`, {
        itemName,
        itemModel,
        itemBrand,
        itemInfo,
        itemStatus,
        itemCategory,
      })
      .then((result) => {
        console.log(result);
      });
    window.location.replace("/items");
  };

  return (
    <>
      <form className="mw5 mw7-ns center pa3 ph5-ns" onSubmit={onFormSubmit}>
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">
            Item Name
          </label>
          <input
            id="name"
            onChange={(event) => setItemName(event.target.value)}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            required
            aria-describedby="name-desc"
          />
        </div>
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">
            Item Model
          </label>
          <input
            id="name"
            onChange={(event) => setItemModel(event.target.value)}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            required
            aria-describedby="name-desc"
          />
        </div>
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">
            Item Brand
          </label>
          <input
            id="name"
            onChange={(event) => setItemBrand(event.target.value)}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
          />
        </div>
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">
            Item Info
          </label>
          <textarea
            id="name"
            onChange={(event) => setItemInfo(event.target.value)}
            className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
            type="text"
            aria-describedby="name-desc"
          ></textarea>
        </div>
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">
            Item Category
          </label>
          <input
            id="name"
            onChange={(event) => setItemCategory(event.target.value)}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
          />
        </div>
        <div className="measure">
          <button
            type="submit"
            className="f6 button-reset link dim ph3 pv2 mb2 dib white bg-black"
          >
            Create Item
          </button>
        </div>
      </form>
    </>
  );
};

export default NewMedItem;
