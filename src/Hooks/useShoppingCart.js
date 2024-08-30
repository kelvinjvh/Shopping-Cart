import { useReducer, useEffect } from "react";
import { reducerProductsCar } from "./reducerProductsCar";
import { useState } from "react";

export const useShoppingCart = () => {
  const stateInitial = [];
  const [showModal, setshowModal] = useState(false);

  const init = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
  };

  const [products, dispatch] = useReducer(
    reducerProductsCar,
    stateInitial,
    init
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const totalUnidades = products.reduce(
    (acumulador, product) => acumulador + product.amount,
    0
  );
  const totalVenta = products.reduce(
    (acumulador, product) => (acumulador + product.price) * product.amount,
    0
  );

  const ShowModal = () => {
    setshowModal(!showModal);
  };

  return {
    products,
    dispatch,
    totalUnidades,
    totalVenta,
    ShowModal,
    showModal,
  };
};
