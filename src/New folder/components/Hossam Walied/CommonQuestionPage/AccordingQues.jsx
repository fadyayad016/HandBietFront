import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const AccordingQues = ({ showTitle }) => {

    return (
        <>
            {showTitle && <div className='my-8 text-2xl font-bold ' id="">
                <FontAwesomeIcon className='me-3 p-1 text-amber-500 bg-amber-200' icon={faCartShopping} /> الطلب والتوصيل
            </div>}
            <div className="space-y-4">
                <Accordion>
                    <AccordionPanel>
                        <AccordionTitle className="bg-white hover:bg-gray-50 p-4 rounded-lg shadow cursor-pointer">كيف يمكنني تتبع طلبي؟</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                يمكنك تتبع طلبك من خلال صفحة الحساب الشخصي  طلباتي.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle className="bg-white p-4 rounded-lg shadow cursor-pointer">ما هي مناطق التوصيل المتاحة؟</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                يمكنك تتبع طلبك من خلال صفحة الحساب الشخصي  طلباتي.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle className="bg-white p-4 rounded-lg shadow cursor-pointer">كيف يمكنني تتبع طلبي؟</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                يمكنك تتبع طلبك من خلال صفحة الحساب الشخصي  طلباتي.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle className="bg-white p-4 rounded-lg shadow cursor-pointer">كيف يمكنني تتبع طلبي؟</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                يمكنك تتبع طلبك من خلال صفحة الحساب الشخصي  طلباتي.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>

                </Accordion>
            </div>
        </>
    )
}
export default AccordingQues;