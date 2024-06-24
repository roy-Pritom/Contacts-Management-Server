# Node.js TypeScript Mongoose Application(Contact Management System)

This is a  Node.js application written in TypeScript and using Mongoose for MongoDB 
## Requirements

Before you run locally, ensure that you must have the following requirements:

- Node.js installed
- npm package manager installed
- MongoDB installed and running locally
- typescript installed

## Getting Started

1. **First clone the repository:**

   ```bash
   git clone https://github.com/roy-Pritom/Contacts-Management-Server
   cd change the directory
2. **Install Dependencies:**

   ```bash
   npm install
3. **Configuration(.env):**

   ```bash
   Create a .env file in the root of your project
   DATABASE_URL=Mongodb Uri(username,password)
   PORT=server_port
 
4. **Build the typescript code:**

   ```bash
   npm run build
5. **Run Application(production):**

   ```bash
   npm run start:prod
5. **Run Application(development):**

   ```bash
   npm run start:dev
6. **See code problems(eslint):**

   ```bash
   npm run lint
8. **Api end point:**

   ```bash
   Create a contact
   Endpoint: /api/v1/create-contact
   put appropriate json data

   Get  Filtered contacts.
   Endpoint: /api/v1/contacts?your_query

   Update a Contact (Partial Update with Dynamic Update)
   Endpoint: /api/v1/contacts/:id

   Get Contact by ID
   Endpoint: /api/v1/contacts/:id

   delete Contact by ID
   Endpoint: /api/v1/contacts/:id
   
   
9. **Live link (vercel):**

   Live link: https://contacts-management-server-sigma.vercel.app


   
   


  