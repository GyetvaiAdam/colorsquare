import { useState} from "react";
import BoxComponents from "./BoxComponents";

const randomNum = () => Math.floor(Math.random()*256);
    const randomcolor = () => {
        const r = randomNum()
        const g = randomNum()
        const b = randomNum()
        return `rgb(${r},${g},${b})`
}

const Squarecomponent = () =>{

    /* const [color,setcolor] = useState<string>("rgb(0,0,0)")
    const [count, setcount] = useState(0) */
    const [box, setbox] = useState({bgcolor: "rgb(0, 0, 0)", bgcount:0})
    
    const setboxColor = () => setbox(prev =>({...prev, bgcolor:randomcolor()}));
    const setBoxCount = () => setbox(prev => ({...prev, bgcount: prev.bgcount +1}))

    const reset = () =>{
        return setbox(prev =>({...prev, bgcolor:"rgb(0,0,0)", bgcount:0}))
    }


    {return(
        <main style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center", gap:"2rem"}}>
            {/* <div className="box" style={{width: "5rem", height: "5rem", boxShadow: "0 0 10px 3px rgba(0,0,0.5) inset", borderRadius: "10px", background: color, display: "flex", justifyContent: "center", fontSize: "1.1rem"}} onClick={() => setcount(prev => prev+1)}>
            {count}
            </div> */}
            <h3>Szín kód: {box.bgcolor}</h3>
            <div className="row" style={{display: "flex", gap:"1rem"}}>
                <BoxComponents color={box.bgcolor} setFn={setBoxCount} count={box.bgcount}/>
                <BoxComponents color={box.bgcolor} setFn={setBoxCount} count={box.bgcount}/>
                <BoxComponents color={box.bgcolor} setFn={setBoxCount} count={box.bgcount}/>
            </div>
            
                <button onClick={()=>setboxColor()}>Szeretnél színezni? nyomogass meg!</button>
                <button onClick={reset}> Reset cig</button>
            
        </main>
    )
}
}
export default Squarecomponent