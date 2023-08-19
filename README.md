


## Run the program Locally

install/run mysql server
database : testdb
table: create table IF NOT EXISTS users(UserID int(11) , Name varchar(40), Login varchar(20), LastLoginTime timestamp, status int(11) )'


cd users-be

node index.js

open http://localhost:4000
open http://localhost:4000/init
open http://localhost:4000/users
open http://localhost:4000/users
       POST 
        {
        "UserID": 1234,
        "Name": "Albert",
        "Login": "abt123"
        }

## Run the program by Docker

optional: run mysql database in docker
docker run --name mysql-docker -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=testdb -d mysql:5.7

Get IPAddress of mysql docker image :
docker inspect --format='{{.NetworkSettings.IPAddress}}' mysql-docker

docker exec -it mysql-docker bash
mysql -uroot -p

show databases;
create database testdb;
use testdb;


docker build -t dineshbehera/users-be:latest .
docker push dineshbehera/users-be:latest   (optional)

docker run -d -p 8000:4000 --name users-be -e DB_HOST=172.17.0.3 -e DB_USER=root -e DB_PASSWORD=root -e DB_NAME=testdb dineshbehera/users-be:latest
 (change the IPAddress of mysql server.)

docker build . -t yourusername/example-node-app

## Run the program by Docker Compose

docker-compose build
docker-compose up -d
or
docker-compose up --build -d  // forces to build the images and make them up

docker-compose ps

Stops and delete the containers. but images are there
docker-compose down

open http://localhost:8000
open http://localhost:8000/init
open http://localhost:8000/users
open http://localhost:8000/users
       POST 
        {
        "UserID": 1234,
        "Name": "Albert",
        "Login": "abt123"
        }

## Run the program by Kubernetes

fullstack-nodejs\ops\k8s>kubectl apply -f .

kubectl -n dev get pods

minikube -n dev service users-be-svc --url

open the browser

## Run the program by helm