"use client";
import { Grid, Container, TextField, Flex, Heading, Text, Button } from '@radix-ui/themes';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function Home() {

	const [containerHeight, setContainerHeight] = useState('h-full');
	useLayoutEffect(() => {
		const handleResize = () => {
			const screenHeight = window.innerHeight;
			const contentHeight = document.documentElement.scrollHeight;
			
			if (contentHeight > screenHeight) {
				setContainerHeight('h-full');
			} else {
				setContainerHeight('h-screen');
			}
		};
		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Grid className={`grid grid-cols-2 drop-shadow-[0_5px_55px_rgba(0,0,0,0.5)]`}>
			<div>
				<Container className={`bg-slate-100 rounded-r-[30px] ${containerHeight}`}>
				<Flex className='flex-col flex-1 ml-16 sm:ml-32'>
						<br></br><br></br>
					<Heading className='text-left'>
							<Image
								src="/logo.svg"
								width={250}
								height={250}
								alt="logo"
							/>
					</Heading><br></br>
					<Heading className='text-left mt-8 text-5xl font-semi-bold'>Welcome Back</Heading>
					<Heading className='text-left mt-16 text-2xl'>Sign in to your Account</Heading><br></br>
					<Text className='pt-48 text-left text-xs'>Email</Text><br></br>
					<TextField.Input type="text" className="w-1/2 rounded-md p-2 outline outline-1 outline-slate-300">
					</TextField.Input><br></br>
					<Text className='pt-48 text-left text-xs'>Password</Text><br></br>
					<TextField.Input className="w-1/2 rounded-md p-2 outline outline-1 outline-slate-300">
					</TextField.Input><br></br>
					<Button className='w-1/2 pt-4 bg-gradient-to-r from-orange-700 to-orange-400 text-white font-semibold py-2 px-4 rounded-lg mt-4 '>
						Sign In
					</Button><br></br>
					<Text className='text-left'><a href="#" className='text-slate-500 hover:underline text-xs'>Forgot your password?</a></Text>
						<br></br>
					<div className='flex flex-col-reverse align-baseline'>
					<Text className='text-left text-sm'>By signing in, you agree to the <a href="#" className='text-orange-700 hover:underline'> Terms of Service</a> and 
							<a href="#" className='text-orange-700 hover:underline'> Privacy Policy</a>.</Text>
					</div><br></br>
					<div className='flex flex-col-reverse place-content-baseline'>
					<Text className='text-left text-sm'>Don't have an account?
						<a href="#" className='text-orange-700 hover:underline'> Sign up</a>.
					</Text>
						</div><br></br>
				</Flex>
			</Container>
			</div>
			<div>
			<Container className='relative'>
				<Flex className='flex-col flex-1'>
					<div className='h-screen w-full flex flex-col text-center place-content-center image-center h-screen absolute inset-y-0 -left-1/3'>
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
