import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function useSkills() {
    const [skills, setSkills] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const { data, error } = await supabase.from("skills").select("*");
                if (error) throw error;
                if (data) {
                    setSkills(data);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchSkills();
    }, [])

    return { 
        skills, 
        loading, 
        error 
    };
}