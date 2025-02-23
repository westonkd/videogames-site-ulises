const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Videogames',
    description: 'This place has videogames!',
  },
  host: '',
  schemes: [
    'http', 'http'
  ],
};

const outputFile = './routes/swagger-output.json';
const endpointsFiles = ['./index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
