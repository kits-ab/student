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
            name="description"
            content="Studentkväll - KITS AB, 8 maj kl 17-20"
          ></meta>
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
        <Text style={{ margin: "0px 0px" }}>
          <h2>Välkommen</h2>
          <p>
            8 maj kl 17-20 ser vi fram emot att träffa er, som vi hoppas kan bli
            våra framtida kollegor. Kvällen kommer innehålla historier från
            arbetslivet, live-kodning och kanske en liten tävling.
          </p>
        </Text>
        <Vertical>
          <Offer
            style={{ margin: "70px 10px 70px 10px", padding: "0px 15px" }}
            heading="Vilka är vi?"
            type={OfferType.Type1}
            icon={<WorkshopIcon />}
          >
            <p>
              KITS är ett it-konsultbolag baserat i Göteborg. Vi är en blandning
              av talanger och experter. Vi har stort fokus på kompetens och
              utvecklar hela tiden KITS till ett bättre bolag där det är högt i
              tak, processerna är agila och där det är kul på jobbet.
            </p>
          </Offer>
          {/* <Collage images={[{ src: "./nyheter_iot-bb8.jpg" }]} />
          <Collage images={[{ src: "./formaner_kontoret07.jpg" }]} /> */}
          {/* <Text>
            <h2 style={{ marginTop: "20px" }}>Anmälan</h2>
          </Text> */}
          <Offer
            style={{ margin: "0px 30px 40px 25px" }}
            heading="Anmäl och hitta"
            type={OfferType.Type4}
            icon={<LocationIcon />}
          >
            <p>
              Anmäl dig{" "}
              <Link
                to="https://forms.office.com/Pages/ResponsePage.aspx?id=nZx1MSeJDUOavM9Jb8hUKej6SRLTVBlJuGoLX11jJD9UMEVPVUYyR1U3OFJJRk1XVVJKQVk1V1o0SC4u"
                target="tab"
              >
                här
              </Link>
            </p>
            <p>
              <a href="https://goo.gl/maps/vZryr7ABfYZqMZZM6" target="tab">
                Hitta till oss
              </a>
            </p>
            {/* <p>Norra Allégatan 8</p>
            <p>413 01 Göteborg</p>
            <a href="https://goo.gl/maps/vZryr7ABfYZqMZZM6" target="tab">
              Hitta hit
            </a> */}
          </Offer>
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
