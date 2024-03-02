const Bill = ({ bill, handleBill }) => {
  return (
    <div>
      <span>How much was the bill?</span>
      <input type="text" value={bill} onChange={handleBill} />
    </div>
  );
};

export default Bill;
