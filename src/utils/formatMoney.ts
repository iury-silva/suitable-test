// 30.03 -> R$ 30,03
function formatMoney(amount: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
}

export { formatMoney };
