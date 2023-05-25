docker run \
    --name postgres \
    -e POSTGRES_USER=taskmannager
    -e POSTGRES_PASSWORD=password \
    -e POSTGRES_DB=task_mannager \
    -p 5432:5432 \
    -d \
    postgres