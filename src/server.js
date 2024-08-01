import jogosController from "./app/controllers/JogosController.js";
import app from './App';

const app = express()

app.use(express.json())

app.get('/jogos',jogosController.index)
app.get('/jogos',jogosController.show)
app.post('/jogos',jogosController.store)
app.put('/jogos',jogosController.update)
app.delete('/jogos',jogosController.delete)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})

export default app;