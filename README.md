# Immfly challenge

### Prerequisites

- Node.js > v20 installed

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/felo91/immfly-node-challenge.git
cd immfly-node-challenge
```

Install necessary packages:

```bash
npm i
```

Set up the required environment creating `.env` file in the root dir, then populate it with:

```bash
NODE_ENV=dev
SIMPLE_ARRAY=['your', 'array', 'elements']
```

### Running the Application

Locally: `npm run dev`

Docker:

```bash
docker build -t node-docker .
docker run -p 3000:3000 node-docker
```

You can stop the container with `docker stop <docker_id>`

### Test

To run test suite use `npm run test`

### API Endpoints

1. Country and Code Filter

 - GET /countries
 - Query parameters:
   - filter: Filter results by country name or code (string).
   - order: Order results by VAT percentage (asc or desc).
 - Example request:
   - /countries?filter=and&order=asc

2. Reverse String with Vowels Uppercased

 - GET /reverse/:string
 - URL parameter:
   - string: The string to be reversed and transformed.
 - Example request:
   - /reverse/hello

3. Append to Array

 - GET /append
 - Query parameters:
   - start: String to add at the start of the array.
   - end: String to add at the end of the array.
 - Example request:
   - /append?start=hello&end=bye
