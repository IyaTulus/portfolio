import { useQuery } from "@tanstack/react-query";
import { fetchDescAbout } from "../../services/descAboutService";

export default function useDescAbout() {
    const { data: descAbout = [], isLoading: loading, error } = useQuery({
        queryKey: ["descAbout"],
        queryFn: fetchDescAbout,
    });

    return { 
        descAbout, 
        loading, 
        error: error ? error.message : null 
    };
}