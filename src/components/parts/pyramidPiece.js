function PyramidPiece(props) {
  function randomLetters(length) {
    var result = "";
    if (props.letters) {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      var characters = "1234567890";
    }
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  var a = randomLetters(props.amount);
  var b = randomLetters(props.amount);
  var c = randomLetters(props.amount);

  return (
    <div
      style={{
        wordSpacing: props.space * props.loop + "rem",
        lineHeight: props.line,
        fontSize: props.font + "rem",
        fontFamily: "monospace",
      }}
    >
      {a}&nbsp;
      {b}&nbsp;
      {c}
    </div>
  );
}

export default PyramidPiece;
