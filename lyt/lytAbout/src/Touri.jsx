import { Card } from "./Card";

export function Touri({tour}){
    return (
        <>
        <div className="grid  place-content-center mb-20 gap-20 justify-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-y-14  ">
           
        {tour.map((tour) => {
            return <Card {...tour}/>
        } )}
       
        </div>
        </div>
        
        
        </>
    )
}