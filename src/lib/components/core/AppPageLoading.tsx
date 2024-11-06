import {Spinner} from "@chakra-ui/react";

export default function AppPageLoading(){
    return <div className="w-full h-full py-32 flex justify-center items-center">
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    </div>
}