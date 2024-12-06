# 📸 **Instabytes**  
Projeto desenvolvido durante a **Imersão Back-end Alura**, voltado para o aprendizado e implementação de APIs utilizando **Node.js** e integração com a API **Gemini**.

---

## 🚀 **Tecnologias Utilizadas**  
As principais tecnologias e ferramentas usadas neste projeto são:  
- **Node.js**: Plataforma para execução de código JavaScript no servidor.  
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.  
- **Visual Studio Code**: Editor de código utilizado no desenvolvimento.  
- **Postman** e **Thunder Client**: Ferramentas para testar e documentar APIs.  
- **Gemini API**: API utilizada para integração de funcionalidades específicas.  

---

## 🛠️ **Como Configurar e Rodar o Projeto**  

### **1. Clone o Repositório**  
Faça o clone do repositório no seu ambiente local:  
```bash
git clone https://github.com/fernandohtcordeiro/ImersaoDev.git
2. Configure o Ambiente
Na pasta back-end, crie um arquivo .env com as seguintes variáveis de ambiente:

env
Copiar código
STRING_CONEXAO=<Sua string de conexão ao MongoDB>
GEMINI_API_KEY=<Sua chave de acesso à API Gemini>
3. Instale as Dependências
Acesse a pasta back-end e instale as dependências do projeto:

bash
Copiar código
npm install
4. Inicie o Servidor
Execute o servidor em modo de desenvolvimento:

bash
Copiar código
npm run dev
📡 Estrutura do Projeto
plaintext
Copiar código
📁 ImersaoDev
 ├── 📁 back-end
 │    ├── 📁 src
 │    │    ├── 📁 controllers
 │    │    ├── 📁 models
 │    │    ├── 📁 routes
 │    │    └── index.js
 │    ├── 📄 package.json
 │    └── 📄 .env (configuração do ambiente)
 └── 📄 README.md
🧪 Testando a API
Após configurar o projeto, você pode testar os endpoints da API utilizando o Postman ou o Thunder Client no VSCode.

Principais Endpoints:
GET /api/usuarios: Retorna todos os usuários cadastrados.
POST /api/usuarios: Cadastra um novo usuário.
GET /api/usuarios/:id: Retorna um usuário específico pelo ID.
PUT /api/usuarios/:id: Atualiza as informações de um usuário.
DELETE /api/usuarios/:id: Remove um usuário pelo ID.
📌 Objetivos do Projeto
Este projeto faz parte de uma jornada educacional e tem os seguintes objetivos:

Aprender os fundamentos do desenvolvimento back-end.
Implementar APIs RESTful com boas práticas.
Explorar integrações com APIs externas.
Fortalecer o uso de ferramentas como Node.js e MongoDB.
✨ Contribuindo com o Projeto
Contribuições são sempre bem-vindas!

Faça um fork do projeto.
Crie uma nova branch para suas alterações:
bash
Copiar código
git checkout -b minha-feature
Faça o commit das suas alterações:
bash
Copiar código
git commit -m 'Adiciona minha nova feature'
Envie suas alterações para o repositório remoto:
bash
Copiar código
git push origin minha-feature
Abra um pull request para análise.
📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Desenvolvido com 💻 por Fernando Henrique.

perl
Copiar código

Copie e cole esse conteúdo no arquivo `README.md` no seu repositório. Ele está detalhado, completo 
