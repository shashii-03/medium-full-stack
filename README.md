# Medium Clone Project

Welcome to the Medium Clone Project! This project aims to build a robust and scalable application using the following tech stack:

## Tech Stack

- **Frontend**: React
- **Backend**: Cloudflare Workers
- **Validation**: Zod
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT

## Deployment Strategy

- **CI/CD Pipelines**: Automated builds and tests for smooth and reliable deployments.
- **Cloudflare Deployment**: Leveraging Cloudflare Workers for fast and distributed edge deployments.
- **Database Migrations**: Using Prisma for seamless schema changes and migrations.
- **Scalability**: Designed to scale horizontally with Cloudflare Workers and PostgreSQL's robust features.

## API Endpoints

- **User Signup**: `POST /api/v1/user/signup`
- **User Signin**: `POST /api/v1/user/signin`
- **Create Blog**: `POST /api/v1/blog`
- **Update Blog**: `PUT /api/v1/blog`
- **Get Blog by ID**: `GET /api/v1/blog/:id`
- **Get Bulk Blogs**: `GET /api/v1/blog/bulk`

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/medium-clone.git
   cd medium-clone

   Install dependencies:

2. Install dependencies:
   npm install
# or
yarn install

3. Set up environment variables:
Create a .env file in the root of your project and add your PostgreSQL and JWT configurations:

DATABASE_URL="postgresql://user:password@localhost:5432/yourdatabase"
JWT_SECRET="your_jwt_secret"

4. Run database migrations:

npx prisma migrate dev --name init

Running the Application
1. Start the development server:

 npm run dev
# or
yarn dev


2. Open http://localhost:3000 to view the application in the browser.

Deployment
Deploy the backend to Cloudflare Workers and configure your CI/CD pipelines for automated builds and deployments.

Testing
To test the API endpoints, you can use tools like Postman or cURL. Here are some example requests:

User Signup:


Looking forward to your feedback and insights! Stay tuned for updates!

curl -X POST https://medium.appzoid03.workers.dev/api/v1/user/signup -d '{"email":"test@example.com","password":"password"}' -H "Content-Type: application/json"


License
This project is licensed under the MIT License. See the LICENSE file for details.
