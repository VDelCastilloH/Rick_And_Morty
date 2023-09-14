let myFavorites = [];

function postFav (req, res){
    myFavorites.push(req.body);
    console.log(req.body);
    //console.log(myFavorites);
    res.json(myFavorites);
}

function deleteFav(req, res){
    const id = req.params.id;
    myFavorites = myFavorites.filter(char => char.id !== id);
    res.json(myFavorites);    
}

module.exports = {
    postFav,
    deleteFav
};