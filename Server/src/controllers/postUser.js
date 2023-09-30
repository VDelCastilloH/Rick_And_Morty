const { User } = require('../DB_connection');

async function postUser (req,res){
    const{ email, password } = req.body;

    if(!email || !password) 
        return res.status(400).send("Faltan Datos");

    try {
        const [usuario , creado] = await User.findOrCreate({where:{email:email , password:password}});
        res.status(201).json(usuario);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = postUser;