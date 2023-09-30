const { Favorite } = require('../DB_connection');

const postFav = async ( req,res ) => {
    const {id, name, origin, status, image, species, gender} = req.body;

    if(!id || !name || !origin || !status || !image || !species || !gender ) 
        return res.status(401).send("Faltan Datos");
    
    try {
        await Favorite.findOrCreate({where:{id:id,name:name,
            origin:origin,status:status,image:image,
            species:species,gender:gender}});
        const favoritos = await Favorite.findAll();
        //console.log(favoritos);
        res.status(200).json(favoritos);
    } catch (err) {
        res.status(500).json({error : err.message})
    }
}

module.exports = postFav;