import { useIntl } from "react-intl";
const { formatMessage } = useIntl();
const OptionList = [
  {
    optionText: formatMessage({ id: "list.allMale" }),
    optionValue: "todos"
  },
  {
    optionText: formatMessage({ id: "list.allFemale" }),
    optionValue: "todas"
  }
];

export default OptionList;
