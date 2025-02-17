import type { StoryObj } from "@storybook/react";
import { Stepper } from "../components";
import { StepItem } from "@cg-components/Stepper/Types/types";
declare const meta: {
    title: string;
    component: typeof Stepper;
    tags: string[];
    args: {
        stepItems: StepItem[];
        activeStep: number;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BasicStepper: Story;
export declare const FormStepper: Story;
