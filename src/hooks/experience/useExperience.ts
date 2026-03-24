import { useQuery } from "@tanstack/react-query";
import { fetchExperience } from "../../services/experienceService";

export default function useExperience() {
    const { data: experience = [], isLoading: loading, error } = useQuery({
        queryKey: ["experience"],
        queryFn: fetchExperience,
    });

    return {
        experience,
        loading,
        error: error ? error.message : null
    };
}