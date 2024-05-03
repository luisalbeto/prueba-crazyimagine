import './App.css'
import Layout from './components/Layout'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Navbar from './components/Navbar';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState } from 'react';
import TipCalculator from './components/Calculadora';



function App() {

  {/*Array con las imagenes de la galeria*/}

  const images = [
    {
      original:'https://picsum.photos/id/1080/1000/600',
      thumbnail: 'https://picsum.photos/id/1080/250/150',
    },
    {
      original:'https://picsum.photos/id/1015/1000/600',
      thumbnail: 'https://picsum.photos/id/1015/250/150',
    },
    {
      original:'https://picsum.photos/id/1019/1000/600',
      thumbnail: 'https://picsum.photos/id/1019/250/150',
    },
    
  ];

  return (
    <>
    <Layout>   
      
    <Navbar>

    {/*SI EL USUARIO NO ESTA LOGUEADO*/}

      <SignedOut className='justify-end'>
        <SignInButton className='flex flex-auto justify-center rounded-lg text-black font-bold h-full w-20 bg-white ' />
      </SignedOut>

    {/*SI EL USUARIO SI ESTA LOGUEADO*/}

      <SignedIn>
        <UserButton />
      </SignedIn>


    </Navbar>

    <br></br>



    {/*Galeria de imagenes*/}

    <div style={{width: '70vw', margin: 'auto'}}>
    <ReactImageGallery  items={images} showPlayButton={false}/>
    </div>

    <br></br>

   {/*Calculadora de propinas*/}

    <TipCalculator/>

    

    </Layout>
  
    </>
  )
}

export default App
