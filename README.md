# [albanyrvresort.com](https://albanyrvresort.com)

A static generated website hosted on AWS.

## Technologies

- [Nuxt2](https://v2.nuxt.com/)
- [Vue.js](https://vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Amazon S3](https://aws.amazon.com/s3/)
- [Amazon Cloudfront](https://aws.amazon.com/cloudfront/)

## Requirements

- [git](https://git-scm.com/downloads)
- [Node.js 15](https://nodejs.org/download/release/v15.14.0/)
- [AWS CLI](https://aws.amazon.com/cli/)

## Installation

1. Clone the repo
    ```bash
    git clone https://github.com/brandonptucker/albanyrvresort.com
    ```
2. Change into directory
    ```bash
    cd albanyrvresort.com
    ```
3. Install dependencies
    ```bash
    npm install
4. Create `.env` file
    ```bash
    cp .env.example .env
    ```
5. Start local website on http://localhost:3000
    ```bash
    npm run dev
    ```

## Deployment

> **_NOTE:_** You must install and configure AWS CLI before running the `deploy` npm script. Also, you probably want to make sure the environment variables are set properly in the `.env` file.

Generate the static site, copy to S3, and create cloudfront invalidation
```bash
npm run deploy
```