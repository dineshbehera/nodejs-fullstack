


## Run the program in local machine

**Database setup**
- install/run mysql server
- create database : testdb
- create table users : create table IF NOT EXISTS users(UserID int(11) , Name varchar(40), Login varchar(20), LastLoginTime timestamp, status int(11) )'

**Execute the below commands:**
```sh
cd users-be
node index.js
```
**Testing**
GET http://localhost:4000

GET http://localhost:4000/init

GET http://localhost:4000/users

POST http://localhost:4000/users
```
       POST 
        {
        "UserID": 1234,
        "Name": "Albert",
        "Login": "abt123"
        }
```

## Run the program by Docker

**optional(if db not running in docker): run mysql database in docker**
```sh
docker run --name mysql-docker -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=testdb -d mysql:5.7
```

Get IPAddress of mysql docker image and login to mysql container 
```sh
docker inspect --format='{{.NetworkSettings.IPAddress}}' mysql-docker


docker exec -it mysql-docker bash
mysql -uroot -p

show databases;
create database testdb;
use testdb;
```

**Docker build , push & run**
```sh

docker build -t dineshbehera/users-be:latest .
docker push dineshbehera/users-be:latest   (optional)

docker run -d -p 8000:4000 --name users-be -e DB_HOST=172.17.0.3 -e DB_USER=root -e DB_PASSWORD=root -e DB_NAME=testdb dineshbehera/users-be:latest
 (change the IPAddress of mysql server.)

docker build . -t yourusername/example-node-app
```
**Testing**
GET http://localhost:8000

GET http://localhost:8000/init

GET http://localhost:8000/users

POST http://localhost:8000/users
```
       POST 
        {
        "UserID": 1234,
        "Name": "Albert",
        "Login": "abt123"
        }
```

## Run the program by Docker Compose

**Execute the below commands**
```sh
docker-compose build
docker-compose up -d

or
docker-compose up --build -d  // forces to build the images and make them up

docker-compose ps

Stops and delete the containers. but images are there
docker-compose down

```
**Testing**
GET http://localhost:4000

GET http://localhost:4000/init

GET http://localhost:4000/users

POST http://localhost:4000/users
```
       POST 
        {
        "UserID": 1234,
        "Name": "Albert",
        "Login": "abt123"
        }
```
## Run the program by Kubernetes

**Execute below commands:**
```sh
nodejs-fullstack\ops\k8s>kubectl apply -f .

kubectl -n dev get pods
kubectl -n dev get svc
kubectl -n dev get all

minikube -n dev service users-be-svc --url

```

**Testing**
user the above url & port for testing

## Run the program by helm
