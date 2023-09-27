import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DonationContext } from "../context/ContextApi";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DonationDetailsPage = () => {
    const { id } = useParams();
    const { donateData, loading } = useContext(DonationContext);
    const [load, setLoad] = useState(true)
    const [getDonation, setGetDonation] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        const data = donateData?.find(item => item.id == id);
        setData(data)
        setLoad(false)
    }, [donateData, id])
    if (loading || load) {
        return <h1>Loading...</h1>
    }

    const handleDonate = async (data) => {
        const storeName = "donate";
        const storedItems = await JSON.parse(localStorage.getItem(storeName)) || [];
        await setGetDonation(storedItems);
        const findDonate = await getDonation.includes(data.id)
        console.log(findDonate, storedItems, "finddoneate")
        // const findDonate = getDonation.find(item => item == data.id)
        if (findDonate) {
            toast('Already Donated!!')
        } else {

            const updateDonate = [...storedItems, data.id]
            localStorage.setItem(storeName, JSON.stringify(updateDonate));
            toast("Thanks For your Donation!.Check it From Donation page")
        }


    }
    if (!data) {
        return <h1>Loading...</h1>
    }



    return (
        <div className="container mx-auto  ">
            <div className="relative w-full h-[450px]">
                <img src={data?.picture} className="w-full h-full object-cover" alt="" />
                <div className="absolute  bottom-0  left-0 w-full bg-black opacity-70 h-[80px] ">

                    <button
                        style={{ background: data?.text_button_bg }}
                        onClick={() => handleDonate(data)} className=" mx-5 mt-5 opacity-100 text-white font-bold w-fit px-3 py-2 rounded-md">Donate ${data?.price}
                    </button>
                </div>
            </div>
            <h2 className="my-5 text-5xl">{data?.title}</h2>

            <p className="text-gray-500">{data?.description}</p>
            <ToastContainer />
        </div>
    );
};

export default DonationDetailsPage;