import { faPenToSquare, faPhoneFlip, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AddressCard = ({ address }) => {
    return (
        <div className="w-full md:w-1/2 border border-gray-500 rounded-lg p-4 mb-4">
            <div className="flex justify-between mb-4">
                <p>{address.title}</p>
                <div>
                    <FontAwesomeIcon className="me-2" icon={faTrash} />
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            </div>
            <p className="text-gray-500">{address.address}</p>
            <p className="text-gray-500">{address.country}</p>
            <div className="flex items-center mt-2 gap-2">
                <FontAwesomeIcon icon={faPhoneFlip} />
                <p className="text-gray-500"> {address.phone}</p>
            </div>
            <p className="p-2 text-green-600 bg-green-200 inline-block rounded-2xl mt-4">{address.badgeContent}</p>
        </div>
    )
}
export default AddressCard