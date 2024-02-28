# Użyj oficjalnego obrazu Node.js jako bazowego obrazu
FROM node:14

# Ustaw katalog roboczy
WORKDIR /usr/src/app

# Skopiuj pliki package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę plików
COPY . .

# Zbuduj aplikację React
RUN npm run build

# Port, na którym działa aplikacja React
EXPOSE 3000

# Komenda uruchamiająca aplikację
CMD ["npm", "start"]