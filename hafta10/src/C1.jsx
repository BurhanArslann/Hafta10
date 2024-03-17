import { useEffect, useState } from "react"

function C1 (){
    
    const [sayac,sayacGuncelle] = useState(0)

    useEffect(()=>{

    console.log("c1 render oldu");
},[])

    return(
      <>
        <div className="bg-success-subtle">
            Ben c1 Komponentiyim
            <button onClick={()=>{sayacGuncelle(eskideger => eskideger+1)}} className="btn btn-outline-danger">{sayac}</button>
        </div>
      </>
    )
}

export default C1