import { ReactElement } from "react";
import NavigationMenu from "./components/navigation menu";


export default function LandingPage() {
  return (
    <main className="flex-col min-h-screen bg-white ">
      <NavigationMenu/>
      <div className="">
        <Jumbotron/>
      </div>
      <div className="flex-col">
        <Row color="blue"/>
        <div className="grid grid-cols-12 gap-4 pt-4 px-4 justify-items-center min-h-80">
          <div className="col-start-2 col-span-3 bg-green w-full rounded-lg text-center content-center"><p className="text-7xl text-clear_white">Image</p></div>
          <div className="col-span-4 bg-grey w-full rounded-lg text-center content-center"><p className="text-7xl text-clear_white">Image</p></div>
          <div className="col-end-12 col-span-3 bg-blue w-full rounded-lg text-center content-center"><p className="text-7xl text-clear_white">Image</p></div>
        </div>
        <Row color="green"  flipped={true}/>
        <div className="flex pt-4">
          <img width={1920} height={400} alt="placeholder" src={'https://www.pennington.com/-/media/Project/OneWeb/Pennington/Images/headers/category/DogInGrass-1920x400.jpg?h=400&iar=0&w=1920&hash=85EA71D019634187F7504C98BC015EDA'}/>
        </div>
        <Row color="grey"/>
        <div className="flex pt-4">
          <img width={1920} height={400} alt="placeholder" src={"https://www.knick-international.com/media/3a/02/0d/1719828091/chemistry-plant-utilities-app-gr-xx-1920%20x%20400.webp"}/>
        </div>
      </div>
      <div className="min-h-4 text-end"><p className="pe-4 color">Craeted by Emile</p></div>
    </main>
  );
}

function Row({color, flipped}: {color?: string, flipped?: boolean}) : ReactElement{
    color ??= 'green';
    flipped ??= false;
  
    const imageDivClass = `col-span-3 rounded-lg bg-${color} text-center content-center text-clear_white`;
    const textDivClass = `col-span-7 p-4 bg-${color} min-h-80 rounded-lg text-clear_white`;
  
    if(!flipped){
      return(<div className="grid grid-cols-12 gap-4 px-4 pt-4 pb-0">
          <div className={`col-start-2 ${textDivClass}`}>
            <h2 className="text-2xl font-bold">Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue purus sed molestie ornare. Donec eu pretium eros, at lacinia justo. Fusce in urna ut sapien mattis luctus. Suspendisse eget est et justo pharetra pellentesque. Integer mattis tortor a neque vestibulum, non finibus sapien placerat. Vivamus nibh justo, dapibus id ligula ac, auctor accumsan ipsum. Nullam et elementum urna. Duis ut nunc suscipit, pharetra diam vitae, suscipit ipsum. Phasellus eget nibh eget felis ultricies aliquet.
            <br/>
            <br/>
              In turpis ligula, laoreet at egestas in, varius eget enim. Nulla interdum vestibulum nisl, sit amet maximus magna vulputate et. Nam condimentum lacus quis elit rhoncus mollis vel vel lorem. Maecenas vitae eleifend nunc. Maecenas nunc mauris, dictum vel feugiat eget, lacinia et nunc. Donec suscipit arcu odio, eget ullamcorper justo sodales non. Phasellus placerat eget ante in suscipit. Aliquam id egestas justo. Sed et neque a quam commodo fermentum et nec est. Etiam a lectus vel lacus sodales dictum. Nullam pellentesque urna a tellus iaculis feugiat. Maecenas congue tincidunt diam, sit amet malesuada quam. Nullam et mi at neque tincidunt dignissim. Nulla mauris lorem, pulvinar eu tristique ultrices, consequat id tellus.
            </p>
          </div>
          <div className={imageDivClass}>
            <p className="text-7xl">Image</p>
          </div>
      </div>);
    }
    else{
      return(<div className="grid grid-cols-12 gap-4 px-4 pt-4 pb-0">
        <div className={`col-start-2 ${imageDivClass}`}>
          <p className="text-7xl">Image</p>
        </div>
        <div className={`${textDivClass} col-end-12`}>
          <h2 className="text-2xl font-bold">Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue purus sed molestie ornare. Donec eu pretium eros, at lacinia justo. Fusce in urna ut sapien mattis luctus. Suspendisse eget est et justo pharetra pellentesque. Integer mattis tortor a neque vestibulum, non finibus sapien placerat. Vivamus nibh justo, dapibus id ligula ac, auctor accumsan ipsum. Nullam et elementum urna. Duis ut nunc suscipit, pharetra diam vitae, suscipit ipsum. Phasellus eget nibh eget felis ultricies aliquet.
          <br/>
          <br/>
            In turpis ligula, laoreet at egestas in, varius eget enim. Nulla interdum vestibulum nisl, sit amet maximus magna vulputate et. Nam condimentum lacus quis elit rhoncus mollis vel vel lorem. Maecenas vitae eleifend nunc. Maecenas nunc mauris, dictum vel feugiat eget, lacinia et nunc. Donec suscipit arcu odio, eget ullamcorper justo sodales non. Phasellus placerat eget ante in suscipit. Aliquam id egestas justo. Sed et neque a quam commodo fermentum et nec est. Etiam a lectus vel lacus sodales dictum. Nullam pellentesque urna a tellus iaculis feugiat. Maecenas congue tincidunt diam, sit amet malesuada quam. Nullam et mi at neque tincidunt dignissim. Nulla mauris lorem, pulvinar eu tristique ultrices, consequat id tellus.
          </p>
        </div>
      </div>);
    }
  }
  
  function Jumbotron() : ReactElement{
    // TODO change placeholder image with a panormaic image needs to be 1920x400
    return(<section className="bg-[url('../assets/png/panorama_1.png')] bg-no-repeat">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 font-extrabold tracking-tight leading-none text-brown text-6xl">Elba</h1>
          <div>
            <p className="text-lg text-brown lg:text-xl sm:px-16 lg:px-48">Elba, for all your luxury needs.</p>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center border-transparent text-white rounded-lg bg-brown hover:bg-transparent hover:bg-white hover:text-brown hover:border-brown border">
                  Shop
                  <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center bg-white text-brown rounded-lg border border-brown hover:text-white hover:bg-brown">
                  Learn more
              </a>  
          </div>
      </div>
  </section>);
  }