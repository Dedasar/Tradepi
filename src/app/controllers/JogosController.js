import JogosRepository from "../repositories/JogosRepository.js";

class JogosController {

    async index(req, res) {
        const row = await JogosRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row =  await JogosRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const row = await JogosRepository.create()
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const jogo = req.body     
        const row = await JogosRepository.update()
        res.json(row)   
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await JogosRepository.delete()
        res.json(row)         
    }
}

export default new JogosController()
