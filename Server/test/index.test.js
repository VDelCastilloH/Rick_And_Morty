const server = require('../src/server');
const session = require('supertest');
const agent = session(server);

describe("Test de Rutas",()=>{
    describe("GET /rickandmorty/character/:id",()=>{
        it("Responde con status: 200", async ()=>{
            const resp = await agent.get('/rickandmorty/character/1');
            return expect(resp.statusCode).toEqual(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const resp = await agent.get('/rickandmorty/character/1');
            return expect(resp.body).toHaveProperty('id'&&'name'&&'species'&&'gender'&&'status'&&'origin'&&'image');
        });
        it('Si hay un error responde con status: 500', async ()=>{
            const resp = await agent.get('/rickandmorty/character/asdasd');
            return expect(resp.statusCode).toEqual(500);
        });
    });
    describe("GET /rickandmorty/login",()=>{
        it("Responde con un {access:true} cuando LOGUIN es CORRECTO",async ()=>{
            const resp = await agent.get("/rickandmorty/login?email=viti@gmail.com&password=Pass123");
            //console.log(resp.body);
            return expect(resp.body).toEqual({access: true});
        });
        it("Responde con un {access:false} cuando LOGUIN es INCORRECTO",async ()=>{
            // const resp = await agent.get("/rickandmorty/login?email=Tukis@chikis&password=Pass123");
            // expect(resp.body).toEqual({access: false});
            const resp = await agent.get("/rickandmorty/login")
            .query({email: "Tukis", password: "Chikis"});
            expect(resp.body).toEqual({access: false})
            return expect(resp.body.access).toBe(false);
        });
    });
    describe("POST /rickandmorty/fav",()=>{
        const Personaje1 = {id: 1, name: "Rick"};
        const Personaje2 = {id: 2, name: "Morty"};

        it("Crea un personaje favorito",async ()=>{
            const resp = await agent.post('/rickandmorty/fav').send(Personaje1);
            expect(resp.body).toBeInstanceOf(Array);
            return expect(resp.body).toContainEqual(Personaje1);   
        });
        it("Devuelve todos los favorito",async ()=>{
            const resp = await agent.post('/rickandmorty/fav').send(Personaje2);
            expect(resp.body).toContainEqual(Personaje1);
            return expect(resp.body).toContainEqual(Personaje2);   
        });
    });
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        const Personaje1 = {id: 1, name: "Rick"};
        const Personaje2 = {id: 2, name: "Morty"};

        beforeEach(async()=>{
            await agent.post('/rickandmorty/fav').send(Personaje1);
            await agent.post('/rickandmorty/fav').send(Personaje2);
        })

        it("Devolver el arreglo sin modificar si ID es invalido",async ()=>{
            const resp = await agent.delete('/rickandmorty/fav/asdasd');
            expect(resp.body).toContainEqual(Personaje1);
            return expect(resp.body).toContainEqual(Personaje2);
        });
        it("EDevuelve el arreglo sin el personaje eliminado",async ()=>{
            const resp = await agent.delete('/rickandmorty/fav/1');
            expect(resp.body).not.toContainEqual(Personaje1);
            return expect(resp.body).toContainEqual(Personaje2);
        });
    });
});