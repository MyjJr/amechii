docker-compose stop
docker-compose rm -f
docker rmi amechii_backend
docker rmi amechii_frontend
docker volume prune -f