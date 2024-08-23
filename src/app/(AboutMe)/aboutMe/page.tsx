'use client'
import Image from "next/image";
import { useState } from 'react';

function AboutMeDisplay({aboutMeListItems, element, setShowModal}: {aboutMeListItems: Array<AboutMeObject>, element: AboutMeObject, setShowModal:(bool:boolean) => void}) {
    const list = aboutMeListItems.map(item =>  <li className="border-solid border-2 border-sky-500 m-1"> <AboutMeListItem element={item} /> </li> )

    return (
        <div className="">
            <ul className="flex overflow-x-scroll grid-flow-col flow-wrap overflow-x-scroll auto-rows-fr">{list}</ul>
        </div>
    )
} 

class AboutMeObject {
    name: string = '';
    id: string = '';
    description: string = '';
    subjectTitle: string = '';
    skills: string = '';
    achievements: string = '';
    goals: string = '';
    passion: string = '';
    images: string = '';
    icons: string = '';
    associatedInstagram: string = '';
    associatedTiktok: string = '';
    associatedLinkedIn: string = '';
    associatedYoutube: string = '';
    associatedTwitch: string = '';

    public constructor() {
        this.name = '';
        this.id = '-1';
        this.description = '';
        this.subjectTitle = '';
        this.skills = '';
        this.achievements = '';
        this.goals = '';
        this.passion = '';
        this.images = '';
        this.associatedInstagram = '';
        this.associatedTiktok = '';
        this.associatedLinkedIn = '';
        this.associatedYoutube = '';
        this.associatedTwitch = '';
    }
}

function AboutMeListItem({element} : {element : AboutMeObject}) {
    return (
        <div className="">
            <div className=" ">
                    <div className="">
                        <div className="">
                        <h1>{element.subjectTitle}</h1>
                    </div>
                            <div className="">
                                <label>Name</label>
                                <h2 className="justify-center">{element.name}</h2>
                            </div>
                            <div className=""> <p>{element.description}</p></div>
                            <div className=""><p>{element.goals}</p></div>
                            <div className=""><b>{element.skills}</b></div>
                    </div> 
            </div>
        </div>

    )
}

function AboutMeCarouselItem() {

}

function AddItemModal ({setShowModal, setInputValue, inputValue, setAboutMeListItems, aboutMeListItems} : {inputValue : string, setInputValue : (str:string) => void, setShowModal: (bool : boolean) => void, setAboutMeListItems: (arr : Array<AboutMeObject>) => void, aboutMeListItems : Array<AboutMeObject>}) {
    const aboutMeObj = new AboutMeObject();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [subjectTitle, setSubjectTitle] = useState('');
    const [goals, setGoals] = useState('');
    const [skills, setSkills] = useState('');
    function handleSaveModal() {
        aboutMeObj.name = name;
        aboutMeObj.id = id;
        aboutMeObj.description = description;
        aboutMeObj.subjectTitle = subjectTitle;
        aboutMeObj.skills = skills;
        aboutMeObj.goals = goals
        setAboutMeListItems([...aboutMeListItems, aboutMeObj]);
        setShowModal(false);
    }
    return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-amber-500" >
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={()=>setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto overflow-auto text-yellow-400">
                  <p className="my-4  text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                  <div className="flex flex-row">
                        <p>Attribute Name</p>
                        <input
                            className="w-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                            type="text"
                            id="name"
                            onChange={(e)=>setName(e.target.value)}
                            value={name}
                            placeholder="John"
                            required 
                        />
                         <input
                            className="w-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                            type="text"
                            id="id"
                            value={id}
                            onChange={(e)=>setId(e.target.value)}
                            placeholder="identifier"
                            required 
                        />
                           <input
                            className="w-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                            type="text"
                            id="id"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            placeholder="description"
                            required 
                            />

                            <input
                            className="w-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                            type="text"
                            id="id"
                            value={subjectTitle}
                            onChange={(e)=>setSubjectTitle(e.target.value)}
                            placeholder="description"
                            required 
                            />
                                <input
                            className="w-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                            type="text"
                            id="id"
                            value={skills}
                            onChange={(e)=>setSkills(e.target.value)}
                            placeholder="description"
                            required 
                        />
                         <input
                            className="w-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                            type="text"
                            id="id"
                            value={goals}
                            onChange={(e)=>setGoals(e.target.value)}
                            placeholder="description"
                            required 
                        />
                        
                        
                        

                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=> setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>handleSaveModal()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const onAddItemClicked = (doShow:boolean) => { setShowModal(doShow) };
    const onpressMeClicked = (doShow:boolean) => { setShowModal(doShow) };
    const [inputValue, setInputValue] = useState('input value');
    const [element, setElement] = useState({});
    const [aboutMeListItems, setAboutMeListItems] = useState([]); 
    const obj = { name:'firstObj', id:'firstObj', description:'this is my description of the subject', subjectTitle:'About Me subject', images:'', associatedInstagram:'', associatedTiktok:'', associatedLinkedIn:'' }
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Welcome to RC's about me&nbsp;
            <code className="font-mono font-bold">01001000 01000101 01001100 01001100 01001111 </code>
          </p>
          <div className="bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>  
        <div className="flex flex-col m-1">
        <AboutMeDisplay aboutMeListItems={aboutMeListItems} element={element} setShowModal={onpressMeClicked}>
        </AboutMeDisplay>
         {showModal ? 
            <AddItemModal 
                element={element} 
                setElement={setElement}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setShowModal={onAddItemClicked}
                setAboutMeListItems={setAboutMeListItems}
                aboutMeListItems={aboutMeListItems}
            >

            </AddItemModal> : null}
            <button onClick={() => setShowModal(true)}> Press Me</button>
            </div>
      </main>
    );
  }
  