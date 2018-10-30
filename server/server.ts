import * as Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', (req, res) => {
    res.send({ message: 'hello world' });
});


fastify.listen(3001, (err, address) => {
  if (err) {
    throw err;
  }
  fastify.log.info(`server listening on ${address}`);
});
