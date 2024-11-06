'use client'

import { useEffect } from "react";

export default function Adsense({ dataAdSlot, dataAdClient }: { dataAdSlot: string, dataAdClient: string }) {

  useEffect(() => {
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);


  return <div>
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={dataAdClient}
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
}