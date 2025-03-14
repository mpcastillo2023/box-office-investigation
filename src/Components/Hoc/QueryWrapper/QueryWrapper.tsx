import { Spinner } from "components-gallery";
import { JSX } from "react";

type Props<T> = {
  status: "error" | "success" | "pending";
  error: unknown;
  data: T | undefined;
  render: (data: T) => JSX.Element | JSX.Element[];
};

function isNotUndefined<T>(object: T | undefined): object is T {
  return typeof object !== "undefined";
}

export default function QueryWrapper<T>(props: Props<T>) {
  const { status, error, data, render } = props;
  if (status === "pending") {
    return <Spinner></Spinner>;
  } else if (status === "error") {
    console.log(error);
  } else if (isNotUndefined(data)) {
    return render(data);
  } else {
    console.log(error);
  }
  return null;
}
