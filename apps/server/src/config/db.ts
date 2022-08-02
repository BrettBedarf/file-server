import mongoose, { Mongoose } from 'mongoose';

// Note we don't want to import from dotenv because we won't have control over
// uri for testing etc

/** connect to db and wait for verification succcess
 *
 */
const connectDb = async () => {
	try {
		const connString =
			process.env.MONGO_URI ?? 'mongodb://localhost:27017/file-server';
		if (!connString) {
			throw new Error(
				'No mongo uri provided. Make sure "MONGO_URI" is injected as environment variable, '
			);
		}
		await mongoose.connect(connString);
		console.log(`MongoDB Connected: ${mongoose.connection.host}`);
	} catch (e) {
		console.log(`MongoDB connection error:\n${e}`);
		//exit app with failure
		process.exit(1);
	}
};

export default connectDb;
