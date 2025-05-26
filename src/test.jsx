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
import { HiHeart, HiShoppingCart } from "react-icons/hi";

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 29.99, quantity: 1 },
    { id: 2, name: "Product 2", price: 49.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 19.99, quantity: 1 },
  ]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Dropdown
      label={
        <div className="relative text-gray-700 hover:text-orange-500 cursor-pointer">
          <HiShoppingCart className="text-3xl" />
          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded- bg-orange-500 text-xs text-white hover:bg-orange-500">
            {totalItems}
          </Badge>
        </div>
      }
      arrowIcon={false}
      inline
    >
      <DropdownHeader>
        <span className="block text-sm font-medium">Shopping Cart</span>
      </DropdownHeader>
      {cartItems.length === 0 ? (
        <DropdownItem>
          <span className="block text-sm">Your cart is empty</span>
        </DropdownItem>
      ) : (
        cartItems.map((item) => (
          <DropdownItem key={item.id}>
            <Avatar
              className="me-2"
              img="https://www.themediterraneandish.com/wp-content/uploads/2020/01/foul-mudammas-recipe-6.jpg"
            />

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

      <DropdownItem>
        <div className="flex justify-between w-full">
          <span className="text-sm font-medium">Total:</span>
          <span className="text-sm font-medium">${totalPrice}</span>
        </div>
      </DropdownItem>
      <DropdownItem>
        <Button
          size="sm"
          className="w-full bg-orange-500 hover:bg-orange-600 focus:border-orange-600"
        >
          Checkout
        </Button>
      </DropdownItem>
    </Dropdown>
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
          <HiHeart className="text-3xl" />
          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded- bg-orange-500 text-xs text-white hover:bg-orange-500">
            {totalItems}
          </Badge>
        </div>
      }
      arrowIcon={false}
      inline
    >
      <DropdownHeader>
        <span className="block text-sm font-medium">Favourite</span>
      </DropdownHeader>
      {favoriteItems.length === 0 ? (
        <DropdownItem>
          <span className="block text-sm">Your favourite is empty</span>
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
