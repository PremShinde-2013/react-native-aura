import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";

import CustomButtom from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
	const [form, setForm] = useState({ email: "", password: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);
	// Function to update email state
	const handleEmailChange = (text) => {
		setForm({ ...form, email: text });
	};

	// Function to update password state
	const handlePasswordChange = (text) => {
		setForm({ ...form, password: text });
	};

	const submit = () => {};

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center h-[90vh] px-4 my-6 '>
					<Image
						source={images.logo}
						resizeMode='contain'
						className='w-[115px] h-[35px] '
					/>
					<Text className='text-2xl text-white  text-semibold mt-10 font-psemibold '>
						Log in to Aura
					</Text>
					<FormField
						title='Email'
						onChangeText={handleEmailChange} // Pass the onChangeText handler
						value={form.email}
						otherStyles='mt-7'
						keyBoardType='email-address'
					/>
					<FormField
						title='Password'
						onChangeText={handlePasswordChange} // Pass the onChangeText handler
						value={form.password}
						otherStyles='mt-7'
						keyBoardType='password'
					/>

					<CustomButtom
						title='Sign In '
						handlePress={submit}
						containerStyle='mt-7'
						isLoading={isSubmitting}
					/>

					<View className='justify-center pt-5 flex-row gap-2'>
						<Text className='text-lg text-gray-100 font-pregular'>
							Don't have an account?{" "}
						</Text>
						<Link
							href='/sign-up'
							className='text-lg font-psemibold text-secondary-100'
						>
							Sign Up
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
