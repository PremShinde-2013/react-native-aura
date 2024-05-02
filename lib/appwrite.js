import {
	Account,
	Avatars,
	Client,
	Databases,
	ID,
	Query,
	Storage,
} from "react-native-appwrite";
export const appwriteConfig = {
	endpoint: "https://cloud.appwrite.io/v1",
	platform: "com.lazy.aora",
	projectId: "6633aaff0000e4032402",
	databaseId: "6633abd500141c065690",
	userCollectionId: "6633abf40018f8a1dc83",
	videoCollectionId: "6633ac240025b3c4b582",
	storageId: "6633ad790014e43c4e67",
};

const client = new Client();

client
	.setEndpoint(appwriteConfig.endpoint)
	.setProject(appwriteConfig.projectId)
	.setPlatform(appwriteConfig.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// // Register user
// export async function createUser(email, password, username) {
// 	try {
// 		const newAccount = await account.create(
// 			ID.unique(),
// 			email,
// 			password,
// 			username
// 		);

// 		if (!newAccount) throw Error;

// 		const avatarUrl = avatars.getInitials(username);

// 		await signIn(email, password);

// 		const newUser = await databases.createDocument(
// 			appwriteConfig.databaseId,
// 			appwriteConfig.userCollectionId,
// 			ID.unique(),
// 			{
// 				accountId: newAccount.$id,
// 				email: email,
// 				username: username,
// 				avatar: avatarUrl,
// 			}
// 		);

// 		return newUser;
// 	} catch (error) {
// 		throw new Error(error);
// 	}
// }

// // Sign In
// export async function signIn(email, password) {
// 	try {
// 		const session = await account.createEmailSession(email, password);

// 		return session;
// 	} catch (error) {
// 		throw new Error(error);
// 	}
// }

// Register User
account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
	function (response) {
		console.log(response);
	},
	function (error) {
		console.log(error);
	}
);
