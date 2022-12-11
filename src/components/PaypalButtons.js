import { useEffect, useContext } from "react";
import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";
import { PeliculaContext } from "../context/PeliculaContext";
import { guardarVenta } from "../services";

const PaypalButtons = ({ currency, amount, peliculas }) => {
  const style = { layout: "vertical" };
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const { limpiarCarrito } = useContext(PeliculaContext);

  const ventaHandler = async () => {
    const infoPedido = {
      total: amount,
      productos: peliculas.map((pelicula) => pelicula._id),
    };
    console.log("InfoPedido button: ", infoPedido);
    await guardarVenta(infoPedido);
    limpiarCarrito();
  };

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        onApprove={function (data, actions) {
          //Petición para guardar los datos de la compra y limpiar el carrito

          return actions.order.capture().then(function () {
            ventaHandler();
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};

export default PaypalButtons;
