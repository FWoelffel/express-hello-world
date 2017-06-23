# express-hello-world
Yet another Express "Hello world" project

## Build

```
docker build -t express-hello-world .
```

## Run

```
docker run --rm --publish 3000:3000 --name express-hello-world express-hello-world
```

## Test

```
docker run --rm --publish 3000:3000 --name express-hello-world express-hello-world test
```
