import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./Pages.css";

class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        message: ""
    };

    handleSubmit = () => {
        document.getElementById("form-contact").submit();
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (
            <div className="container">
                <div className="first-frame-container contact-first-frame">
                    <h1 className="header">Contact Us</h1>
                </div>
                <div className="contact-form">
                    <form
                        action="https://dislack.com/send/5cf04b489b64665469f19e8c"
                        method="post"
                        id="form-contact"
                    >
                        <TextField
                            id="outlined-with-placeholder"
                            className="text-field"
                            label="Name"
                            variant="outlined"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange("name")}
                        />
                        <TextField
                            id="outlined-with-placeholder"
                            className="text-field"
                            label="Email"
                            type="email"
                            name="email"
                            variant="outlined"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                        <TextField
                            id="outlined-with-placeholder"
                            className="text-field-multiline"
                            rows="4"
                            label="Message"
                            type="text"
                            name="message"
                            variant="outlined"
                            multiline
                            value={this.state.message}
                            onChange={this.handleChange("message")}
                        />
                        <div className="form-button-container">
                            <Button
                                className="form-button"
                                onClick={this.handleSubmit}
                                size="large"
                            >
                                Send
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
