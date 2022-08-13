import type { AppProps } from "next/app";
import "react";
import "../../styles/globals.css";
import PropTypes from "prop-types";
import wrapper from "../redux/store/configureStore";

const App = ({ Component: Page }: AppProps) => {
  return <Page />;
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(App);
