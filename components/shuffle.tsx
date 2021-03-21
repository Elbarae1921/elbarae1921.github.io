import { useState, useEffect } from "react"

interface ITextObj {
    text: string;
    icon?: string;
}

interface IShuffleProps {
    textObj: ITextObj[];
    duration: number;
}

export default function Shuffle({ textObj, duration }: IShuffleProps) {

    const [current, setCurrent] = useState(textObj[0]);
    const [display, setDisplay] = useState("inline-flex")

    useEffect(() => {
        let i = 0;
        const interval = setInterval(
            () => {
                setDisplay("none");
                if(i === textObj.length) i = 0;
                setCurrent(textObj[i++]);
                setDisplay("inline-flex");
            },
            duration
        );
        return () => clearInterval(interval);
    }, []);
    
    return (
        <span style={{ display: 'inline-flex' }}>
            {
                current.text
            }
            &nbsp;
            {
                current.icon && 
                <i className={current.icon} title={current.icon} style={{ display }}></i>
            }
        </span>
    )
}
