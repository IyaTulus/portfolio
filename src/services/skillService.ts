import { supabase } from "../supabaseClient";

export const fetchSkill = async () => {
    const { data, error } = await supabase.from("skills").select("*");
    if (error) throw new Error(error.message);
    return data;
};
