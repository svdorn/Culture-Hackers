import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="top-shadow" style={{ position: "absolute", zIndex: "100" }}>
                    <div />
                </div>
                <div className="footer-logo">
                    <Link to="/">
                        <img
                            src="/images/Culture Hackers Blue.png"
                            alt="Culture Hackers"
                            height={70}
                        />
                    </Link>
                </div>
                <div className="footer-button">
                    <Button component={GoToContact} size="large">
                        Contact Us
                    </Button>
                </div>
            </div>
        );
    }
}

const GoToContact = props => <Link to="/contact" {...props} />;

export default Footer;
