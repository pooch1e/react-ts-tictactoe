export const Square = ({value, onSqClick}) => {
  return <button className="square" onClick={onSqClick}>{value}</button>
};
