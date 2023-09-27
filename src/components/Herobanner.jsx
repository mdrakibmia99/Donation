import { useState } from "react";

const Herobanner = ({SetsearchDonate}) => {
    const [search,setSearch]=useState("")
    
 const handleSearch=(e)=>{
    const smallLetter=e.target.value;
    SetsearchDonate(smallLetter.toLowerCase())

 }

    return (
        <div className=" h-[600px] flex justify-center items-center flex-col ">
            
            <div>
                <h1 className="md:text-5xl text-2xl mb-5">I Grow By Helping People In Need</h1>
                <div className="form-control">
                    <div className="input-group justify-center border-none">
                        <input onChange={handleSearch} type="text" placeholder="Search…" className="input w-[150px] md:w-[300px] input-bordered " />
                        <button className="btn md:px-8 px-2 bg-red-500  hover:bg-red-400 border-none ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Herobanner;