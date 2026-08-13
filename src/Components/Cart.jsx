import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, updateQuantity } from "../Redux/cartSlice";
import { useTranslation } from "react-i18next";
import { ShoppingCart, X } from "lucide-react"; // cart & close icons

const CartPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.realPrice * item.quantity,
    0
  );

  return (
    <>
      {/* Floating Cart Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition z-50 flex items-center"
      >
        <ShoppingCart size={24} />
        {cartItems.length > 0 && (
          <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-xl font-bold text-gray-800">
            {t("your_cart")}
          </h1>
          <button onClick={() => setIsOpen(false)}>
            <X size={22} className="text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        {/* Empty cart */}
        {cartItems.length === 0 ? (
          <div className="p-6 text-center text-gray-600 text-lg flex flex-col items-center justify-center h-full">
            {t("cart_empty")}
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="space-y-4 p-4 max-h-[65vh] overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border p-3 rounded-lg shadow hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-contain rounded"
                    />
                    <div>
                      <h2 className="font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-gray-600">
                        <span className="font-bold">
                          AED {item.realPrice * item.quantity}
                        </span>
                      </p>

                      {/* Quantity selector */}
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity - 1,
                              })
                            )
                          }
                          className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1,
                              })
                            )
                          }
                          className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 font-medium hover:underline"
                  >
                    {t("remove")}
                  </button>
                </div>
              ))}

              <input
                type="text"
                placeholder={t("additional_request") || "Any additional request"}
                className="w-full border border-gray-300 py-2 rounded-md pl-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Total & Actions */}
            <div className="p-4 border-t">
              <div className="flex justify-between items-center font-bold text-gray-800 mb-4">
                <span>{t("total") || "Total"}:</span>
                <span>AED {totalPrice}</span>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  {t("clear_cart")}
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
                  {t("send_order") || "Send Order"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
