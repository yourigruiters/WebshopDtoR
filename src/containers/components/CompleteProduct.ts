import { ReduxState } from "../../typings/state";
import CompleteProduct from "../../components/products/CompleteProduct";
import { connect } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";
import { selectCart } from "./../../redux/cart/selectors";
import { addToCart } from "./../../redux/cart/actions";

const mapStateToProps = (state: ReduxState) => {
  return {
    products: selectProducts(state),
    cart: selectCart(state),
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompleteProduct) as any;
