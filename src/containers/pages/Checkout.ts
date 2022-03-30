import { ReduxState } from "../../typings/state";
import Checkout from "../../components/cart/Checkout";
import { connect } from "react-redux";
import { selectCart } from "./../../redux/cart/selectors";
import { selectProducts } from "../../redux/products/selectors";

const mapStateToProps = (state: ReduxState) => {
  return {
    cart: selectCart(state),
    products: selectProducts(state),
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Checkout) as any;
