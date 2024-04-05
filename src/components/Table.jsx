import ExpenseItem from "./ExpenseItem";

export default function Table({ expenses }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date"].map((i, index) => (
              <th key={index} className="w-1/3 px-5">
                {i}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense, index) => (
            <tr key={expense.id} className={index % 2 === 0 && `bg-tableGreen`}>
              <ExpenseItem
                expense={expense}
                index={index % 2 === 0 && "text-white"}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
