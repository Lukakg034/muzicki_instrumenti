import "./MusicInstruments.css";

export default function MusicInstruments() {
  const muzickiInstrumenti = [
    "Žičani instrumenti",
    "Duvački instrumenti",
    "Udaraljke",
  ];
  // const zicani_instrumenti = ["Gudački", "Trzani", "Udarni"];
  // const gudacki_instrumenti = [
  //   "Violina",
  //   "Viola",
  //   "Violončelo",
  //   "Bariton",
  //   "Kontrabas",
  // ];
  // const trzalacki_instrumenti = [
  //   "Gitara",
  //   "Mandolina",
  //   "Tamburica",
  //   "Bendžo",
  //   "Balalajka",
  //   "Bandura",
  //   "Ukulele",
  //   "Lauta",
  // ];
  // const udarni_zicani_instrumenti = ["Klavir", "Cimbal"];
  // const duvacki_instrumenti = [
  //   "Blokflauta",
  //   "Frula",
  //   "Flauta",
  //   "Pikolo",
  //   "Klarinet",
  //   "Bas klarinet",
  //   "Baset horn",
  //   "Saksofon",
  //   "Oboa",
  //   "Engleski rog",
  //   "Fagot",
  //   "Kontrafagot",
  //   "Horna",
  //   "Tuba",
  //   "Truba",
  //   "Trombon",
  //   "Orgulje",
  //   "Harmonika",
  //   "Harmonijum",
  // ];

  // const udaraljke = [
  //   "Timpan",
  //   "Zvona",
  //   "Zvončići",
  //   "Čelesta",
  //   "Tubafon",
  //   "Vibrafon",
  //   "Gong",
  //   "Ksilofon",
  //   "Marimba",
  //   "Veliki bubanj",
  //   "Mali bubanj",
  //   "Tamburin",
  //   "Čineli",
  //   "Triangl",
  //   "Tam-tam",
  //   "Kastanjete",
  //   "Drveni doboš",
  //   "Marakas",
  // ];
  return (
    <>
      {muzickiInstrumenti.map((instrumenti, index) => {
        return (
          <button className="all_instruments" key={index}>
            {instrumenti}
          </button>
        );
      })}
    </>
  );
}
