import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig ={
  maxAge: 60 * 60 * 24 * 30, //signed in for 30 days
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    }, 
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    //TODO: add data seeding here
  },
  lists: createSchema({
    //TODO: Schema items go in here
  }), 
  ui: {
    //TODO: change this for roles
    isAccessAllowed: () => true,
  },
  //TODO: Add session values here
});