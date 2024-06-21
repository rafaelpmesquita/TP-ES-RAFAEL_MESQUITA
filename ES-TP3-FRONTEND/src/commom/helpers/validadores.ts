export const campoObrigatorio = (value: string) =>
  value !== '' || 'Campo obrigatório';

export const validacaoCombobox = (value: string) =>
  (value === 'Cadastrar' || value === 'Retirar' || value === 'Atualizar') || 'Selecione Uma Opção Válida';

export const apenasNumeros = (value: string) => {
  const pattern = /^[0123456789]+$/i;
  return (
    pattern.test(value) || value === '' || 'Campo deve conter apenas números.'
  );
};

export const minimo3Caracteres = (value: string) =>
  value.length >= 3 || 'Digite no mínimo 3 caracteres';

export const apenasLetras = (value: string) => {
  const pattern = /^[a-z ãõéáíóúâêîôûç]+$/i;
  return pattern.test(value) || 'Digite apenas letras';
};

export const porcentagem = (value: string) => {
  let valorDigitado: number;
  try {
    valorDigitado = parseInt(value, 10);
  } catch {
    return 'Dígito inválido';
  }
  return (
    (valorDigitado >= 0 && valorDigitado <= 100) || 'Digite um número até 100'
  );
};

export const diferenteDeZero = (value: string) =>
  value !== '0' || 'Digite um número diferente de zero';

export const maiorQue = (value: string, x: number) => {
  let valorDigitado: number;
  try {
    valorDigitado = parseInt(value, 10);
  } catch {
    return 'Dígito inválido';
  }
  return (
    valorDigitado > x || 'Digite um número maior que '.concat(x.toString())
  );
};
