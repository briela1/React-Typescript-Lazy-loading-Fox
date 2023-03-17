import Head from 'next/head'
import { useState } from 'react';
import { LazyImage } from '../components/RandomFox'
import type { MouseEventHandler } from 'react';
import { random } from "lodash";
import type { NextPage } from "next";

//random function between 1 and 123
// const random = () => Math.floor(Math.random() * 123) + 1;
const myRandom = () => random(1, 122);

//unique id:
// const generateId = () => Math.random().toString(36).substr(2,9);

// generate simple unique id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};



const Home: NextPage = () => {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItem = {
      id: generateId(),
      url:`https://randomfox.ca/images/${myRandom()}.jpg`,
    };
    setImages([...images, newImageItem]);
  }

  return (
    < div className="pt-10 pb-4 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>
          React con TypeScript
        </title>
        <meta
          name="description"
          content="Un curso en el que iremos paso a paso dominando React con TypeScript para crear un componente genérico para cargar imágenes con lazy loading."
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦊</text></svg>"
        />
      </Head>

      <main className="text-center">
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        React con TypeScript
      </p>
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Componente Lazy Image
      </h3>
      <div className="max-w-xl mx-auto text-xl text-gray-500 leading-7">
        <p className="mt-4">
          Un componente genérico de React para cargar imágenes con lazy loading.
        </p>
        <p className="mt-4">✨✨</p>
        <p className="mt-4">
          Las imágenes agregadas no se descargarán hasta que sean visibles en la
          pantalla
        </p>
        <p className="mt-4">✨✨</p>
      </div>
        <div className="m-4">
        <button onClick={addNewFox} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Add new fox</button> 
       </div>
        {images.map((image, index) => (
          <div key={image.id} className="p-4">
            <LazyImage src={image.url}
              width="320"
              height="auto"
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => {
                console.log("holi!");
              }}     onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}/>
          </div>
        ))}
        
      </main>
      <footer className="text-center mt-auto p-6 text-sm text-gray-500">
        <p>
          Images from{" "}
          <a href="https://randomfox.ca" target="_blank" rel="noreferrer">
            randomfox.ca
          </a>{" "}
          | Made by{" "}
          <a href="https://github.com/briela1">@briela1 🦑</a>
        </p>
      </footer>
    </div>
  )
}

export default Home;