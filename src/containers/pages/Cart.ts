import { ReduxState } from "../../typings/state";
import Cart from "../../components/cart/Cart";
import { connect } from "react-redux";
import { selectCart } from "./../../redux/cart/selectors";
import {
  changeProductAmount,
  removeFromCart,
} from "./../../redux/cart/actions";
import { selectProducts } from "../../redux/products/selectors";

const mapStateToProps = (state: ReduxState) => {
  return {
    cart: selectCart(state),
    products: selectProducts(state),
  };
};

const mapDispatchToProps = {
  changeProductAmount,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart) as any;
