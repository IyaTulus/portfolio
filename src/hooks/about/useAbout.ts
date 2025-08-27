import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function useAbout() {
    const [about, setAbout] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const { data, error } = await supabase.from("about").select("*");
                if (error) throw error;
                if (data) {
                    setAbout(data);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchAbout();
    }, [])

    return { 
        about, 
        loading, 
        error 
    };
}