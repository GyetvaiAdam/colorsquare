import { useState} from "react";
import BoxComponents from "./BoxComponents";

type BoxType={
    id: string;
    bgcolor: string;
    bgcount: number;
    activebox: boolean;
}

const initialstate: BoxType[]=[
    {id: "a", bgcolor: "rgb(200,200,200)",bgcount: 0, activebox:false},
    {id: "b", bgcolor: "rgb(200,200,200)",bgcount: 0, activebox:false},
    {id: "c", bgcolor: "rgb(200,200,200)",bgcount: 0, activebox:false},
    
]

const randomNum = () => Math.floor(Math.random()*256);
    const randomcolor = () => {
        const r = randomNum()
        const g = randomNum()
        const b = randomNum()
        return `rgb(${r},${g},${b})`
}

const Squarecomponent = () =>{
    const [box,setbox] = useState<BoxType[]>(initialstate)

    const setboxcount = (id:string) =>{
        setbox(box.map(b => id === b.id ? {...b, bgcount: b.bgcount + 1, activebox:true} : {...b, activebox:false}))
    }

    const setboxcolor = () =>{
        setbox(box.map(b => b.activebox ?({...b, bgcolor:randomcolor()}): b))
    }

    const resetbox = () =>{
        setbox(initialstate)
    }


    {return(
        <main style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center", gap:"2rem"}}>
            <h3>Szín kód: {box.map(b=> b.activebox ? b.bgcolor : "").join("")}</h3>
            <div className="row" style={{display: "flex", gap:"1rem"}}>
                {box.map(box => <BoxComponents id={box.id} color={box.bgcolor} count={box.bgcount} setFn={()=>setboxcount(box.id)}/>)}
            </div>
            
                <button onClick={setboxcolor}>Szeretnél színezni? nyomogass meg!</button>
                <button onClick={resetbox}> Reset cig</button>
            
        </main>
    )
}
}
export default Squarecomponent