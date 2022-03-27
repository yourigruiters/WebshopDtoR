import { ReduxState } from "../../typings/state";
import Shop from "../../components/Shop";
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop) as any;
