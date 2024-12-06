import express from "express";
import routes from "./src/routes/postsRoutes.js";



// **Observação:** A string de conexão geralmente contém informações como o nome do banco de dados, usuário, senha e host. É recomendável armazená-la em uma variável de ambiente para segurança.

const posts = [
 { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
 { id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/150" },
 { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150"},
];
// Define um array de objetos que representam os posts, inicialmente hardcoded para fins de exemplo.
// **Observação:** Em uma aplicação real, esses dados seriam obtidos do banco de dados.

const app = express();
app.use(express.static("uploads"))
routes(app)
// Cria uma instância do Express, que será o ponto de partida da aplicação.



app.listen(3000, () => {
 console.log("Servidor escutando...");
});
// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto.




