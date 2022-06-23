import React, { useContext, useEffect } from "react";
import "./StockCard.css";
// import bearNakedImg from "../assets/media/images/stock/01.jpg";
// import emerald from "../assets/media/images/stock/02.jpg";
// import kashi from "../assets/media/images/stock/03.jpg";
// import clif_bar from "../assets/media/images/stock/04.jpg";
// import nature_valley from "../assets/media/images/stock/05.jpg";
// import chobani from "../assets/media/images/stock/06.jpg";
import SnackContext from "../context/SnackContext";

const StockCard = () => {
  const { snacksStock, getSnacks } = useContext(SnackContext);

  useEffect(() => {
    getSnacks();
  }, []);
  return (
    <div className="stock_card_container">
      <div className="snak-voting stock_card">
        <h2 className="hdg hdg_2 mix-hdg_dark snack stock_card">
          Currently In Stock
        </h2>
        <h4 className="hdg hdg_4 mix-hdg_dark snack stock_card">
          Here are the snacks that are available in the Nerdery kitchen now.
        </h4>
      </div>
      <div className="stock_card box_container">
        {snacksStock.map((card) => (
          <div className="card_data" key={card.id}>
            <div className="stock_card card_item">
              <div className="stock_card baged">
                <div className="stock_card triangle">
                  <span className="stock_card triangle_number">
                    {card.inStock}
                  </span>
                </div>
              </div>
              <div className="stock_card picturte">
                <img src={`${card.image}`} alt={card.id} />
              </div>
            </div>
            <h6 className="hdg hdg_6 stock_card_description">
              {card.product.slice(0, 20)}
            </h6>
            <span className="hdg stock_card_name">{card.brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockCard;
