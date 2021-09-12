# Wishlist
Digital wishlist using react and firebase.

# Running

```bash
sudo apt install npm
npm install react
npm install babel-cli
cd frontend/react/main/ && npm run dev
```

# Docker

```bash
sudo docker build -t wishl .

(add --network=host if hanging)

# Interactive run:
sudo docker run -it --rm -p 3000:3000 wishl

# Background/standalone run:
sudo docker run -d --name wishlist -p 3000:3000 wishl

```
