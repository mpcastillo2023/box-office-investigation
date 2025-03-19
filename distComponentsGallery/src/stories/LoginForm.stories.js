/* eslint-disable react/jsx-no-literals */
import * as React from "react";
import { useState } from "react";
import { LoginForm, TextInput, Button } from "@cg-components/index";
const meta = {
    title: "LoginForm",
    component: LoginForm,
    tags: ["autodocs"],
    decorators: [
        (Story, props) => {
            const [isValidForm, setIsValid] = useState(false);
            return (React.createElement(React.Fragment, null,
                React.createElement(Story, { args: {
                        ...props.args,
                        isValid: isValidForm,
                        handleSubmit: async (e, isValid) => {
                            e.preventDefault();
                            if (isValid !== undefined)
                                setIsValid(isValid);
                        }
                    } })));
        }
    ],
    args: {
        children: (React.createElement(React.Fragment, null,
            React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "1rem",
                    maxWidth: "50%"
                } },
                React.createElement(TextInput, null),
                React.createElement(TextInput, null),
                React.createElement(Button, { size: "full", type: "submit", onClick: (e) => e.preventDefault(), variant: "primary" }, "Sign in"))))
    }
};
export default meta;
export const DefaultLoginForm = {
    args: {}
};
export const LoginFormWithHeader = {
    args: {
        formHeader: (React.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "50%",
                margin: "0 auto",
                color: "var(--text-switch-color)"
            } }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem excepturi cupiditate maiores autem reprehenderit ab, repellat pariatur maxime soluta consequuntur."))
    }
};
export const LoginFormWithFooter = {
    args: {
        formFooter: (React.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            } },
            React.createElement("a", { href: "/", target: "_blank", style: {
                    fontSize: "0.8rem",
                    color: "var(--blue-strong-primary)"
                }, rel: "noopener noreferrer" }, "Terms and Conditions")))
    }
};
