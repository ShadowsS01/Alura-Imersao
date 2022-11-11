import { useState, useEffect } from "react";
import { StyledRegisterVideo } from "./styles";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/router";

function useForm(propsDoForm) {
  const [values, setValues] = useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (evento) => {
      const value = evento.target.value;
      const name = evento.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

// get YouTube thumbnail from video url
function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

function getVideoId(url) {
  const videoId = url.split("v=")[1];
  const ampersandPosition = videoId.indexOf("&");
  if (ampersandPosition !== -1) {
    return videoId.substring(0, ampersandPosition);
  }
  return videoId;
}

export default function RegisterVideo() {
  const router = useRouter();
  const [formVisivel, setFormVisivel] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  async function getPlaylists() {
    const { data, error } = await supabase
      .from("playlists")
      .select("name")
      .order("name");

    if (error) {
      console.log(error);
      return;
    }
    setPlaylists(data);
  }

  useEffect(() => {
    getPlaylists();
  }, []);

  const formCadastro = useForm({
    initialValues: { titulo: "", url: "", playlist: playlists[0] },
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const title = formCadastro.values.titulo;
    const url = formCadastro.values.url;
    const thumb = getThumbnail(formCadastro.values.url);
    const playlist = formCadastro.values.playlist;

    if (
      title.trim().length < 2 ||
      url.trim().length < 2 ||
      thumb.trim().length < 2 ||
      playlist.trim().length < 2
    ) {
      alert("Os campos não podem ter menos que dois caracteres.");
      return;
    }
    if (!url.startsWith("https://www.youtube.com/")) {
      alert("A url deve ser um vídeo do YouTube.");
      return;
    }

    const { error } = await supabase.from("videos").insert({
      title,
      url,
      thumb,
      playlist,
    });

    if (error) {
      if (
        error.details ===
        `Key (playlist)=(${formCadastro.values.playlist}) is not present in table \"playlists\".`
      ) {
        alert(`Playlist "${formCadastro.values.playlist}" não existe.`);
      }
      alert("Houve um erro");
    } else {
      setFormVisivel(false);
      formCadastro.clearForm();
      router.reload();
    }
  }

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form onSubmit={handleSubmit}>
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>
            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={formCadastro.values.titulo || ""}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url || ""}
              onChange={formCadastro.handleChange}
            />
            <div className="select-div">
              <label htmlFor="playlist">Escolha a playlist:</label>
              <select
                id="playlist"
                name="playlist"
                placeholder="Playlist"
                onChange={formCadastro.handleChange}
                value={formCadastro.values.playlist}
              >
                {playlists.map((playlist) => (
                  <option key={playlist.name} value={playlist.name}>
                    {playlist.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
