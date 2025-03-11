"use client";
import { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkPageReady = () => {
      if (document.readyState === "complete") {
        setLoading(false);
      }
    };
    checkPageReady();
    window.addEventListener("load", checkPageReady);

    return () => {
      window.removeEventListener("load", checkPageReady);
    };
  }, []);

  if (loading) {
    return (
      <div id="container">
        <span className="loading-circle sp1">
          <span className="loading-circle sp2">
            <span className="loading-circle sp3"></span>
          </span>
        </span>
      </div>
    );
  }

  return null;
}
