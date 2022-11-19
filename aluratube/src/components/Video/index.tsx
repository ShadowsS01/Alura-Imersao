import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { supabase } from "../../utils/supabaseClient";
import { StyledVideo } from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import toast from "react-hot-toast";

interface VideoProps {
  videoId: string | string[];
}

export const Video = ({ videoId }: VideoProps) => {
  const router = useRouter();
  const [videoYTId, setVideoYTId] = useState("");

  useEffect(() => {
    const videoVerification = async () => {
      try {
        const { data, error } = await supabase
          .from("videos")
          .select("*")
          .eq("youtube_id", videoId)
          .single();

        if (error) {
          throw error;
        }

        setVideoYTId(data.youtube_id);
      } catch (err: any) {
        toast.error("Video não encontrado!");
        router.push("/");
      }
    };
    videoVerification();
  }, [router, videoId]);

  return (
    <StyledVideo>
      <div>
        <Link href="/" className="back">
          <FiArrowLeft />
          Voltar
        </Link>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoYTId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </StyledVideo>
  );
};
