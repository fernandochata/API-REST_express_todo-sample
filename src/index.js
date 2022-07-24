import app from './app.js';
import connectToMongoDB from './databases/db.mongodb.js';

async function main() {

  await connectToMongoDB()

  app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
    console.log(`http://localhost:${app.get('port')}/api/mongodb/`);
    console.log(`http://localhost:${app.get('port')}/api/postgres/`);
  });
}
    
main();