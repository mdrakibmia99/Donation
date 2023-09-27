import { createContext, useState, useEffect } from 'react';
export const DonationContext = createContext();
const DonationData = ({ children }) => {

    const [addDonation, setAddDonation] = useState([])
    const [donateData, setDonateData] = useState(null);
    const [loading,setLoading]=useState(true)
    const allDonation=[]
    const donationInfo = {
        addDonation, setAddDonation, donateData,allDonation,loading


    }
    useEffect(() => {
        fetch("/data/donationData.json")
            .then(res => res.json())
            .then(data => {
                setDonateData(data)
                setLoading(false)
            })

    }, [])


    return (
        <DonationContext.Provider value={donationInfo}>

            {children}
        </DonationContext.Provider>
    )
}

export default DonationData