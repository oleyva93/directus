## 🐰 Introduction


## Installation

```bash
# clone repository
git clone ...

# install dependencies
npm install

# run project
npx directus start
```


## Docker

* Docker Engine `1.12.0+`

## Quick Start using docker-compose

The Docker composer file format uses version `2.1`

```bash
# Start directus
docker-compose up
```

## Quick Start
```bash
# Start mysql
docker run --env MYSQL_ROOT_PASSWORD=password \
           --env MYSQL_DATABASE=directus \
           --env MYSQL_USER=directus \
           --env MYSQL_PASSWORD=directus \
           --name mysql \
           --detach \
           mysql:5.5

# Start directus
docker run --link mysql:mysql \
           --publish 8080:8080 \
           --name directus \
           --detach \
           getdirectus/directus:6.4
```

## Directus Login Credentials

- Host: http://localhost:8080
- Email: **admin@admin.com**
- password: **admin**