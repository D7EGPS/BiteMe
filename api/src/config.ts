import 'dotenv/config';

import 'dotenv/config';

const config = {
  //db config,
  HOST_SERVER: process.env.HOST_SERVER ?? 'localhost',
  DB_NAME: process.env.DB_NAME ?? 'bite_me',
  PORT: process.env.PORT || 4000,
  DB_URI: process.env.DB_URI ?? 'mongodb://0.0.0.0:27017/',

  JWT_SECRET: process.env.JWT_SECRET ?? 'secret-token',
};

export default config;
