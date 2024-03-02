const LikeFriend = ({ percentage2, handlePercentage2 }) => {
  return (
    <div>
      <span>How did your friend like the service ?</span>
      <select value={percentage2} onChange={handlePercentage2}>
        <option value="0">not good (%0)</option>
        <option value="5">good(%5)</option>
        <option value="10">very good(%10)</option>
        <option value="20">amazing(%20)</option>
      </select>
    </div>
  );
};

export default LikeFriend;
