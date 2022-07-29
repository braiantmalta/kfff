export const regexPatterns = {
  onlyNumbers: /[0-9]/,
  RegExNumber: /[^0-9]/g,
  RegExCharacter: /^[a-zA-Z]$/,
  RegExCurrency: /^(\d+(?:[.,]\d{0,2})?)$/,
  RegExCpf: /^[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}$/,
  RegExCnpj: /^[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{4}[0-9]{2}$/,
  RegExCpfOrCnpj: /^d{2}d{3}d{3}d{4}d{2}|d{3}d{3}d{3}d{2}$/,
  RegExUnmask: /\W/g,
  RegExTrimSpaces: /^[s]*(.*?)[s]*$/,
  RegExRemoveDot: /\./g,
};
