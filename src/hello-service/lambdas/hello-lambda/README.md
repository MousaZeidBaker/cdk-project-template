# Lambda

## Run Lambda with Docker Compose

start containers

```shell
docker-compose up --build
```

Invoke Lambda

```shell
curl -XPOST "http://localhost:8080/2015-03-31/functions/function/invocations" --data-binary "@events/event.json"
```
