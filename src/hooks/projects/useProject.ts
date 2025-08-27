import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function useProject() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase.from("project").select("*");
                if (error) throw error;
                if (data) {
                    setProjects(data);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, [])

    return { 
        projects, 
        loading, 
        error 
    };
}