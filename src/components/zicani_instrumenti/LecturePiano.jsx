import "./LecturePiano.css";

export default function LecturePiano() {
  return (
    <div className="lecture_content">
      <div className="lecture_header">
        <h1 className="lecture_title">Klavir</h1>
      </div>
      <article>
        <h2>OPIS</h2>
        <p>
          Klavir pripada grupi žičanih instrumenata kod kojih se ton dobija
          udaranjem čekića o žicu.
        </p>
      </article>
      <article className="material">
        <h2 className="article_heading">GRAĐA</h2>
        <div className="content_wrapper">
          <ul className="list">
            {/* <li className="list_item">Drvenog rama</li> */}
            <li className="list_item">Rezonantne daske</li>
            <li className="list_item">Metalnog okvira sa razapetim žicama</li>
            <li className="list_item">Klavijature sa mehanizmom čekića</li>
            <li className="list_item">Sistema pedala</li>
          </ul>
          <figure className="sketchfab-embed-wrapper">
            <iframe
              title="Grand Piano"
              frameBorder="0"
              allowFullScreen
              // width={480}
              // height={480}
              // Add other necessary attributes directly without camelCase
              allow={"fullscreen; xr-spatial-tracking"}
              src="https://sketchfab.com/models/5cb4706191e4467aaa8635c3ac4464b4/embed"
            ></iframe>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "normal",
                margin: "5px",
                color: "#4A4A4A",
              }}
            ></p>
          </figure>
        </div>
      </article>
      <article>
        <p>
          Metalan okvir koji je smešten unutar drvenog rama klavira se u
          današnje vreme gradi od gvožđa ili čelika kako bi odoleo opterećenju
          napetih žica koje su na njega zakačene.
        </p>
      </article>
      <div className="card">
        <h3 className="card_header">FUN FACT:</h3>
        <p className="card_text">
          Svaka razapeta žica vrši opterećenje od 90 do 100 kilograma. Što je
          žica zategnutija, u standardnom ili pomerenom štimu, pritisak žica na
          metalni okvir može biti viši ili niži. Tako okvir mora biti u
          mogućnosti da izdrži pritisak od nekih 20 tona. Razlog ovome jeste i
          težina samog klavira koja može biti između 250 i 500 kilograma.
        </p>
      </div>
      <p>
        Kako bi se izbeglo eventualno lomljenje ovog okvira, žice se grupišu i
        postavljaju ukršteno, pod uglom, kako bi se ujednačili smerovi sila
        napetosti koje deluju na okvir. Unutar okvira, a paralelno sa žicama se
        postavljaju i potporna rebra čija je funkcija da dodatno ojačaju metalni
        okvir.
      </p>

      <h2>ŽICE KLAVIRA:</h2>
      <p>
        Izvor zvuka klavira jesu čelične žice zakačene za okvir instrumenta.
        Kako bi se dobili visoki i niski tonovi na instrumentu, a ovo je pravilo
        koje generalno važi za sve žičane instrumente, žice su različite dužine.
        Drugim rečima, što je žica kraća, ton je viši, i što je žica duža, ton
        je dublji. Naravno, dužina žice nije jedini element koji utiče na visinu
        tona, i ako bi se pribeglo isključivo takvoj specifikaciji, instrument
        bi bio dosta veći. Na primer, dok se kod visokih tonova zvuk dobija na
        dužini žice od nekoliko centimetara ili nekoliko desetina centimetara,
        tonovi najdublje oktave bi iziskivali dužinu žice od nekoliko metara ili
        desetina metara, što nije praktično. Kako bi se rešio ovakav problem,
        uzima se identična debljina žice od par milimetara koja se dalje omotava
        bakarnom niti. Na taj način, što su tonovi dublji, žica je duža ali je i
        debljina omota oko žice veći. Obzirom da kratka žica, na primer iz
        četvrte oktave daje slabiji zvuk u odnosu na dužu žicu iz velike oktave,
        potrebno je dalje izjednačiti jačinu i trajanje tonova različitih
        registara. Za najdublje tonove (od A2 do Fis1) koristi se jedna žica. Za
        registar od G1 do Ais se koriste po dve žice, dok se za ostale tonove
        (od H do c5) koristi po jedna žica (ukupno 228 žica). Žice koje se
        nalaze u registrima koji zahtevaju po dve ili tri žice za jedan ton se
        štimuju unisono. Na primer, za ton C iz velike oktave se obe žice
        štimuju na visinu C.
      </p>
      <h2>KLAVIJATURA</h2>
      <p>
        Prednji deo instrumenta, do izvođača, zauzima klavijatura po kojoj se
        svira, dok se iza nje nalazi sistem čekića. Dirke instrumenta, kojih ima
        88, su građene od drveta, ranije oblagane oplatom od slonove kosti, ali
        često mogu biti i drugi materijali. Najčešće se sastoji od sistema belih
        dirki koje predstavljaju tonove C dur lestvice, dok crne dirke
        predstavljaju enharmonske polustepene (temperovane).
      </p>
      <h2>MEHANIZAM ČEKIĆA</h2>
      <p>
        Mehanizam čekića je srce instrumenta u pogledu dobijanja tona i
        predstavlja veoma precizne proračune i konstrukciju. Svaki čekić (kojih
        u klaviru ima koliko i žica) se sastoji od drvenog štapića čiji je kraj
        obložen filcom i koji pritiskom na dirku udara o žicu. Postoje dva
        standardna mehanizma koja se razliku po pitanju konstrukcije i
        mogućnosti: • Nemačka mehanika (bečka mehanika) kod koje nakon pritiska
        dirke, čekić udara o žicu i vraća u prvobitan položaj. Ovakav mehanizam
        ne dozvoljava ponovno sviranje istog tona ukoliko se dirka mehaničkim
        putem ne pusti, odnosno ne vrati u prvobitan položaj i ponovo pritisne.
        • Engleska mehanika kod koje čekić nije u direktnoj vezi sa dirkom pa se
        samim tim može dobiti isti ton čak i ako se dirka ne pusti potpuno.
        Ovakav mehanizam se naziva i repeticiona mehanika.
      </p>
      <h2>PRIGUŠIVAČI</h2>
      <p>
        Prigušivač predstavlja sastavni deo mehanizma a njegova uloga jeste da
        ne dozvoli mešanje zvukova. Kada se dirka pritisne, prigušivač se udalji
        od žice kako bi omogućio vibriranje žice nakon udara čekića o nju. Kada
        se dirka otpusti, prigušivač prilazi žici čime se vibriranje zaustavlja
        i zvučanje prestaje.
      </p>

      <h2>MEHANIZAM PEDALA</h2>
      <p>
        Sistem pedala i njihov broj zavisi od konstrukcije samog klavira.
        Koncertni i polukoncertni klaviri najčešće broje tri pedala dok mali
        klavir – pianino ima (najčešće) dva pedala. 1. Desni pedal – forte pedal
        ima za ulogu podizanje svih prigušivača sa svih žica unutar klavira.
        Ovakvim mehanizmom se omogućuje žici da nastavi da zvuči iako se dirka
        fizički otpusti i vrati u prvobitan položaj. Drugi naziv u vidu forte
        pedala se odnosi na to da u trenutku udara čekića o žicu, sve žice
        počiću da vibriraju, omogućujući alikvotama da dođu do izražaja čime se
        sveukupan zvuk pojačava. 2. Levi pedal – piano pedal pomera celokupan
        mehanizam (sa čekićima) par milimetara u desnu stranu čime čekić ne
        udara dve, odnosno tri žice po tonu, već jednu, odnosno dve. Obzirom da
        čekić udara manji broj žica i dobijeni ton zvuči tiše. 3. Srednji pedal
        – zadržavajući pedal ne postoji na svim tipovima klavira, a po ulozi je
        sličan levom pedalu i jedini je koji može imati tri položaja: • Početni,
        u kome nema nikakav udeo u zvuku; • Pritisnuti, u kome noga pritiska
        pedal u drugi položaj (kao što bi se pritisnuo levi ili desni pedal); •
        “Zaglavljeni”, pri kome se pedal fizički nagazi i postavi u treći
        položaj nakon koga izvođač ne mora naknadno da pritiska i otpušta pedal.
        Njegova uloga je da zadrži prigušivače u odignutom položaju jedino onih
        žica čije su dirke pritisnute (razlika u odnosu na desni pedal).
      </p>
    </div>
  );
}
