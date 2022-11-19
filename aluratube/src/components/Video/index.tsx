import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { supabase } from "../../utils/supabaseClient";
import { StyledVideo } from "./styles";
import toast from "react-hot-toast";

import { FiArrowLeft } from "react-icons/fi";
import { BiLoaderCircle } from "react-icons/bi";

interface VideoProps {
  videoId: string | string[];
}

export const Video = ({ videoId }: VideoProps) => {
  const router = useRouter();
  const [videoYTId, setVideoYTId] = useState("");

  useEffect(() => {
    const videoVerification = async () => {
      const toastLoading = toast.loading("Video sendo carregado...");
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
      } finally {
        toast.dismiss(toastLoading);
      }
    };
    videoVerification();
  }, [router, videoId]);

  return (
    <StyledVideo>
      {videoYTId === "" ? (
        <div className="div-loadingVideo" title="Video sendo carregado...">
          <h2>
            Carregando <BiLoaderCircle />
          </h2>
        </div>
      ) : (
        <div>
          <Link href="/" className="back" title="Voltar para o inicio">
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
      )}
    </StyledVideo>
  );
};
