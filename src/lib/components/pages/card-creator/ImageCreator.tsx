import {Button} from "@chakra-ui/react";
import {FaPlus} from 'react-icons/fa'
import {RiErrorWarningFill} from "react-icons/ri";


export default function ImageCreator() {
    return <div className="flex flex-col">
        <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
                <Button fontWeight="light" variant="outline" colorScheme="gray">Show/Hide Form</Button>
                <Button fontWeight="light" colorScheme="blue" leftIcon={<FaPlus/>}>Add Item</Button>
                <Button fontWeight="light" colorScheme="green">Download Image</Button>
            </div>

            <div>
                <Button fontWeight="light" className="text-blue-dark" variant="ghost" colorScheme="blue"
                        leftIcon={<RiErrorWarningFill/>}>
                    Drag anything to move it
                </Button>
            </div>
        </div>

        <div className="flex justify-center py-4">
            <div className="w-[600px] h-[600px] border border-blue-500">

            </div>
        </div>


    </div>
}