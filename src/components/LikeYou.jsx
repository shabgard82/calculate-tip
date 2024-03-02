const LikeYou = ({ percentage1, handlePercentage1 }) => {
  return (
    <div>
      <span>How did you like the service ?</span>
      <select value={percentage1} onChange={handlePercentage1}>
        <option value="0">not good (%0)</option>
        <option value="5">good(%5)</option>
        <option value="10">very good(%10)</option>
        <option value="20">amazing(%20)</option>
      </select>
    </div>
  );
};

export default LikeYou;
