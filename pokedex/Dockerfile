# Use uma imagem oficial do Node.js como a base
FROM node:14-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package.json ./
COPY package-lock.json ./
# COPY yarn.lock ./ # Se você usar yarn

# Instala as dependências do projeto
RUN npm install
# RUN yarn install # Se você usar yarn

# Copia o restante do código da aplicação para o diretório de trabalho
COPY . .

# Compila a aplicação React
RUN npm run build
# RUN yarn build # Se você usar yarn

# Usa uma imagem menor para servir o conteúdo estático
FROM nginx:alpine

# Remove o diretório padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos compilados da etapa anterior para o diretório padrão do nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponha a porta na qual o nginx estará ouvindo
EXPOSE 80

# Comando para rodar o nginx
CMD ["nginx", "-g", "daemon off;"]
