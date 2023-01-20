import express from 'express';
import bodyParser from 'body-parser';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// import { version } from '../../package.json';
const version = "1.0.0";
const url = 'http://localhost:5000';

const options = {
    definition: {
      info: {
        contact: {
          email: 'susantaadak513@gmail.com',
          name: 'Susanta Adak',
        },
        description: 'Custom structure to build an REST API using Express.js',
        license: {
          name: 'All Rights Reserved',
        },
        title: 'Custom structure to build an REST API using Express.js',
        version,
      },
      openapi: '3.0.0',
      produces: ['application/json'],
      servers: [{ url }],
      tags: [
        {
          description: 'Student',
          name: 'Values',
        },
      ],
      'x-tagGroups': [
        {
          name: 'General',
          tags: ['Values'],
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            bearerFormat: 'JWT',
            scheme: 'bearer',
            type: 'http',
          },
        },
      },
      security: [
        {
            bearerAuth: [],
        }
      ],
    },
    apis: ["src/routes/*.js"], //****absulate path is require */
  };
  
  const specs = swaggerJsdoc(options);
  console.log(specs);
  function swaggerDocs(app, port){
    //swagger page
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs)
      );
    //Docs in JSON format
    app.get('docs.json', (req, res)=>{
        res.setHeader('content-type', 'application/json');
        res.send(specs);
    })
    console.log(`Docs available at http://localhost:${port}/api-docs`);
  }

  export default swaggerDocs;