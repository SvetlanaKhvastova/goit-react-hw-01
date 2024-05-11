import css from "./TransactionHistory.module.css";
import TableRow from "../TableRow/TableRow";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            const { type, amount, currency } = item;
            return (
              <TableRow key={item.id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </TableRow>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
