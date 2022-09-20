const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const { ConstructionOutlined } = require("@mui/icons-material");

const corsOptions = {
  origin: PORT,
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const fakeData = {
  "artists": [
    {
      "idArtist": "111718",
      "strArtist": "Drake",
      "strArtistStripped": null,
      "strArtistAlternate": "",
      "strLabel": "OVO Sound",
      "idLabel": "45073",
      "intFormedYear": "2009",
      "intBornYear": "1986",
      "intDiedYear": null,
      "strDisbanded": null,
      "strStyle": "Urban/R&B",
      "strGenre": "Hip-Hop",
      "strMood": "Passionate",
      "strWebsite": "www.drizzydrake.org",
      "strFacebook": "www.facebook.com/Drake",
      "strTwitter": "1",
      "strBiographyEN": "Aubrey Drake Graham (born October 24, 1986), who records under the mononym Drake, is a Canadian recording artist and actor. He originally became known for playing Jimmy Brooks on the television series Degrassi: The Next Generation.\n\nIn June 2009, Drake signed a recording contract with Lil Wayne's Young Money Entertainment. In November 2009, Lil Wayne released a statement announcing that Drake's first studio album, Thank Me Later, had been completed. The album was released on June 15, 2010, and debuted at number one on the Billboard 200. The album has since gone platinum. He released his second studio album on November 15, 2011 titled Take Care. Drake was set to release an R&B mixtape sometime in the future along with a collaboration album with Lil Wayne, however, both have been postponed for various reasons.\n\nDrake has worked with several other hip-hop artists such as Lil Wayne, Rick Ross, Kanye West, Eminem, Jay-Z, and Nicki Minaj. With the success of his mixtape-turned-EP So Far Gone, Drake has been nominated for several awards including Grammys, even being selected to perform at the 2010 Grammy award ceremony. Drake has also won several awards, including two Juno Awards in 2010 for Best New Artist, and Rap Recording of the Year.\n\nIn addition to making his own music, Drake has also written for other artists in the industry such as Alicia Keys, Jamie Foxx and more. He also tends to feature or remix tracks that he has written for other artists such as Unthinkable Remix by Alicia Keys. Drake also claims that he and Lil Wayne have both written for Dr. Dre's Detox album. In the list of the songs written, \"Yesterday\", of Diddy - Dirty Money featuring Chris Brown, written with Chris Brown, Cristyle, Kevin McCall and Mario Winans, from Diddy's fifth studio album, Last Train to Paris. Drake also wrote the song \"Unthinkable\", by Alicia Keys, also written with Keys and Kerry Brothers, Jr., Noah \"40\" Shebib, from her album The Element of Freedom. He is featured in the remix of the song.\n\nDrake was ranked No. 2 on MTV's Hottest MCs In The Game VII list in 2012. He currently has more number-one singles, twelve, on Billboard's Rap Songs Chart than any other artist, and is, other than 50 Cent, the only artist to simultaneously occupy the chart's top three positions.\n\nAubrey Drake Graham was born on October 24, 1986, in Toronto, Ontario. He is the son of Dennis Graham, a drummer who worked with Jerry Lee Lewis, and Sandi Graham, an educator. Two of his uncles, Larry Graham and Teenie Hodges, are also musicians. Drake's father is an African American from Memphis, Tennessee, and Drake's mother is a Jewish Canadian. He attended a Jewish day school and had a Bar Mitzvah. His parents divorced when he was five years old, and he was raised by his mother in Toronto's wealthy Forest Hill neighborhood. Drake attended high school at Forest Hill Collegiate Institute, where he began acting, but did not graduate. He spent most summers with his father in Memphis. Drake stated that his parents' divorce greatly affected him as a person, saying, â€œI had to become a man very quickly and be the backbone for a woman who I love with all my heart, my mother.\"",
      "strBiographyDE": "Aubrey Drake Graham (* 24. Oktober 1986 in Toronto, Ontario) ist ein kanadischer Schauspieler, Rapper und R&B-Sänger afroamerikanischer Abstammung. Er ist ein bekannter Newcomer in der Hip-Hop-Szene. Seine Lieder veröffentlicht er unter seinem Zwischennamen Drake, wobei er auch unter seinem Pseudonym Drizzy bekannt ist. Erste Bekanntheit erlangte Graham als Schauspieler in der Fernsehserie Degrassi: The Next Generation, in der er Jimmy Brooks spielte. 2006 trat er dann auch als Rapper in Erscheinung, als er eine Reihe von Mixtapes veröffentlichte. Sein erster Erfolg als Musiker war schließlich die Single Replacement Girl, die er zusammen mit Trey Songz einspielte und die vom Fernsehsender BET in dessen Show 106 & Park als Joint of the Day (zu deutsch: Lied des Tages) vorgestellt wurde. Er blieb dennoch – trotz Auftritten auf zahlreichen Mixtapes und Remixen und der Unterstützung von Kanye West, Jay-Z und Lil Wayne – ohne Plattenvertrag. 2009 veröffentlichte er dann die Single Best I Ever Had, die sich zum Hit in den Vereinigten Staaten entwickelte. Als Folge davon entwickelte sich ein Bieterwettstreit zwischen mehreren Major-Labels[1], an dessen Ende schließlich ein Kooperationsvertrag zwischen Cash Money Records und Young Money Entertainment stand. Als Vertriebslabel dient Universal Records. Drake ist bekannt für seine einzigartige Mischung aus Hip-Hop und R&B.",
      "strBiographyFR": "Aubrey Drake Graham (né le 24 Octobre 1986) est un acteur Canadien, rappeur et chanteur. Il est connu pour son rôle de Jimmy Brooks dans la série « Degrassi: The Next Generation ». Lorsqu’il rap, Graham utilise le pseudonyme Drake, et est souvent appelé « The New Version Of The Fresh Prince », « Heartbreak Drake », ou encore « New Age Montell Jordan », en rapport avec sa capacité à rapper et à chanter sur les même morceaux. Il est signé sur le label Interscope Records, et managé par Hip Hop Since 1978 (Kanye West, Lil’ Wayne…).",
      "strBiographyCN": null,
      "strBiographyIT": "Aubrey Drake Graham, principalmente noto con lo pseudonimo di Drake (Toronto, 24 ottobre 1986), è un attore e rapper canadese. Graham è conosciuto anche per aver interpretato il disabile Jimmy Brooks, nella serie Degrassi: The Next Generation. Graham è nato a Toronto, Ontario, da padre afro-canadese e madre di discendenza ebraica.[1][2] Il padre è musicista mentre la famiglia della madre è coinvolta nell'arte. Graham ha frequentato il Forest Hill Collegiate Institute ed ha iniziato a recitare alle scuole superiori dopo essere stato suggerito ad un agente.[1]\n\nGraham ha interpretato il ruolo di Jimmy Brooks, lo studente ferito in una sparatoria a scuola, portandolo ad assumere il primo ruolo con disabilità fisiche nella serie Degrassi: The Next Generation, a partire dal 2001. Ha poi partecipato al film Charlie Bartlett, assieme a Anton Yelchin e Robert Downey, Jr., che verrà distribuito sul mercato del nordamerica il 1 febbraio 2008.\n\nCome cantante Graham ha pubblicato, nel febbraio 2006, il suo primo mixtape dal titolo Room for Improvement sotto il suo pseudonimo Drake[3], girando recentemente il video del suo singolo di debutto Replacement Girl assieme al cantante R&B Trey Songz.[4] Ha inoltre collaborato con un cameo al video del singolo di Trey Songz Wonder Woman. Graham ha inoltre fondato la sua casa discografica indipendente chiamata ATF Records (All Things Fresh).[5]\n\nNel 2007, rilasciò Comeback Season. Nel 2008, Heartbreak Drake. Nessuno dei due ebbe successo quanto il suo ultimo, So Far Gone, che include il mentore di Drake, Lil Wayne, e membri della Young Money.\n\nIl primo singolo di Drake, “Best I Ever Had”, è alla numero 25 (Billboard: 23-05-2009) nella Billboard’s Hot R&B/Hip-Hop Airplay chart.\n\nLavorando ai suoi mixtapes, Drake ha collaborato con Lil Wayne, Trey Songz, Robin Thicke e Little Brother. Drake ha anche scritto canzoni per Jazz Cartier, Bishop Brigante, Keshia Chante e Dr. Dre. Attualmente sta lavorando al suo album di debutto, Thank Me Later.\n\nNel 2010 ha partecipato con il supergruppo Young Artists For Haiti alla realizzazione della cover di Wavin' Flag del canadese K'naan, per raccogliere fondi da devolvere alla popolazione di Haiti colpita dal terremoto. Nello stesso anno ha collaborato con la cantante Rihanna per il suo singolo What's My Name? e con il rapper Rick Ross e Chrisette Michele per il singolo Aston Martin Music.\n\nIl 15 novembre 2011 è stato pubblicato il suo secondo album intitolato Take Care, che vede la collaborazione di Stevie Wonder. Nello stesso periodo ha inoltre duettato con la cantante R&B statunitense Mary J. Blige in Mr. Wrong, secondo singolo estratto dal suo album My Life II... The Journey Continues (Act I). Nel 2009 ha collaborato a varie canzoni degli altri membri della Young Money (Lil Wayne, Birdman, Nicki Minaj & co.) fra le quali \"money to blow\" e \"Bed rock\"",
      "strBiographyJP": null,
      "strBiographyRU": null,
      "strBiographyES": "Aubrey Drake Graham (24 de octubre de 1986, Toronto, Ontario), conocido artísticamente como Drake, es un artista canadiense, rapero, compositor y actor. Originalmente se hizo conocido por interpretar al personaje Jimmy Brooks de la serie de televisión Degrassi: The Next Generation. Más tarde saltó a la fama como cantante de rap, lanzando varios mixtapes como Room for Improvement antes de firmar con Lil Wayne en la compañía discográfica estadounidense Young Money Entertainment en junio de 2009.1\n\nSu primer álbum de estudio, Thank Me Later (2010), debutó en el número uno del Billboard 200 con los éxitos notables generados, «Over» y «Find Your Love». Su segundo álbum, Take Care (2011), es su mayor éxito hasta la fecha, encabezando las listas en Estados Unidos y Canadá con la producción de varios sencillos de éxito, incluyendo «Headlines», «Take Care», «Make Me Proud», y «The Motto», el último de los cual también se le atribuye la popularización del acrónimo ampliamente utilizado \"YOLO\". En la promoción del álbum Take Care, Drake se embarcó en el Club Paradise Tour, que se convirtió en la más exitosa gira de hip-hop de 2012, recaudando más de 42 millones de dólares.2 Su tercer álbum de estudio Nothing Was the Same fue lanzado el 24 de septiembre 2013. Hasta el momento ha sido apoyado por los sencillos «Started from the Bottom» y «Hold On, We're Going Home».\n\nDrake, junto con el productor de discos de alias C. Papi, también han escrito canciones para otros artistas, incluyendo a Alicia Keys, Jamie Foxx y Trey Songz. Él apareció como actor de voz en la película Ice Age: Continental Drift como el mamut Ethan.3 En 2014 colaboró con Romeo Santos en el segundo sencillo de su álbum Formula, Vol. 2, titulado «Odio».4 5 6\n\nDrake ha vendido más de 5 millones de álbumes en todo el mundo.7 Por su trabajo ha ganado un Premio Grammy, tres premios Juno, seis premios BET, y establece varios registros importantes Billboard.\n\nCon diez sencillos número uno, también tiene más que cualquier otro rapero en la lista Billboard 's Hot R&B/Hip-Hop Songs, pasando a Jay-Z en agosto de 2012. Él es uno de los dos artistas (el otro es 50 Cent) que ha ocupado simultáneamente los tres primeros puestos del top.",
      "strBiographyPT": "Aubrey Drake Graham (nascido em 24 de outubro de 1986) é um ator canadense, rapper e cantor. Ele é conhecido por interpretar Jimmy Brooks, o personagem com deficiência física em Degrassi: The Next Generation. Como um rapper, Graham usa o nome artístico de Drake, e é muitas vezes anunciado como a nova versão de The Fresh Prince. Ele assinou contrato com a Atlantic Records, confirmada pela sua página no Facebook, e gerido por Hip Hop desde 1978. \n\nComo um rapper, Graham tem três mixtape auto-publicados, espaço para melhorias, Comeback Season e tão longe, sob o nome artístico de Drake. Espaço para melhorias foi produzido por DJ Smallz. Ele disparou um vídeo para o seu single de estréia “Replacement Girl”, que apresenta cantor de R & B Trey Songz. Ele também fez uma aparição no video Trey Songz’s “Wonder Woman”. Graham também tem uma gravadora independente chamada Próprio de outubro, e se refere ao coletivo das pessoas com quem ele trabalha com todas as coisas recentes. ATF consiste T-Slack, Niko, Addy, Junia-T, Rich Kidd, Oliver, Jazz Cartier, Photo Will, Andreena Mill, o futuro do príncipe, Boi-1da, Azuka, hustleGRL, Yung Trane, 40/40, D - 10, P-Reign, Reps Up, JD Era, muitos mais. Eles são uma parte da logomarca hearfelt Música / Music & Wise Guy Muito outubro’s Own. Toda a tripulação hastes de Toronto, e muitos deles se aventuraram fora em seu próprio reino da música.",
      "strBiographySE": null,
      "strBiographyNL": null,
      "strBiographyHU": null,
      "strBiographyNO": null,
      "strBiographyIL": null,
      "strBiographyPL": null,
      "strGender": "Male",
      "intMembers": "1",
      "strCountry": "Toronto, Canada",
      "strCountryCode": "CA",
      "strArtistThumb": "https://www.theaudiodb.com/images/media/artist/thumb/vpxqtu1484769349.jpg",
      "strArtistLogo": "https://www.theaudiodb.com/images/media/artist/logo/xtryww1359656364.png",
      "strArtistCutout": "https://www.theaudiodb.com/images/media/artist/cutout/l2xnfm1641903083.png",
      "strArtistClearart": "https://www.theaudiodb.com/images/media/artist/clearart/qtxtww1532971023.png",
      "strArtistWideThumb": "https://www.theaudiodb.com/images/media/artist/widethumb/rspvxr1517845854.jpg",
      "strArtistFanart": "https://www.theaudiodb.com/images/media/artist/fanart/yrsupw1359656418.jpg",
      "strArtistFanart2": "https://www.theaudiodb.com/images/media/artist/fanart/qxtqrw1340870221.jpg",
      "strArtistFanart3": "https://www.theaudiodb.com/images/media/artist/fanart/tryxyq1340870228.jpg",
      "strArtistFanart4": "https://www.theaudiodb.com/images/media/artist/fanart/y8qtm81630695997.jpg",
      "strArtistBanner": "https://www.theaudiodb.com/images/media/artist/banner/xwvvwx1408107846.jpg",
      "strMusicBrainzID": "9fff2f8a-21e6-47de-a2b8-7f449929d43f",
      "strISNIcode": null,
      "strLastFMChart": "http://www.last.fm/music/Drake/+charts?rangetype=6month",
      "intCharted": "3",
      "strLocked": "unlocked"
    }
  ]
}


app.get("/search/:artist", (req, res) => {
  /* const options = {
    method: 'GET',
    url: 'https://theaudiodb.p.rapidapi.com/search.php',
    params: { s: req.params.artist },
    headers: {
      'X-RapidAPI-Key': 'c0092b6902mshb5ed672ba017d6fp190826jsn09c53c7e81a9',
      'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    const data = res.json(response.data)
    console.log(data.artist[2])
  }).catch(function (error) {
    console.error(error);
  }); */
  return res.json(fakeData)
})


