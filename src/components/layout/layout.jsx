import { Fragment } from "react";
import MainHeader from "./main-header";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main className="lg:px-32 md:px-20 px-10 mt-6">{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
