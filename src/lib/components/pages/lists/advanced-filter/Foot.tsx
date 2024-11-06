import {Radio} from "@chakra-ui/react";

export default  function Foot(){
    return <div className = "flex flex-col h-full">
            <div className  = "text-page-subtitle pb-4">Foot</div>
            <div className = "grid grid-cols-2">
                <Radio>
                    <span>Right</span>
                </Radio>

                <Radio>
                    <span>Left</span>
                </Radio>
            </div>
        </div>
}