'use client'

import Script from "next/script"
import Adsense from "./Adsense"

export default function HomeAd() {

  const adClient = "ca-pub-7707750014819434";
  const homeAdSlot = "8083460066"

  return <div className="bg-gray-100 min-h-60 flex justify-center items-center">

    <h1>Home Ad here</h1>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7707750014819434"
      crossOrigin="anonymous"></Script>

    <ins className="adsbygoogle flex"
      data-ad-client="ca-pub-7707750014819434"
      data-ad-slot="8083460066"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({ });
    </script>
  </div>
}