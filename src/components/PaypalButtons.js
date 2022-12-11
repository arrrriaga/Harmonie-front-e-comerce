import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const PayPalButtons = ({ currency, amount }) => {
  const style = { layout: "vertical" };
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency]);

  return (
    <>
      {isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              console.log("OrderId: ", orderId);
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function(data, actions) {
          //Petición para guardar los datos de la compra y limpiar el carrito
          console.log("data: ", data);
          return actions.order.capture().then(function() {
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};

export default PayPalButtons;
