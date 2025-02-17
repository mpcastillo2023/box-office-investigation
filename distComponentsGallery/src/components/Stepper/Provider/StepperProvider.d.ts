import React from "react";
type DataStepperContext = {
    /**
     * Object storing the current data input.
     * @param {Record<string, unknown>}
     */
    dataInput: Record<string, unknown>;
    /**
     * Set the data input.
     * @param {React.Dispatch<React.SetStateAction<Record<string, unknown>>>}
     */
    setDataInput: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
    /**
     * Reference to a function that, when called, returns the current values.
     * @param {React.MutableRefObject<(() => object) | null>}
     */
    getValuesRef: React.MutableRefObject<(() => object) | null>;
};
/**
 * The DataStepperContext provides a means to share the data input, step navigation functions, and a reference
 * to get values across components in a stepper. Components within the `DataStepperProvider` can access and
 * modify the data input, define custom functions to be executed on the next step, and use a ref to fetch values.
 *
 * @param {React.Context<DataStepperContext>}
 */
export declare const DataStepperContext: React.Context<DataStepperContext>;
type Props = {
    /**
     * Children components that can consume the values from the context.
     * @param {React.ReactNode}
     */
    children: React.ReactNode;
    /**
     * Object storing the default data input.
     * @param {Record<string, unknown>}
     */
    defaultDataInput?: Record<string, unknown>;
};
/**
 * DataStepperProvider is a context provider component for the DataStepperContext.
 * It maintains the state of the data input, step navigation functions, and a reference
 * to get values. Any child components wrapped by this provider can access and update this shared state.
 *
 * @param {Props} props - Props for the DataStepperProvider component.
 * @returns {JSX.Element}
 */
declare const DataStepperProvider: ({ children, defaultDataInput }: Props) => React.JSX.Element;
export default DataStepperProvider;
