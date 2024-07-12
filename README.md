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


## Installation

```bash
$ npm install
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Vardges Mirzakhanyan](https://github.com/Vardges-01)

## License

Nest is [MIT licensed](LICENSE).
