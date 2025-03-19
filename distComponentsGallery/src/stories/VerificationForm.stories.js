/* eslint-disable react/jsx-no-literals */
import * as React from "react";
import { useState } from "react";
import { Button, VerificationForm, VerificationInput } from "@cg-components/index";
const meta = {
    title: "VerificationForm",
    component: VerificationForm,
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
            React.createElement("div", null,
                React.createElement("div", { style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(50px, 50px))",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2rem",
                        width: "100%",
                        maxWidth: "1720px"
                    } },
                    React.createElement(VerificationInput, null),
                    React.createElement(VerificationInput, null),
                    React.createElement(VerificationInput, null),
                    React.createElement(VerificationInput, null)),
                React.createElement(Button, { size: "full", type: "submit", onClick: (e) => e.preventDefault(), variant: "primary" }, "Sign in"))))
    }
};
export default meta;
export const DefaultLoginForm = {
    args: {}
};
// export const LoginFormWithHeader: Story = {
//   args: {
//     formHeader: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           width: "50%",
//           margin: "0 auto"
//         }}
//       >
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
//         excepturi cupiditate maiores autem reprehenderit ab, repellat pariatur
//         maxime soluta consequuntur.
//       </div>
//     )
//   }
// };
// export const LoginFormWithFooter: Story = {
//   args: {
//     formFooter: (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       >
//         <a
//           href="/"
//           target="_blank"
//           style={{
//             fontSize: "0.8rem"
//           }}
//           rel="noopener noreferrer"
//         >
//           Terms and Conditions
//         </a>
//       </div>
//     )
//   }
// };
