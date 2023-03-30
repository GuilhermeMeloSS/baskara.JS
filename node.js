// Pedimos os valores de a, b e c para o usuário
const a = prompt("Digite o valor de a:");
const b = prompt("Digite o valor de b:");
const c = prompt("Digite o valor de c:");

// Convertemos as entradas para números
const numA = parseFloat(a);
const numB = parseFloat(b);
const numC = parseFloat(c);

// Calculamos o discriminante
const discriminante = numB**2 - 4*numA*numC;

// Verificamos se a equação tem raízes reais
if (discriminante < 0) {
  console.log("A equação não tem raízes reais");
} else {
  // Calculamos as raízes
  const x1 = (-numB + Math.sqrt(discriminante)) / (2*numA);
  const x2 = (-numB - Math.sqrt(discriminante)) / (2*numA);

  // Imprimimos as raízes
  console.log(`As raízes são: x1 = ${x1} e x2 = ${x2}`);
}
