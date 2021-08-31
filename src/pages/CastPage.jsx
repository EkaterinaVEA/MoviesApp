import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../services/api";
import { Cast } from "../components/Cast/Cast";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CastPage() {
    const { id } = useParams();
    const [actors, setActors] = useState(null);

    useEffect(() => {
        async function getCastDetails() {
            try {
                const cast = await getCast(id);

                if (!cast.length) {
                    throw new Error("Cast not found");
                }

            setActors(cast);
                
            } catch (error) {
                console.log(error)
                toast.info("Cast not found")
            }
            const cast = await getCast(id);

            setActors(cast);
            window.scrollTo({ top: 560, behavior: "smooth" });
        }
        getCastDetails();
    }, [id])

    return (
        <>
            {actors && <Cast actors={actors} />}
        </>
    )
}