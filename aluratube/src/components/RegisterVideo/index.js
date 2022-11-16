import { useState, useEffect, useCallback } from "react";
import { useFormik } from "formik";
import { supabase } from "../../utils/supabaseClient";

import toast from "react-hot-toast";
import { getInfoVideo } from "../../services/videoService";
import { StyledRegisterVideo } from "./styles";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiLoader } from "react-icons/bi";

export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      titulo: "",
      url: "",
      playlist: playlists[0] || "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.titulo) {
        errors.titulo = "Campo obrigatório";
      } else if (values.titulo.trim().length < 1) {
        errors.titulo = "O titulo não pode ser vazio";
      }

      if (!values.url) {
        errors.url = "Campo obrigatório";
      } else if (!values.url.startsWith("https://www.youtube.com/watch?v=")) {
        errors.url = "A url deve ser do YouTube";
      }

      if (values.playlist.trim().length === 0) {
        values.playlist = playlists[0];
      } else if (!playlists.includes(values.playlist)) {
        errors.playlist = `A playlist "${values.playlist}" não existe.`;
      }

      return errors;
    },
    validateOnBlur: true,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  async function getPlaylists() {
    const { data, error } = await supabase
      .from("playlists")
      .select("name")
      .order("name");

    if (error) {
      console.log(error);
      return;
    }

    var dados = [];
    data.map(({ name }) => dados.push(name));
    setPlaylists(dados);
  }

  useEffect(() => {
    getPlaylists();
  }, []);

  async function handleSubmit(values) {
    setLoading(true);
    const loadToast = toast.loading("Criando video...");

    try {
      const { titulo: title, url, playlist } = values;

      const videoId = getInfoVideo.getVideoId(url);
      const thumb = getInfoVideo.getThumbnail(videoId);

      const { error } = await supabase.from("videos").insert({
        title,
        url,
        thumb,
        playlist,
      });

      if (error) {
        throw error;
      }

      toast.success("Video criado com sucesso!");
      formik.resetForm();
      setFormVisivel(false);
    } catch (error) {
      if (
        error.details ===
        `Key (playlist)=(${formik.values.playlist}) is not present in table \"playlists\".`
      ) {
        toast.error(`Playlist "${formik.values.playlist}" não existe.`);
        formik.setErrors({
          playlist: `Playlist "${formik.values.playlist}" não existe.`,
        });
      } else {
        toast.error("Houve um erro");
      }
    } finally {
      setLoading(false);
      toast.dismiss(loadToast);
    }
  }

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel && (
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-container">
            <div className="title-form">
              <h2>Adicionar vídeo</h2>
            </div>
            <div className="close-modal-div">
              <button
                type="button"
                className="close-modal-btn"
                onClick={() => {
                  setFormVisivel(false);
                  formik.resetForm();
                }}
              >
                <AiOutlineCloseCircle size={25} />
              </button>
            </div>
            <div className="input-div">
              <input
                placeholder="Titulo do vídeo"
                name="titulo"
                value={formik.values.titulo}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.titulo && formik.errors.titulo && (
                <span>{formik.errors.titulo}</span>
              )}
            </div>
            <div className="input-div">
              <input
                placeholder="URL"
                name="url"
                value={formik.values.url}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.url && formik.errors.url && (
                <span>{formik.errors.url}</span>
              )}
            </div>
            <div className="select-div">
              <label htmlFor="playlist">Escolha a playlist:</label>
              <select
                id="playlist"
                name="playlist"
                placeholder="Playlist"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.playlist}
              >
                {playlists.map((playlistName) => (
                  <option key={playlistName} value={playlistName}>
                    {playlistName}
                  </option>
                ))}
              </select>
              {formik.touched.playlist && formik.errors.playlist && (
                <span>{formik.errors.playlist}</span>
              )}
            </div>
            <button
              type="submit"
              disabled={
                formik.errors.titulo ||
                formik.errors.url ||
                formik.errors.playlist ||
                formik.values == formik.initialValues ||
                loading
              }
            >
              {loading ? (
                <BiLoader size={16} className="icon-load" />
              ) : (
                "Cadastrar"
              )}
            </button>
            {formik.values.url?.startsWith(
              "https://www.youtube.com/watch?v="
            ) && (
              <div className="view-thumbnail">
                <img
                  src={getInfoVideo.getVideoImage(formik.values.url)}
                  alt="thumbnail"
                />
              </div>
            )}
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
