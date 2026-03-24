import { useQuery } from "@tanstack/react-query";
import { fetchGallery } from "../../services/galleryService";

export default function useGallery() {
    const { data: gallery = [], isLoading: loading, error } = useQuery({
        queryKey: ["gallery"],
        queryFn: fetchGallery,
    });

    return {
        gallery,
        loading,
        error: error ? error.message : null
    };
}
