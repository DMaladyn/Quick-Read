import classes from "./tablePiece.module.css";

function TablePiece(props) {
  function randomLetters(length) {
    var result = "";
    if (props.letters === "LBig") {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (props.letters === "LSmall") {
      characters = "abcdefghijklmnopqrstuvwxyz";
    } else if (props.letters === "N") {
      characters = "1234567890";
    } else if (props.letters === "BothSmall") {
      characters = "1234567890abcdefghijklmnopqrstuvwxyz";
    } else if (props.letters === "BothBig") {
      characters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (props.letters === "All") {
      characters =
        "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }

    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  var text = randomLetters(props.amount);

  return (
    <div style={{ fontSize: props.font + "rem" }} className={classes.grid}>
      {text}
    </div>
  );
}

export default TablePiece;
