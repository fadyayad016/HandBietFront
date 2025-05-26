import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddressCard from './AddressCard'

const AddressSetting = () => {
    const AddressSettingArr = [
        {
            title: "المنزل",
            address: "123 شارع الملك فهد الرياض 1234",
            country: "المملكة العربية السعودية",
            phone: "+0123456789",
            badgeContent: "العنوان الاساسي",
        },
        {
            title: "العمل",
            address: "456 شارع العليا. الرياض 67890",
            country: "المملكة العربية السعودية",
            phone: "+0987654321",
            badgeContent: "تعين كعنوان اساسي",
        }
    ]
    return (
        <>
            <div className="bg-white p-4 rounded-xl shadow-md my-4">
                <div className=" flex justify-between items-center mb-8">
                    <p className="font-bold mb-4">عناويني</p>
                    <button className="btn px-3 py-2 bg-[#F97316] rounded-2xl text-white">
                        <FontAwesomeIcon className="me-2" icon={faPlus} />
                        اضافة عنوان جديد
                    </button>
                </div>
                <div className="w-full mb-4 md:flex md:gap-4">



                    {
                        AddressSettingArr.map((address, index) => (
                            <AddressCard key={index} address={address} />
                        ))
                    }



                </div>


            </div>

        </>
    )
}
export default AddressSetting;