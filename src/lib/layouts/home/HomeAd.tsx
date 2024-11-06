'use client'

import Script from "next/script"
import Adsense from "./Adsense"

export default function HomeAd() {

  const adClient = "ca-pub-7707750014819434";
  const homeAdSlot = "8083460066"

  return <div className="bg-gray-100 min-h-60 flex justify-center items-center">

    <h1>Home Ad here</h1>
    <Adsense dataAdClient={adClient} dataAdSlot={homeAdSlot} />
  </div>
}