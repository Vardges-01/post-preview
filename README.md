## Description

The Post Creation API allows users to create posts and automatically generate a preview image based on the post's content. The API accepts the title, content, and author of a post, and returns a PNG image with these details.

## Features

- **Create Post**: Submit a title, content, and author to create a new post.
- **Preview Image Generation**: Dynamically generates a preview image containing the post details.
- **Swagger Documentation**: Comprehensive API documentation available for easy integration and testing.

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

## Getting started

```bash
# 1. Clone the repository or click on "Use this template" button.
git clone https://github.com/Vardges-01/post-preview.git

# 2. Enter your newly-cloned folder.
cd post-preview

# 3. Create Environment variables file.
cp .env.example .env
```

## Installation

```bash
$ npm install

```

### Configuration

Before start install PostgreSQL and fill correct configurations in `.env` file

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=post-preview
```

Some helper script to work with database

```bash
# To create new migration file
npm migration:create --name=migration_name

# Generate migration from update of entities
npm migration:generate --name=migration_name

# Run created/generated migrations
npm migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker

If you are familiar with [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose) then you can run built in docker-compose file, which will install and configure database for you.

### Docker installation

Download docker from Official website

- Mac <https://docs.docker.com/docker-for-mac/install/>
- Windows <https://docs.docker.com/docker-for-windows/install/>
- Ubuntu <https://docs.docker.com/install/linux/docker-ce/ubuntu/>

### Docker-compose installation

Download docker from [Official website](https://docs.docker.com/compose/install)

### Run

Open terminal and navigate to project directory and run the following command.

```bash
docker-compose up
```

## API Documentation

The API documentation is available via Swagger. To view the documentation, navigate to http://localhost:3000/documentation in your browser.

## Support

----

## Stay in touch

- Author - [Vardges Mirzakhanyan](https://github.com/Vardges-01)
