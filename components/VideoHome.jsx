import React, { memo } from "react";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";
import TransparentBtn from "./TransparentBtn";
import PrimaryBtn from "./PrimaryBtn";

// Memoizing to prevent re-renders
const VideoHome = memo(() => {
  const t = useTranslations("HomePage");
  return (
    <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat md:mt-10 md:mx-10 md:rounded-[40px] px-4">
      <Navbar />
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          id="myVideo"
          loading="lazy"
        >
          <source src="/herogb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto sm:px-6 lg:px-8 py-[150px] sm:py-[150px] md:py-[240px] text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-secondary sm:text-lg md:text-xl font-semibold">
            {t("title")}
          </h3>
          <h2 className="text-3xl sm:text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-secondary mt-2">
            {t("maintitle")}
          </h2>
          <p className="text-white text-lg lg:text-xl mt-4">
            {t("description")}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div>
              <PrimaryBtn
                href="/contact"
                text={t("getstarted")}
                datatranslatekey="primary_btn_text1"
              />
            </div>
            <div>
              <TransparentBtn
                href="/client-projects"
                text={t("viewprojects")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default VideoHome;
