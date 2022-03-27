import { ReduxState } from "../../typings/state";
import Header from "../../components/layout/Header";
import { connect } from "react-redux";
import { selectCartSize } from "../../redux/cart/selectors";

const mapStateToProps = (state: ReduxState) => {
  return {
    cartSize: selectCartSize(state),
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Header) as any;
