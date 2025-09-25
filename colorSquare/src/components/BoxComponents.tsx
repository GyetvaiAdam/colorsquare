interface BoxProps{
  id: string;
  color:string;
  count: number;
  setFn: () => void;
}

const BoxComponents: React.FC<BoxProps> = ({id, color,count, setFn}) => {
  return (
    
        <div className="box" style={{width: "10rem", height:"10rem", boxShadow:"0 0 10px 3px white inset", borderRadius: "7px", background:`${color}`, alignContent:"center", justifyContent:"center", fontSize: "1-1rem", display: "flex", alignItems: "center"}} onClick={setFn}>
          {count}
        </div>
  )
}

export default BoxComponents