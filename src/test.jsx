import {
  Dropdown,
  Button,
  Badge,
  DropdownHeader,
  DropdownItem,
  DropdownDivider,
  Avatar,
} from "flowbite-react";
import { useState } from "react";
import { HiHeart, HiShoppingCart, HiPlus, HiMinus, HiX } from "react-icons/hi";
import {
  useAddToCartMutation,
  useDeleteCartItemMutation,
  useGetCartQuery,
} from "./features/api/cartApi";
import { useNavigate } from "react-router";
import { FaBell } from "react-icons/fa";

const CartComponent = () => {
  const navigate = useNavigate();
  const { data: cart, isLoading } = useGetCartQuery();
  const [addToCart] = useAddToCartMutation();
  const [deleteFromCart] = useDeleteCartItemMutation();

  const totalItems = cart?.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart?.items
    .reduce((sum, item) => sum + item.meal?.price * item.quantity, 0)
    .toFixed(2);
  const increaseQuantity = (id) => {
    addToCart({ mealId: id, quantity: 1 });
  };

  const decreaseQuantity = (id) => {
    addToCart({ mealId: id, quantity: -1 });
  };

  const removeFromCart = (id) => {
    deleteFromCart(id);
  };
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        //  : (
        //   <div>{JSON.stringify(cart.items)}</div>
        // )
        <Dropdown
          dir="rtl"
          label={
            <div className="relative text-gray-700 hover:text-orange-500 cursor-pointer transition-colors duration-200">
              <HiShoppingCart className="text-3xl" />
              <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center rounded-full bg-orange-500 text-xs text-white hover:bg-orange-600 transition-colors duration-200">
                {totalItems}
              </Badge>
            </div>
          }
          arrowIcon={false}
          inline
        >
          <DropdownHeader dir="rtl" className="border-b border-gray-200 w-sm">
            <span className="block text-lg font-semibold text-gray-800">
              عربة التسوق
            </span>
          </DropdownHeader>

          <div
            className={`${
              cart.items.length > 4 ? "max-h-80 overflow-y-auto" : ""
            } px-2`}
          >
            {cart.items.length === 0 ? (
              <DropdownItem
                dir="rtl"
                disabled
                className="hover:bg-gray-50 rounded-lg p-4"
              >
                <span className="block text-sm text-gray-500 text-center py-4">
                  Your cart is empty
                </span>
              </DropdownItem>
            ) : (
              cart.items.map((item) => (
                <DropdownHeader
                  dir="rtl"
                  key={item.meal?._id}
                  className="hover:bg-gray-50 rounded-lg p-3 transition-colors duration-150"
                >
                  <div className="flex items-center w-full gap-3">
                    <Avatar
                      className="flex-shrink-0"
                      img={item.meal?.images[0]}
                      size="lg"
                    />

                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-center">
                        <span className="block text-sm font-medium text-gray-800 truncate">
                          {item.meal?.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.meal?._id)}
                          className="text-gray-400 hover:text-red-500 p-1 rounded-full transition-colors duration-200"
                        >
                          <HiX className="text-lg" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <span className="block text-sm font-semibold text-orange-500">
                          جنيه {item.meal?.price.toFixed(2)}
                        </span>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.meal?._id)}
                            className={`h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
                              item.quantity <= 1
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-gray-100 hover:bg-orange-100 text-orange-500 hover:text-orange-600"
                            }`}
                            disabled={item.quantity <= 1}
                          >
                            <HiMinus className="text-md" />
                          </button>

                          <span className="text-sm font-medium w-5 text-center">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.meal?._id)}
                            className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-100 text-orange-500 hover:text-orange-600 transition-colors duration-200"
                          >
                            <HiPlus className="text-md" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DropdownHeader>
              ))
            )}
          </div>

          <DropdownDivider className="my-1" />

          <DropdownItem
            dir="rtl"
            disabled
            className="hover:bg-transparent px-4 py-3"
          >
            <div className="flex justify-between w-full items-center">
              <span className="text-md font-semibold text-gray-800">
                اجمالي السعر:
              </span>
              <span className="text-lg font-bold text-orange-600">
                {totalPrice}
                جنيه
              </span>
            </div>
          </DropdownItem>

          <DropdownItem className="px-4 pb-4">
            <Button
              onClick={() => navigate("/cart")}
              size="md"
              className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-200 text-white font-medium py-2.5 transition-colors duration-200"
              disabled={cart.items.length === 0}
            >
              عرض السلة
            </Button>
          </DropdownItem>
        </Dropdown>
      )}
    </>
  );
};

export default CartComponent;

export const FavouriteComponent = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const totalItems = favoriteItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalPrice = favoriteItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Dropdown
      label={
        <div className="relative  text-gray-700 hover:text-orange-500 cursor-pointer">
          <FaBell className="text-3xl" />
          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-2xl bg-orange-500 text-xs text-white hover:bg-orange-500">
            {totalItems}
          </Badge>
        </div>
      }
      arrowIcon={false}
      inline
    >
      <DropdownHeader>
        <span className="block text-sm font-medium">اشعارات</span>
      </DropdownHeader>
      {favoriteItems.length === 0 ? (
        <DropdownItem>
          <span className="block text-sm">لا يوجد اشعارات لديك</span>
        </DropdownItem>
      ) : (
        favoriteItems.map((item) => (
          <DropdownItem key={item.id}>
            <div className="flex items-center gap-2">
              <div>
                <span className="block text-sm">{item.name}</span>
                <span className="block text-xs text-gray-500">
                  ${item.price} x {item.quantity}
                </span>
              </div>
            </div>
          </DropdownItem>
        ))
      )}
      <DropdownDivider />

      {favoriteItems.length > 3 && (
        <DropdownItem>
          <Button
            size="sm"
            className="w-full bg-orange-500 hover:bg-orange-600 focus:border-orange-600"
          >
            عرض المفضلة
          </Button>
        </DropdownItem>
      )}
    </Dropdown>
  );
};
