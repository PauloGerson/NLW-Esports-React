import "./style.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/Hollow%20Knight",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/490147_IGDB-144x192.jpg",
    alt: "imagem do jogo Hollow Knight",
  },
  {
    url: "https://www.twitch.tv/directory/game/MultiVersust",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/950189725-144x192.jpg",
    alt: "imagem do jogo MultiVersus",
  },
  {
    url: "https://www.twitch.tv/directory/game/Naruto%20Shippuden%3A%20Ultimate%20Ninja%20Storm%204",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/488635_IGDB-144x192.jpg",
    alt: "imagem do jogo Naruto ninja storm 4",
  },
  {
    url: "https://www.twitch.tv/directory/game/Naruto%20Shippuden%3A%20Ultimate%20Ninja%20Storm%204t",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-144x192.jpg",
    alt: "imagem do jogo Valorant",
  },
];

const chanelListData = [
  {
    url: "https://www.twitch.tv/pgpaullo",
    imgUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/19a0fd4e-7870-4242-85d3-26e830c8ffa9-profile_image-150x150.png",
    alt: "imagem de pauloo Gerson ",
  },

  {
    url: "",
    imgUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "imagem",
  },
  {
    url: "",
    imgUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png",
    alt: "imagem ",
  },
];

const socialListData =[
    {
        url:"",
        imgUrl: "/assets/twitch.svg",
        alt: "Imagem da twitch"
    },
    {
        url:"",
        imgUrl: "/assets/Instagram.svg",
        alt: "Imagem do Instagram"
    },
    {
        url:"",
        imgUrl: "/assets/youtube.svg",
        alt: "Imagem do youtube"
    }
];
//console.log(gamesListData)

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem 
                url={item.url} 
                imageUrl={item.imgUrl} 
                alt={item.alt} />
            );
          })}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="chanel-list"
        >
          {chanelListData.map(function (item) {
            return (
              <ListItem 
                url={item.url} 
                imageUrl={item.imgUrl} 
                alt={item.alt} />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo"
          className="social-list"
        >
            {
                socialListData.map(function(item){
                    return(
                        <ListItem
                        url= {item.url}
                        imageUrl = {item.imgUrl}
                        alt = {item.alt}
                        />
                    )
                })
            }

        </Section>
      </main>
    </div>
  );
}
