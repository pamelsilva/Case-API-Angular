# Base image
FROM node:14-alpine

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todos os arquivos do projeto para o diretório de trabalho do contêiner
COPY . .

# Compilar o projeto
RUN npm run build

# Expor a porta que o Angular está usando (geralmente 4200 por padrão)
EXPOSE 4200

# Comando para iniciar o servidor Angular
CMD [ "npm", "start" ]
