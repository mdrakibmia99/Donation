
const DonationDetailcart = ({data}) => {

    console.log(data,'data')
    return (
        <div className="card card-side bg-base-100 shadow-xl ">
        
            <figure><img src={`${data.picture}`} alt="" className=" w-[200px] h-full object-cover" /></figure>
            <div 
            
            style={{background:data.card_bg}}
            className="card-body">
                <h2 className="">
                    <div 
                    style={{background:data.category_bg,color:data.text_button_bg}}
                    className="badge rounded-md border-none p-3">{data.title}</div>
                </h2>
                <p
                 className="text-xl font-bold text-black"
                >{data.description}</p>
                <p style={{color:data.text_button_bg}}>$ {data.price}</p>
                <button 
                style={{background:data.text_button_bg}}
                className=" text-white rounded-md border-none w-fit px-3 py-2"> View Details</button>
            </div>
        </div>
    );
};

export default DonationDetailcart;