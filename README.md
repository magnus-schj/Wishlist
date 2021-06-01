# Wishlist
Nå skal det oppdateres!

# Running

```bash
sudo apt install npm
npm install react
npm install babel-cli
cd frontend/react/main/ && npm start
```

# Docker

```bash
sudo docker build -network=host -t wishl .

# Interactive run:
sudo docker run -it --rm -p 3000:3000 wishl

# Background/standalone run:
sudo docker run -d --name wishlist -p 3000:3000 wishl

```
