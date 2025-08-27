import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function useExperience() {
    const [experience, setExperience] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const { data, error } = await supabase.from("experience").select("*");
                if (error) throw error;
                if (data) {
                    setExperience(data);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchExperience();
    }, [])

    return {
        experience,
        loading,
        error
    };
}