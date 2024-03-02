const TotalTip = ({ bill, tip }) => {
  return (
    <div>
      <h1>
        you pay ${bill + tip}(${bill}+ ${tip}tip)
      </h1>
    </div>
  );
};

export default TotalTip;
