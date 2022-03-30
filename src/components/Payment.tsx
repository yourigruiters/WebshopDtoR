import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartProduct } from "../typings/defaultTypes";

interface IProps {
  cart: CartProduct[];
  removeFromCart: (id: number) => void;
}

const Payment: React.FC<IProps> = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  useEffect(() => {
    cart.forEach((cartProduct) => {
      removeFromCart(cartProduct.productID);
    });
  }, [cart, navigate, removeFromCart]);

  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Thank you, your order has been processed.</h3>
            <p className="grey font15">
              <b>Order: #3817</b> - Some random fake details about your order.
            </p>
            <p className="grey font15">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              culpa cumque laudantium tenetur unde explicabo non quaerat
              architecto corporis, consequatur nam possimus labore hic laborum
              totam vero placeat, atque, nulla in quasi velit adipisci iure.
              Illo soluta ad minus dicta quam delectus quae, accusantium
              consequuntur rem sit architecto at aspernatur, sunt corrupti
              mollitia odio autem, qui saepe molestias itaque fugiat ducimus
              alias! Id, odio asperiores aspernatur eius ipsa blanditiis
              laboriosam, adipisci quod eveniet quae amet laborum corporis saepe
              cumque quo molestiae nam. Nobis illo necessitatibus a. Culpa
              eligendi est beatae, commodi odit sunt numquam! Ea vero esse
              repudiandae aliquam voluptatem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
