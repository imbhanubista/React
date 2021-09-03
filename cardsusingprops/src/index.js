import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';

ReactDOM.render(
  <>
  <h1 className="heading">Cards Demo Using Props</h1>
<Card
imgsrc="https://picsum.photos/id/870/250/300?grayscale&blur=2"
sname="Bistaify"
title="Facebook Page"
link="https://www.facebook.com/crewbelaka"
/>
<Card 
imgsrc="https://picsum.photos/seed/picsum/250/300"
sname="You can hit Follow Button here"
title="imbhanubista"
link="https://twitter.com/imbhanubista"
/>
<Card 
imgsrc="https://picsum.photos/250/300"
sname="Subscribe my Channel"
title="Bistaify"
link="https://www.youtube.com/channel/UCMO-j7bhE1MyrIgyBqQwoyQ"
/>

</>,
  document.getElementById('root')
);
