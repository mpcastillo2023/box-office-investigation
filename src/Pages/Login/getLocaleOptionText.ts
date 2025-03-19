const getLocaleOptionText = (locale: string): string => {
  let optionText = "";

  switch (locale) {
    case "es":
      optionText = "Español"; // Spanish
      break;
    case "ca":
      optionText = "Català"; // Catalan
      break;
    case "en":
      optionText = "English"; // English
      break;
    case "eu":
      optionText = "Euskara"; // Basque
      break;
    case "mx":
      optionText = "MX - Español"; // Mexican Spanish
      break;
    case "it":
      optionText = "Italiano"; // Italian
      break;
    case "fr":
      optionText = "Français"; // French
      break;
    case "pt":
      optionText = "Português"; // Portuguese
      break;
    default:
      optionText = "Unknown";
  }

  return optionText;
};

export default getLocaleOptionText;
