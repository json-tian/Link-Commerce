import React from "react";
import {
  Page,
  Card,
  DisplayText,
  Stack,
  MediaCard,
  DescriptionList,
  FooterHelp,
  Link,
} from "@shopify/polaris";
import { postSignin } from "../utils/controller";
import { gapi } from "gapi-script";
import { useState, useEffect } from "react";
import Login from "./Login";

function Home({ setUser}) {

  return (
    <Page title="Link Commerce" primaryAction={<Login setUser={setUser} />}>
      <Stack vertical spacing="loose">
        <Stack distribution="center">
          <DisplayText size="extraLarge">
            Selling online has never been easier.
          </DisplayText>
        </Stack>

        <MediaCard
          title="Getting Started"
          description="See how easy it is to sell online with Link Commerce. We'll help you get started.  We'll walk you through the process of creating your store, and we'll even help you set up your first product."
        >
          <img
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg"
          />
        </MediaCard>
        <Card title="Take it to the next level with Link Commerce" sectioned>
          <DescriptionList
            spacing="loose"
            items={[
              {
                term: "Code-free",
                description:
                  "Link Commerce is a code-free platform. You don't need to learn any code to use it. You can use it on any device, anywhere. Link Commerce is the best way to sell online.",
              },
              {
                term: "Get started in minutes",
                description:
                  "We have a simple setup process that will get you up and running in minutes. Get your store set up and ready to sell online.",
              },
              {
                term: "Support",
                description:
                  "Link Commerce has a friendly support team that is always available to help you with any questions you may have. We're here to help you.",
              },
            ]}
          />{" "}
        </Card>
      </Stack>
      <FooterHelp>
        Ready to start selling? <Link url="">Register today</Link>
      </FooterHelp>
    </Page>
  );
}

export default Home;
