import { supabase } from "../supabaseClient";

export const fetchDescAbout = async () => {
    const { data, error } = await supabase.from("desc_about").select("*");
    if (error) throw new Error(error.message);
    return data;
};
