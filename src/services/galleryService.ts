import { supabase } from "../supabaseClient";

export const fetchGallery = async () => {
    const { data, error } = await supabase
        .from("gallery")
        .select("*")
        .order("created_at", { ascending: false });
        
    if (error) throw new Error(error.message);
    return data;
};
