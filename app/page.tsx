"use client";
import { Grid, Container, TextField, Flex, Heading, Text, Button } from '@radix-ui/themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<Grid className='grid grid-cols-2 drop-shadow-[0_5px_55px_rgba(0,0,0,0.5)]'>
			<div>
				<Container className='bg-slate-100 rounded-r-[30px]'>
				<Flex className='flex-col flex-1'>
						<br></br><br></br>
					<Heading className='text-left ml-32'>
							<Image
								src="/logo.svg"
								width={250}
								height={250}
								alt="logo"
							/>
					</Heading><br></br><br></br><br></br><br></br>
					<Heading className='text-left ml-32 mt-8 text-5xl font-bold'>Welcome Back</Heading>
					<Heading className='text-left ml-32 mt-16 text-2xl'>Sign in to your Account</Heading>
					<Text className='pt-48 text-left ml-32 text-xs'>Email</Text><br></br>
					<TextField.Input type="text" className="w-1/2 rounded-md p-2 ml-32 outline outline-1 outline-slate-300">
					</TextField.Input><br></br>
					<Text className='pt-48 text-left ml-32 text-xs'>Password</Text><br></br>
					<TextField.Input className="w-1/2 rounded-md p-2 ml-32 outline outline-1 outline-slate-300">
					</TextField.Input><br></br>
					<Button className='w-1/2 pt-4 bg-gradient-to-r from-orange-700 to-orange-400 text-white font-semibold py-2 px-4 rounded-lg mt-4 ml-32'>
						Sign In
					</Button><br></br>
					<Text className='text-left ml-32'><a href="#" className='text-slate-500 hover:underline text-xs'>Forgot your password?</a></Text><br></br>
					<Text className='text-left ml-32'>By signing in, you agree to the <a href="#" className='text-orange-700 hover:underline'> Terms of Service</a> and 
							<a href="#" className='text-orange-700 hover:underline'> Privacy Policy</a>.</Text><br></br><br></br><br></br><br></br>
					<Text className='text-left ml-32'>Don't have an account?
						<a href="#" className='text-orange-700 hover:underline'> Sign up</a>.
						</Text><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
				</Flex>
			</Container>
			</div>
			<div>
			<Container className='relative'>
				<Flex className='flex-col flex-1'>
					<div className='h-screen w-full flex flex-col text-center place-content-center image-center h-screen absolute inset-y-0 left-0'>
						<Image
							src="/computer.png"
							width={5000}
							height={5000}
							alt="Computer"
							/>
					</div>
				</Flex>
			</Container>
			</div>

			
		</Grid>
	);
}
