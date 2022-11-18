import { supabase } from "../utils/supabaseClient";

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("videos").select("*").order("playlist");
    },
  };
}

export const getInfoVideo = {
  getVideoId(url: string): string {
    if (url.startsWith("https://youtu.be/")) {
      const videoId = url.split("/")[3];
      return videoId;
    } else if (
      url.startsWith("https://www.youtube.com/watch?") ||
      url.startsWith("https://m.youtube.com/watch?v=")
    ) {
      const videoId = url.split("v=")[1];
      const ampersandPosition = videoId.indexOf("&");
      if (ampersandPosition !== -1) {
        return videoId.substring(0, ampersandPosition);
      }
      return videoId;
    } else {
      return "";
    }
  },
  getThumbnail(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  },
  getVideoImage(url: string): string {
    return this.getThumbnail(this.getVideoId(url));
  },
};
