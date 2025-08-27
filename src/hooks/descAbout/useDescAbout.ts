import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function useDescAbout() {
    const [descAbout, setDescAbout] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDescAbout = async () => {
            try {
                const { data, error } = await supabase.from("desc_about").select("*");
                if (error) throw error;
                if (data) {
                    setDescAbout(data);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchDescAbout();
    }, [])

    return { 
        descAbout, 
        loading, 
        error 
    };
}