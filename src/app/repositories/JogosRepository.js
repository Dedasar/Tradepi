import conexao from "../database/conexao.js";

class JogosRepository {
    create(jogo){
        const sql = "INSERT INTO jogos SET ?"
        return new Promise((resolve,reject) => {
            conexao.query(sql, jogo, (erro, resultado) => {
                if(erro) return reject ('Não foi possível cadastrar')
                const row = JSON.parse(JSON.stringify(resultado))    
                return resolve(row)
            })
        })
    }
    
   findAll(){
        const sql = "SELECT * FROM jogos;"
        return new Promise((resolve,reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) return reject ('Não foi possível localizar')
                const row = JSON.parse(JSON.stringify(resultado))    
                return resolve(row)
            })
        })
    }

    findById(id){
        const sql = "SELECT * FROM jogos WHERE id=?;"
        return new Promise((resolve,reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject ('Não foi possível localizar')
                const row = JSON.parse(JSON.stringify(resultado))    
                return resolve(row)
            })
        })
    }

    update(jogo, id){
        const sql = "UPDATE jogos SET ? WHERE id=?;"
        return new Promise((resolve,reject) => {
        conexao.query(sql, [jogo, id], (erro, resultado) => {
            if(erro) return reject ('Não foi possível atualizar')
                const row = JSON.parse(JSON.stringify(resultado))    
                return resolve(row)
            })
        })
        
    }

    delete(id){
        const sql = "DELETE FROM jogos WHERE id=?;"
        return new Promise((resolve,reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject ('Não foi possível apagar')
                const row = JSON.parse(JSON.stringify(resultado))    
                return resolve(row)
            })
        })
    }
}

export default JogosRepository()
