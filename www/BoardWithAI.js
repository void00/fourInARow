class BoardWithAI extends Board {

  constructor(game, AIcolor) {
    super(game);
    this.AI = new SimpleAI(this, AIcolor);
    this.AI.makeMove();
  }

  async makeMove(column, AIplays) {
    if (this.playInProgress) { return; }
    if (this.currentPlayer === this.AI.me && !AIplays) { return; }
    let result = await super.makeMove(column);
    await this.AI.makeMove();
    return result;
  }

}