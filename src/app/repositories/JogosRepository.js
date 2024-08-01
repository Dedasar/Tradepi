import { consulta } from "../database/conexao.js";

class JogosRepository {
    create(jogo){
        const sql = "INSERT INTO jogos SET ?"
        return consulta(sql, jogo, 'Não foi possível cadastrar')
    }
    
   findAll(){
        const sql = "SELECT * FROM jogos;"
        return consulta(sql, 'Não foi possível localizar')
    }

    findById(id){
        const sql = "SELECT * FROM jogos WHERE id=?;"
        return consulta(sql, id, 'Não foi possível localizar')
    }

    update(jogo, id){
        const sql = "UPDATE jogos SET ? WHERE id=?;"
        return consulta(sql, [jogo, id], 'Não foi possível atualizar')        
    }

    delete(id){
        const sql = "DELETE FROM jogos WHERE id=?;"
        return consulta(sql, id, 'Não foi possível apagar')        
    }
}

export default JogosRepository()
