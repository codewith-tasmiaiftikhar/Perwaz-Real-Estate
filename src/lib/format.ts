export function formatPrice(
  amount: number,
  options?: { monthly?: boolean },
) {
  let label: string;
  if (amount >= 10_000_000) {
    const crore = amount / 10_000_000;
    label = `PKR ${trimNumber(crore)} Crore`;
  } else if (amount >= 100_000) {
    const lakh = amount / 100_000;
    label = `PKR ${trimNumber(lakh)} Lakh`;
  } else {
    label = `PKR ${amount.toLocaleString("en-PK")}`;
  }
  return options?.monthly ? `${label} / month` : label;
}

function trimNumber(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/\.?0+$/, "");
}
