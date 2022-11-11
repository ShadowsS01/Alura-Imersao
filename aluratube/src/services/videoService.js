import { supabase } from "../utils/supabaseClient";

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("videos").select("*");
    },
  };
}
