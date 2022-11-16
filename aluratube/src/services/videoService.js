import { supabase } from "../utils/supabaseClient";

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("videos").select("*").order("playlist");
    },
  };
}

export const getInfoVideo = {
  getVideoId(url) {
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  },
  getThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  },
  getVideoImage(url) {
    return this.getThumbnail(this.getVideoId(url));
  },
};
