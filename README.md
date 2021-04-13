# Wishlist
Nå skal det oppdateres!

# Running

```bash
sudo apt install npm
npm install react
cd frontend/react/main/ && npm start
```

# Docker

```bash
  sudo docker build -t wishl .

  sudo docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 wishl
```
