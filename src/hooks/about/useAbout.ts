import { useQuery } from "@tanstack/react-query";
import { fetchAbout } from "../../services/aboutService";

export default function useAbout() {
    const { data: about = [], isLoading: loading, error } = useQuery({
        queryKey: ["about"],
        queryFn: fetchAbout,
    });

    return { 
        about, 
        loading, 
        error: error ? error.message : null 
    };
}