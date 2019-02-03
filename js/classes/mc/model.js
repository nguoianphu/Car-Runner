class Model
{
    constructor()
    {
        this._score = 0;
    }
    set score(val)
    {
        this._score = val;
        console.log("Score Updated")
        emitter.emit(G.SCORE_UPDATED);
    }
    get score()
    {
        return this._score;
    }
}