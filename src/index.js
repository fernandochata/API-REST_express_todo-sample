import app from './app.js';
import connectToMongoDB from './databases/databases.js';

async function main() {

  await connectToMongoDB()

  app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });
}
    
main();