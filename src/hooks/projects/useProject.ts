import { useQuery } from "@tanstack/react-query";
import { fetchProject } from "../../services/projectService";

export default function useProject() {
    const { data: projects = [], isLoading: loading, error } = useQuery({
        queryKey: ["projects"],
        queryFn: fetchProject,
    });

    return { 
        projects, 
        loading, 
        error: error ? error.message : null 
    };
}