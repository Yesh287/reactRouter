import { useParams } from "react-router-dom"

export default function User(){
    const {userid} = useParams();
    return(
        <h1 className="text-center bg-gray-700 text-white p-4">Id: {userid}</h1>
    )
}