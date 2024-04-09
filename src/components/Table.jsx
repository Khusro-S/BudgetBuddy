import ExpenseItem from "./ExpenseItem";

export default function Table({ expenses }) {
  return (
    <div>
      <table className="w-full">
        <thead className="animate-slideInTop">
          <tr>
            {["Name", "Amount", "Date", "Budget", ""].map((i, index) => (
              <th key={index} className=" px-5 text-xl h-12">
                {i}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense, index) => (
            <tr
              key={expense.id}
              className={
                index % 2 === 0
                  ? `bg-tableGreen animate-slideInRight`
                  : `animate-slideInLeft`
              }
            >
              <ExpenseItem expense={expense} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
