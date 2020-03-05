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
  Offer,
  OfferType,
  WorkshopIcon,
  LocationIcon,
  Header,
  Text,
  Lead,
  GlobalStyles
} from "@kokitotsos/react-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Studentkväll - KITS AB</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          ></meta>
        </Helmet>
        <Header links={[]}></Header>
        <MainHeading style={{ marginTop: "140px" }}>
          Studentkväll på KITS
        </MainHeading>
        <Lead style={{ margin: "50px 0px 100px 0px" }}>
          Är du student som snart är ute på arbetsmarknaden? Då vill vi visa vad
          vi brinner för! KITS bjuder till inspirationskväll med berättelser
          från vår verklighet tillsammans med en bit mat och dryck.
        </Lead>
        <Vertical>
          <Text style={{ margin: "30px 0px" }}>
            <h2>Välkommen till oss</h2>
            <p>
              8 maj kl 17-20 ser vi fram emot att träffa er,
              som vi hoppas kan bli våra framtida kollegor. Kvällen kommer
              innehålla historier från arbetslivet och hands on live-kodning.
            </p>
          </Text>
          <Collage images={[{ src: "./nyheter_iot-bb8.jpg" }]} />

          <Text>
            <h2 style={{ marginTop: "20px" }}>Vilka är vi?</h2>
            <p>
              KITS är ett it-konsultbolag baserat i Göteborg. Vi är en blandning
              av talanger och experter. Vi har stort fokus på
              kompetensutveckling och kompetensspridning inom våra teknik- och
              verksamhetsområden. Vi utvecklar hela tiden KITS till ett bättre
              bolag där det är högt i tak, processerna är agila och där det är
              kul på jobbet.
            </p>

            <h2 style={{ marginTop: "20px" }}>Tävling</h2>
            <p>Ta med din dator och utmana kompisarna i ...</p>
          </Text>
          {/* <Horizontal
            style={{
              justifyContent: "space-around",
              marginTop: "50px"
              // marginBottom: "250px"
            }}
          >
            <Offer
              // style={{ height: "150px" }}
              heading="Anmälan"
              type={OfferType.Type1}
              icon={<WorkshopIcon />}
            >
              Anmäl dig{" "}
              <Link
                to="https://forms.office.com/Pages/ResponsePage.aspx?id=nZx1MSeJDUOavM9Jb8hUKej6SRLTVBlJuGoLX11jJD9UMEVPVUYyR1U3OFJJRk1XVVJKQVk1V1o0SC4u"
                target="tab"
              >
                här
              </Link>
            </Offer>
            <Offer
              // style={{ height: "150px" }}
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
          </Horizontal> */}
        </Vertical>
      </Wrapper>
    </>
  );
}

export default App;
