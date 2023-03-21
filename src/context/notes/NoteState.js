
import { useState } from "react";
import NoteContext from "./NoteContext";


const Notestate = (props) => {
    const s1 = {
        "name": "amritpal singh",
        "class": "10b"

    }
    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() =>{
            setState({
                "name": "amritpal singh somal majatri",
                "class": "11b"

            })
        },1000)
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}

        </NoteContext.Provider>
    )

}

export default Notestate;