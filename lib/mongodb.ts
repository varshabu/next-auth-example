/* eslint-disable @typescript-eslint/no-explicit-any */
// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.DB_URL as string;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

if (!process.env.DB_URL) {
  throw new Error('Please add your Mongo URI to .env.local');
}

// In production mode, it's best to not use a global variable.
const client = new MongoClient(uri, options as MongoClientOptions);
const clientPromise = client.connect();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
