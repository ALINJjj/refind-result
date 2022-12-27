import React from "react";
import Footer from "../shared/footer/footer";
import Header from "../shared/heading/header";

const Basic = (props) => {
    return <React.Fragment>
        <Header/>
        {props.children}
        <Footer/>
    </React.Fragment>
}
export default Basic;