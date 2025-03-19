import React, { createContext, useRef, useState } from "react";
/**
 * The DataStepperContext provides a means to share the data input, step navigation functions, and a reference
 * to get values across components in a stepper. Components within the `DataStepperProvider` can access and
 * modify the data input, define custom functions to be executed on the next step, and use a ref to fetch values.
 *
 * @param {React.Context<DataStepperContext>}
 */
export const DataStepperContext = createContext({});
/**
 * DataStepperProvider is a context provider component for the DataStepperContext.
 * It maintains the state of the data input, step navigation functions, and a reference
 * to get values. Any child components wrapped by this provider can access and update this shared state.
 *
 * @param {Props} props - Props for the DataStepperProvider component.
 * @returns {JSX.Element}
 */
const DataStepperProvider = ({ children, defaultDataInput = {} }) => {
    const [dataInput, setDataInput] = useState(defaultDataInput);
    // eslint-disable-next-line prefer-const
    const getValuesRef = useRef(null);
    return (React.createElement(DataStepperContext.Provider, { value: {
            dataInput: dataInput || {},
            setDataInput,
            getValuesRef: getValuesRef
        } }, children));
};
export default DataStepperProvider;
