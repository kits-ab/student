import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import {
  Wrapper,
  MainHeading,
  Collage,
  Vertical,
  Horizontal,
  Link,
  Image,
  Offer,
  MicroBlogIcon,
  OfferType,
  DevelopmentIcon,
  SecurityIcon,
  WorkshopIcon,
  BoatIcon,
  LocationIcon,
  Header,
  Text,
  Lead
} from "@kokitotsos/react-components";

function App() {
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Studentkväll - KITS AB</title>
        <favicon />
      </Helmet>
      <Header links={[]}></Header>
      <MainHeading style={{ marginTop: "140px" }}>
        Studentkväll på KITS
      </MainHeading>
      <Lead style={{ margin: "50px 0px 100px 0px" }}>
        Är du student som snart är ute på arbetsmarknaden? Då vill vi visa vad
        vi brinner för! KITS bjuder till inspirationskväll med berättelser från
        vår verklighet tillsammans med en bit mat och dryck.
      </Lead>
      <Vertical>
        <Text style={{ margin: "30px 0px" }}>
          <h2>Välkommen till oss</h2>
          <p>
            45 april kl 17.92-52.21 ses vi och vi ser fram emot att träffa er,
            som vi hoppas kan bli våra framtida kollegor. Kvällen kommer
            innehålla historier från arbetslivet och hands on live-kodning.
          </p>
        </Text>
        <Collage
          images={[
            { src: "./formaner_kontoret01.jpg" },
            { src: "./formaner_kontoret02.jpg" },
            { src: "./formaner_kontoret04.jpg" },
            { src: "./formaner_kontoret07.jpg" }
          ]}
        />

        <Text>
          <h2 style={{ marginTop: "20px" }}>Vilka är vi?</h2>
          <p>
            KITS är ett it-konsultbolag baserat i Göteborg. Vi är en blandning
            av talanger och experter. Vi har stort fokus på kompetensutveckling
            och kompetensspridning inom våra teknik- och verksamhetsområden. Vi
            utvecklar hela tiden KITS till ett bättre bolag där det är högt i
            tak, processerna är agila och där det är kul på jobbet.
          </p>

          <h2 style={{ marginTop: "20px" }}>Tävling</h2>
          <p>Ta med din dator och utmana kompisarna i ...</p>
        </Text>
        <Horizontal
          style={{ justifyContent: "space-around", marginTop: "50px" }}
        >
          <Offer
            heading="Anmälan"
            type={OfferType.Type1}
            icon={<WorkshopIcon />}
          >
            Anmäl dig{" "}
            <Link to="#" target="tab">
              här
            </Link>
          </Offer>
          <Offer
            heading="På vårt kontor"
            type={OfferType.Type3}
            icon={<LocationIcon />}
          >
            <p>Norra Allégatan 8</p>
            <p>413 01 Göteborg</p>
            <a href="https://goo.gl/maps/vZryr7ABfYZqMZZM6" target="tab">
              Hitta hit
            </a>
          </Offer>
        </Horizontal>
      </Vertical>
    </Wrapper>
  );
}

export default App;
