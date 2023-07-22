function PyramidPiece(props) {
  /* function that genrates random string of characters from specific set of characters with length passed as argument */
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

  /* generates three strings using randomLetters */
  var a = randomLetters(props.amount);
  var b = randomLetters(props.amount);
  var c = randomLetters(props.amount);

  return (
    /* creates div with three strings inside spaced with space using style based on passed arguments */
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
