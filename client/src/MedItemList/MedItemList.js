import React, { useState, useEffect } from "react";
import items from "../api/items";
import { Link } from "react-router-dom";

const MedItemList = () => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    items.get(`api/medItem`).then((response) => {
      setAllItems(response.data.data);
    });
  };
  const handleRemove = (id) => {
    console.log(id);
    items.delete(`api/medItem/${id}`).then((response) => {
      window.location.reload(false);
    });
  };

  return (
    <div className="mt3 ph3 pv3 pv4-ns ph4-m ph5-l">
      <div className="flex justify-center">
        <div className="w-90 mr2 tl">
          <div className="w-100">
            <input
              type="text"
              className="w-100 h2"
              name="search"
              placeholder="search by name, model, brand"
              id=""
            />
          </div>
        </div>
        <div className="w-10 mr2 tr">
          <a href="/items/add">
            <img src="./images/plus.svg" className="h2" />
          </a>
        </div>
      </div>
      <div className="w-100 mt4">
        {allItems.map((item) => (
          <div className="mt3" key={item._id} id={item._id}>
            <div className="shadow-3 link flex w-100 mt2 blue justify-between h3">
              <div
                className="w-25"
                style={{
                  background:
                    "url(http://mrmrs.github.io/images/0011.jpg) no-repeat center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="w-25 pa2">
                <h1 className="f6 f5-ns fw6 lh-title black mv0">
                  <Link to={(location) => `/items/book/${item._id}`}>NAME</Link>
                </h1>
                <h2 className="f6 fw4 mt2 mb0 black-60">{item.itemName}</h2>
              </div>
              <div className="w-25 pa2">
                <h1 className="f6 f5-ns fw6 lh-title black mv0">STATUS</h1>
                <p className="f6 fw4 mt2 mb0 black-60">{item.itemStatus}</p>
              </div>
              <div className="w-25 pa2">
                <h1 className="f6 f5-ns fw6 lh-title black mv0">MODEL</h1>
                <p className="f6 fw4 mt2 mb0 black-60">2020</p>
              </div>
              <div className="w-25 pa2">
                <h1 className="f6 f5-ns fw6 lh-title black mv0">BRAND</h1>
                <p className="f6 fw4 mt2 mb0 black-60">{item.itemBrand}</p>
              </div>
              <div className="w-25 pa2 flex justify-end">
                <Link
                  to={(location) => `/items/edit/${item._id}`}
                  className="w-25 pa2 tr"
                >
                  <img src="./images/edit.svg" className="w1" alt="" />
                </Link>
                <a
                  href="#"
                  onClick={() => handleRemove(`${item._id}`)}
                  className="w-25 pa2 tr"
                >
                  <img src="./images/cancel.svg" className="w1" alt="" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedItemList;
