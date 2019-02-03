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
    }
    get score()
    {
        return this._score;
    }
}