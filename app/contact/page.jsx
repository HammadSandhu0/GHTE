"use client";
import ContactUs from "@/components/ContactUs";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import Head from "next/head";
import React from "react";

const page = () => {
  const pageHeader = {
    title: "Contact Us",
    titleKey: "",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Contact Us",
        titlekey: "",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/conatctbanner.png",
  };
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.gulfhorizontele.com/contact" />
      </Head>
      <TransitionEffect />

      <PageHeader pageHeader={pageHeader} />
      <ContactUs />
    </>
  );
};

export default page;
