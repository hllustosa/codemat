export function translateStatus(status) {
  if (status === "solved") {
    return "resolvido";
  } else if (status === "tried") {
    return "tentado";
  } else {
      return status;
  }
}

export function translateCategory(status) {
  status = status.toLowerCase();
  if (status === "programming") {
    return "programação";
  } else if (status === "arithmetic") {
    return "aritmética";
  } else if (status === "combinatorics") {
    return "análise combinatória";
  } else if (status === "financial") {
    return "matemática financeira";
  } else if (status === "functions") {
    return "funções";
  } else if (status === "probability") {
    return "probabilidade";
  } else if (status === "progression") {
    return "progressões";
  } else if (status === "trigonometry") {
    return "trigonometria";
  } else if (status === "unities") {
    return "unidades";
  }
}
