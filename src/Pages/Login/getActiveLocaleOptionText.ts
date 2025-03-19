const getActiveLocalOptionText = (locale: string): string => {
  let optionText = "";

  switch (locale) {
    case "es":
      optionText = "Es";
      break;
    case "ca":
      optionText = "Ca";
      break;
    case "en":
      optionText = "En";
      break;
    case "eu":
      optionText = "Eu";
      break;
    case "mx":
      optionText = "MX";
      break;
    case "it":
      optionText = "It";
      break;
    case "fr":
      optionText = "Fr";
      break;
    case "pt":
      optionText = "Pt";
      break;
    default:
      optionText = "Unknown";
  }

  return optionText;
};

export default getActiveLocalOptionText;
