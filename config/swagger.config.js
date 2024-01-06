export const fastifySwaggerConfig={
    swagger:{
        info:{
            title:"fastify swagger ",
            description:"This is a fastify swagger",
            version:'1.0.0'
        },
        tags:[{name:"products",description:'products routes'}]
    }
}
export const fastifySwaggerUiConfig={
        prefix:'/api-doc',
        exposeRoute:true
    
}