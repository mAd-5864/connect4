function changeTurn() {
    if (turn) {
      arrowPlayer(redArrow, 1);
    } else {
      arrowPlayer(yellowArrow, 2);
    }
    turn = !turn
  }