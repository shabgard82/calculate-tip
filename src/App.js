import { useState } from "react";
import Bill from "./components/Bill";
import LikeYou from "./components/LikeYou";
import LikeFriend from "./components/LikeFriend";
import TotalTip from "./components/TotalTip";
import Reset from "./components/Reset";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState("0");
  const [percentage2, setPercentage2] = useState("0");

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  const handleBill = (e) => {
    setBill(Number(e.target.value));
  };

  const handlePercentage1 = (e) => {
    setPercentage1(Number(e.target.value));
  };

  const handlePercentage2 = (e) => {
    setPercentage2(Number(e.target.value));
  };

  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };
  return (
    <div>
      <Bill bill={bill} handleBill={handleBill} />
      <LikeYou
        percentage1={percentage1}
        handlePercentage1={handlePercentage1}
      />
      <LikeFriend
        percentage2={percentage2}
        handlePercentage2={handlePercentage2}
      />
      {bill > 0 && (
        <>
          <TotalTip bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
