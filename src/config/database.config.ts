export default () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MongoDB URI environment variable is missing');
  }

  return {
    mongoURI: process.env.MONGO_URI,
  };
};
