import { ReduxState } from "../../typings/state";
import Payment from "../../components/Payment";
import { connect } from "react-redux";
import { selectCart } from "./../../redux/cart/selectors";
import { removeFromCart } from "./../../redux/cart/actions";

const mapStateToProps = (state: ReduxState) => {
  return {
    cart: selectCart(state),
  };
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment) as any;
