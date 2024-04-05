import { formatCurrency, formatDateToLocaleString } from "../helpers";

export default function ExpenseItem({ expense, index }) {
  return (
    <>
      <td className={`w-1/3 pr-5 text-center px-5`}>{expense.name}</td>
      <td className={`w-1/3 pr-5  text-center px-5`}>
        {formatCurrency(expense.amount)}
      </td>
      <td className={`w-1/3 pr-5  text-center px-5`}>
        {formatDateToLocaleString(expense.createdAt)}
      </td>
    </>
  );
}
