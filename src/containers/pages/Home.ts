import { ReduxState } from "../../typings/state";
import Home from "../../components/Home";
import { connect } from "react-redux";
import { selectRandomProduct } from "../../redux/products/selectors";
import { selectCart } from "./../../redux/cart/selectors";
import { addToCart } from "./../../redux/cart/actions";

const mapStateToProps = (state: ReduxState) => {
  return {
    randomProduct: selectRandomProduct(state),
    cart: selectCart(state),
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home) as any;
