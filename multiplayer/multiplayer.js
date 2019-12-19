function changeTurn() {
    if (turn) {
      winCheck();
      arrowPlayer(redArrow, 1);
    } else {
      winCheck();
      arrowPlayer(yellowArrow, 2);
    }
    turn = !turn
  }