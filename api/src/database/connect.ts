import { connect } from 'mongoose';
import config from '../config';

const dbConnect = async () => {
  await connect(config.HOST_SERVER);
};

export default dbConnect;
