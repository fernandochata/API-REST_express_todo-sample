import app from './app.js';
import connectToMongoDB from './databases/db.mongodb.js';

async function main() {

  await connectToMongoDB()

  app.listen(app.get('PORT'), () => {
    console.log(`Server on port ${app.get('PORT')}`)
    console.log(`http://localhost:${app.get('PORT')}/api/mongodb/`);
    console.log(`http://localhost:${app.get('PORT')}/api/postgres/`);
  });
}
    
main();