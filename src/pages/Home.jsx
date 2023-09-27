import { useContext, useState } from "react";
import CardDonation from "../components/CardDonation";
import Herobanner from "../components/Herobanner";
import { DonationContext } from "../context/ContextApi";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const { donateData } = useContext(DonationContext);
    const [searchDonate, SetsearchDonate] = useState("");
    let filterValue;
    if (searchDonate == "") {
        filterValue = donateData;
    } else {
        filterValue = donateData.filter(item => (item.title.toLowerCase().indexOf(searchDonate) != -1))

    }
    return (
        <div>
            <div>

                <Herobanner SetsearchDonate={SetsearchDonate} />
                <div className="absolute top-0 left-0 right-0 -z-10  h-[600px]">

                    <img src="/images/hero-bg.jpeg " className="w-full h-[600px] object-cover opacity-[10%]" alt="" />
                </div>
            </div>
            {
                filterValue?.length == 0 ? <h1 className="text-5xl text-center">Data Not Found</h1> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto">
                        {
                            filterValue?.map((data) => <Link key={data.id} to={`/detail/donation/${data.id}`}> <CardDonation data={data} /> </Link>)

                        }


                    </div>
            }

            <ToastContainer />

        </div>
    );
};

export default Home;