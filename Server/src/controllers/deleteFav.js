const { Favorite } = require('../DB_connection');

async function deleteFav( req, res){
    const { id } = req.params;
    try {
        console.log(id);
        await Favorite.destroy({where: {id:id}});
        const favoritos = await Favorite.findAll();
        res.status(200).json(favoritos);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = deleteFav;