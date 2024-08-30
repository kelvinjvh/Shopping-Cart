import { type } from "../Actions/Actions";

export const reducerProductsCar = (initialState, actions) => {
  switch (actions.type) {
    case type.add_product:
      const saerchProduct = initialState.find(
        (product) => product.id === actions.payload.id
      );
      if (!saerchProduct) {
        return [...initialState, { ...actions.payload, amount: 1 }];
      }

    case type.increase_product:
      return initialState.map((product) =>
        product.id === actions.payload.id
          ? { ...product, amount: product.amount + 1 }
          : product
      );
    case type.decrease_product:
      let quantity = initialState.find(
        (product) => product.id === actions.payload.id
      );
      if (quantity.amount > 1)
        return initialState.map((product) =>
          product.id === actions.payload.id
            ? { ...product, amount: product.amount - 1 }
            : product
        );
    case type.delete_product:
      return initialState.filter(
        (product) => product.id !== actions.payload.id
      );
    default:
      return initialState;
  }
};
