import React from 'react';

import Main from '../layouts/Main';
import Adsense from '../components/Ads/Adsense';

const Index = () => (
  <Main
    description="A website devoted to side hustles"
  >
    <article className="post" id="index">
      <p>
        Welcome to the website, where we explore the world of side hustles!
        Whether you&apos;re looking to make extra income, turn your passion into profit,
        or simply discover new opportunities, you&apos;re in the right place.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/sidehustlerchallenger/website">here</a>.
      </p>
      <Adsense
        client="ca-pub-1624894773021175" // Replace with your own AdSense client ID
        slot="XXXXXXXXXX" // Replace with your AdSense slot ID
        format="auto" // Ad format
        responsive="true" // If you want responsive ads
      />
    </article>
  </Main>
);

export default Index;
