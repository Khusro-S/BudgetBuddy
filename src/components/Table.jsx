import ExpenseItem from "./ExpenseItem";

export default function Table({ expenses, accentColor, showBudget = true }) {
  return (
    <div>
      <table className="w-full mb-5">
        <thead className="animate-slideInTop">
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (i, index) => (
                <th key={index} className=" px-5 text-xl h-12">
                  {i}
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense, index) => (
            <tr
              key={expense.id}
              className={
                index % 2 === 0
                  ? accentColor
                    ? `bg-tableAccent animate-slideInRight`
                    : `bg-tableGreen animate-slideInRight`
                  : `animate-slideInLeft`
              }
            >
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
