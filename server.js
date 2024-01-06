import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import Fastify from 'fastify';
import { fastifySwaggerConfig, fastifySwaggerUiConfig } from './config/swagger.config.js';
const fastify=Fastify({logger:true})

const PORT=5000;
fastify.register(fastifySwagger,fastifySwaggerConfig);
fastify.register(fastifySwaggerUi,fastifySwaggerUiConfig);
const main=async ()=>{
   
        await fastify.listen({
            port:PORT
        },(err)=>{
            if(err) return console.log(err);
            console.log(`server run port ${fastify.server.address().port}`);
        })
    } 

main();