import classes from "./tablePiece.module.css";

function TablePiece(props) {
  return (
    <div style={{ fontSize: props.font + "rem" }} className={classes.grid}>
      test
    </div>
  );
}

export default TablePiece;
