const { User }= require('../DB_connection');

async function login( req , res ){
    const {email, password} = req.query;

    if( !email || !password ) 
        return res.status(400).send("Faltan datos");

    try {
        const usuario = await User.findOne({where:{email : email}});
        if(!usuario){
            return res.status(404).send("Usuario no encontrado");
        } 
        else{
            if(usuario.password !== password)
                return res.status(403).send("Contraseña incorrecta");
            else
                res.status(200).json({access:true});
        }    
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = login;