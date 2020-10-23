export default function validateForm(values, campos) {
  const err = {};

  for (let i = 0; i < campos.length; i++) {
    if (values[campos[i].name].length < campos[i].longMinima) {
      err[campos[i].name] = "Length of " + campos[i].name + " is too short";
    }
    if (values[campos[i].name].length > campos[i].longMaxima) {
      err[campos[i].name] = "Length of " + campos[i].name + " is too long";
    }
  }

  return err;
}
