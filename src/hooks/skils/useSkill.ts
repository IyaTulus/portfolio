import { useQuery } from "@tanstack/react-query";
import { fetchSkill } from "../../services/skillService";

export default function useSkills() {
    const { data: skills = [], isLoading: loading, error } = useQuery({
        queryKey: ["skills"],
        queryFn: fetchSkill,
    });

    return { 
        skills, 
        loading, 
        error: error ? error.message : null 
    };
}