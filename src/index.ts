// Hello Service
import {Application, Router, Response, blue, bold} from './deps.ts';

const port = 6000;

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get('/hallo', ({response}: {response: Response}) => {
    response.body = `U bent ge hallo'd`; 
})

console.log(blue(bold(`De hallo service is klaar om te hallo'en op poort nummer ${port}`)));
await app.listen({port});


