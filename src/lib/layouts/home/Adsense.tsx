'use client'

import { useEffect } from "react";
import FreestarAdSlot from '@freestar/pubfig-adslot-react-component'


export default function Adsense({ dataAdSlot, dataAdClient }: { dataAdSlot: string, dataAdClient: string }) {

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.adsbygoogle) {
  //     window.adsbygoogle.push({});
  //   }
  // }, []);

  const placementName = 'PublisherName_970x250_728x90_320x50'
    const slotId = 'in_content_ad_1'
    const publisher = 'publisherName'
    const targeting = { key1: 'value1', key2: 'value2' }
    


  return <div>
    <div data-freestar-ad="__336x280 __970x250 __640x360"
      id="fifarosters_leaderboard_atf"
      data-google-query-id="CMnJ-87yx4kDFS48RAgdFVsIgQ" />

    <div>
      <FreestarAdSlot
        publisher={publisher}
        placementName={placementName}
        slotId={slotId}
        targeting={targeting}
        channel='custom_channel'
        classList={['m-30', 'p-15', 'b-thin-red']}
        onNewAdSlotsHook={(placementName) => console.log('creating ad', placementName)}
        onDeleteAdSlotsHook={(placementName) => console.log('destroying ad', placementName)}
        onAdRefreshHook={(placementName) => console.log('refreshing ad', placementName)}
      />
     
    </div>
  </div>
}