
// eslint-disable-next-line react/prop-types
const CardDonation = ({data}) => {
    return (
        <div style={{background:data.card_bg}} className={`card w-auto  shadow-xl`}>
            <figure><img src={data?.picture} alt="food" /></figure>
            <div className="card-body">
                <h2 className="">
                    <div
                    style={{background:data.category_bg,color:data.text_button_bg}}
                    className={`badge rounded-md   border-none p-3 font-bold`}>{data.title}</div>
                </h2>
                <p  style={{color:data.text_button_bg}} className="font-bold">{data.category}</p>

            </div>
        </div>
    );
};

export default CardDonation;