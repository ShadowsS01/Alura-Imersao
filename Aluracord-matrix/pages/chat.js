import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import { useState, useEffect } from "react";
import appConfig from "../config.json";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import {
  ButtonSendSticker,
  Header,
  Sticker,
} from "../src/components/exportComponents";

const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function escutaMensagensEmTempoReal(adicionaMensagem) {
  return supabaseClient
    .from("mensagens")
    .on("INSERT", (respostaLive) => {
      adicionaMensagem(respostaLive.new);
    })
    .subscribe();
}

export default function ChatPage() {
  const roteamento = useRouter();
  const usuarioLogado = roteamento.query.username;
  const [mensagem, setMensagem] = useState("");
  const [listaDeMensagens, setListaDeMensagens] = useState([]);

  useEffect(() => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        setListaDeMensagens(data);
      });

    const subscription = escutaMensagensEmTempoReal((novaMensagem) => {
      setListaDeMensagens((valorAtualDaLista) => {
        return [novaMensagem, ...valorAtualDaLista];
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      de: usuarioLogado,
      texto: novaMensagem,
    };

    supabaseClient
      .from("mensagens")
      .insert([mensagem])
      .then(({ data }) => {});

    setMensagem("");
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagens} />
          {/* {listaDeMensagens.map((mensagemAtual) => {
            return (
              <li key={mensagemAtual.id}>
                {mensagemAtual.de}: {mensagemAtual.texto}
              </li>
            );
          })} */}
          <Box
            as="form"
            onSubmit={(event) => {
              event.preventDefault();
              handleNovaMensagem(mensagem);
            }}
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                setMensagem(event.target.value);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  if (mensagem === "") {
                    event.preventDefault();
                  } else {
                    event.preventDefault();
                    handleNovaMensagem(mensagem);
                  }
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                display: "flex",
                height: "50px",
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            {/* CallBack */}
            <ButtonSendSticker
              onStickerClick={(sticker) => {
                // console.log('[USANDO O COMPONENTE] Salva esse sticker no banco', sticker);
                handleNovaMensagem(":sticker: " + sticker);
              }}
            />
            <Button
              value={mensagem}
              onChange={(event) => {
                setMensagem(event.target.value);
              }}
              type="submit"
              iconName="arrowRight"
              disabled={mensagem === ""}
              styleSheet={{
                textAlign: "center",
                borderRadius: "50%",
                minWidth: "50px",
                minHeight: "50px",
                marginRight: "15px",
                marginLeft: "10px",
                borderRadius: "5px",
                backgroundColor: appConfig.theme.colors.primary[500],
                marginBottom: "7px",
              }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColorStrong: appConfig.theme.colors.primary[600],
                mainColorLight: appConfig.theme.colors.primary[400],
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function generateDate(string) {
  var time = new Date(string).toLocaleTimeString().substring(0, 5);
  var date;
  switch (new Date().getDay() - new Date(string).getDay()) {
    case 0:
      date = "Hoje";
      break;
    case 1:
      date = "Ontem";
      break;
    case 2:
      date = "Anteontem";
      break;
    default:
      time = "";
      // date = format(new Date(), 'dd/MM/yyyy - HH:mm')
      date = new Date(string).toLocaleDateString();
  }
  return `${date} ${time}`;
}

export function MessageList(props) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflowY: "auto",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
        paddingRight: "10px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              maxWidth: "90vw",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
              whiteSpace: "pre-line",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                styleSheet={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  styleSheet={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                  src={`https://github.com/${mensagem.de}.png`}
                />
                <Text
                  tag="strong"
                  styleSheet={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  {mensagem.de}
                </Text>
                <Text
                  styleSheet={{
                    fontSize: "10px",
                    marginLeft: "8px",
                    color: appConfig.theme.colors.neutrals[300],
                  }}
                  tag="span"
                >
                  {generateDate(mensagem.created_at)}
                </Text>
              </Box>
            </Box>
            {mensagem.texto.startsWith(":sticker:") ? (
              <Sticker src={mensagem.texto.replace(":sticker:", "")} />
            ) : (
              mensagem.texto
            )}
          </Text>
        );
      })}
    </Box>
  );
}
