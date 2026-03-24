import { supabase } from "../supabaseClient";

export const fetchProject = async () => {
    const { data, error } = await supabase.from("project").select("*");
    if (error) throw new Error(error.message);
    return data;
};
