import { supabase } from "../supabaseClient";

export const fetchExperience = async () => {
    const { data, error } = await supabase
        .from("experience")
        .select("*")
        .order("start", { ascending: false })
        .order("end", { ascending: false, nullsFirst: false });
        
    if (error) throw new Error(error.message);
    return data;
};
