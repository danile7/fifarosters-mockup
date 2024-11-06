type Size = 'sm' | 'md' | 'lg'

export default function ValueHighLighter({value, size = 'md'}: { value: string | number, size?: Size }) {

    if (typeof value === 'string') {
        value = parseFloat(value);
    }

    let bg = "bg-lime-500";

    if (value >= 90 && value <= 100) {
        bg = 'bg-[#0b6700]'
    } else if (value >= 80 && value < 90) {
        bg = 'bg-[#379c37]'
    } else if (value >= 70 && value < 80) {
        bg = "bg-[#eb5c00]"
    } else if (value >= 50 && value < 70) {
        bg = "bg-[#c99b00] bg-opacity-80"
    } else if (value >= 0 && value < 50) {
        bg = 'bg-[#b8160e] bg-opacity-80'
    }

    let sizeVariant = ''

    switch (size) {
        case 'sm' : {
            sizeVariant = 'px-1 py-0'
            break;
        }
        case 'md': {
            sizeVariant = 'px-2 py-1'
            break;
        }
        case 'lg' : {
            sizeVariant = 'px-2 py-1'
            break;
        }
    }

    return <div className="flex justify-start items-center">
        <div className={`text-white font-bold ${sizeVariant} ${bg} rounded`}
             style={{textShadow: '0px 2px 2px rgba(0,0,0,0.5)'}}>
            {value}
        </div>
    </div>
}