import { supabase } from "../supabaseClient";

export const fetchAbout = async () => {
    const { data, error } = await supabase.from("about").select("*");
    if (error) throw new Error(error.message);
    return data;
};
