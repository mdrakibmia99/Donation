import { useContext, useEffect, useState } from "react";
import DonationDetailcart from "../components/donation/DonationDetailcart";
import { DonationContext } from "../context/ContextApi";


const Donation = () => {
    const { loading, donateData } = useContext(DonationContext)
    const [localStarageData, setLocalStorageData] = useState([])
    const [loadingdata, setLoadingdata] = useState(true)
    const [sliceValue, setSliceValue] = useState(4)
    useEffect(() => {
        const storeName = "donate";
        const storedItems = JSON.parse(localStorage.getItem(storeName)) || [];
        setLocalStorageData(storedItems);
        setLoadingdata(false)
    }, [])

    if (loadingdata || loading) {
        return <h1>Loading...</h1>
    }
    const filterValue = donateData.filter(item => localStarageData.includes(item.id));
    

    return (

        <div className="container mx-auto mt-5">

            {filterValue.length === 0 ? <h2 className="text-center text-5xl">No Donation</h2> :
                <>
                    <div className="grid md:grid-cols-2 grid-cols-1  gap-3">
                        {filterValue &&
                            filterValue?.slice(0, sliceValue).map((data, index) => <DonationDetailcart data={data} key={index}></DonationDetailcart>)
                        }

                    </div>

                    <div className="text-center mt-5 ">
                        <button
                            onClick={() => setSliceValue(filterValue.length)}
                            className="bg-green-600 px-5 py-2 rounded-md text-white">See ALL</button>
                    </div>
                </>
            }

        </div>
    );
};

export default Donation;