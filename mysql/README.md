# Wishlist / mysql

# Initiate a Docker intance with tables and data:

## Start a MySQL instance in Docker:

From https://hub.docker.com/_/mysql :

```bash
# Define dev network:
sudo docker network create wishlist-network
sudo docker run --network wishlist-network -p 3306:3306 --name wishlist-mysql -e MYSQL_ROOT_PASSWORD=mypw -d mysql
```

## Define the database and tables by running the script:

```
sudo docker exec -i wishlist-mysql mysql --password=mypw < mysql-create.sql
sudo docker exec -i wishlist-mysql mysql --password=mypw < mysql-fill.sql

```

