import React from 'react';
import ReactPlayer from 'react-player';

export default function Reactplayer() {
  const url = [
    'https://www.youtube.com/watch?v=RoLTPcD1S4Q',
    'https://www.youtube.com/watch?v=6Ux6SlOE9Qk',
    'https://www.youtube.com/watch?v=aCyGvGEtOwc',
    'https://www.youtube.com/watch?v=Ajq4Ek-jChA',
    'https://www.youtube.com/watch?v=UNbOr0ylYZk',
    'https://www.youtube.com/watch?v=K38xNqZvBJI',
    'https://www.youtube.com/watch?v=5NV6Rdv1a3I',
    'https://www.youtube.com/watch?v=1y6smkh6c-0',
    'https://www.youtube.com/watch?v=I7HahVwYpwo',
    'https://www.youtube.com/watch?v=6_5D4y6x-oo',
    'https://www.youtube.com/watch?v=0NKUpo_xKyQ',
    'https://www.youtube.com/watch?v=fBf2v4mLM8k',
    'https://www.youtube.com/watch?v=BR_DFMUzX4E',
    'https://www.youtube.com/watch?v=IRvGZffXhfk',
    'https://www.youtube.com/watch?v=C6IT5FgrnUA',
    'https://www.youtube.com/watch?v=WpYeekQkAdc',
    'https://www.youtube.com/watch?v=WL1hlzLsUaU',
    'https://www.youtube.com/watch?v=2zNSgSzhBfM',
    'https://www.youtube.com/watch?v=hT_nvWreIhg',
    'https://www.youtube.com/watch?v=EPo5wWmKEaI',
    'https://www.youtube.com/watch?v=FMdQmlEuliE',
    'https://www.youtube.com/watch?v=kqaGZYDGcUw',
    'https://www.youtube.com/watch?v=ABzh6hTYpb8',
    'https://www.youtube.com/watch?v=i-gyZ35074k',
    'https://www.youtube.com/watch?v=7xzU9Qqdqww',
    'https://www.youtube.com/watch?v=FnEKXkGCCU8',
    'https://www.youtube.com/watch?v=2ggzxInyzVE',
    'https://www.youtube.com/watch?v=U5rLz5AZBIA',
    'https://www.youtube.com/watch?v=T-sxSd1uwoU',
    'https://www.youtube.com/watch?v=fDkFLXzwOKA',
    'https://www.youtube.com/watch?v=IxxstCcJlsc',
    'https://www.youtube.com/watch?v=dvmNgtsgAhw',
    'https://www.youtube.com/watch?v=o_1aF54DO60',
    'https://www.youtube.com/watch?v=KrVC5dm5fFc',
    'https://www.youtube.com/watch?v=-e_3Cg9GZFU',
    'https://www.youtube.com/watch?v=lAhHNCfA7NI',
    'https://www.youtube.com/watch?v=lES1SB9SqQw',
    'https://www.youtube.com/watch?v=tCwhB1_1r7I',
    'https://www.youtube.com/watch?v=JRfuAukYTKg',
    'https://www.youtube.com/watch?v=IcrbM1l_BoI',
    'https://www.youtube.com/watch?v=pxu6iQ28arw',
    'https://www.youtube.com/watch?v=crrOl0egI00',
    'https://www.youtube.com/watch?v=hHUbLv4ThOo',
    'https://www.youtube.com/watch?v=QUQsqBqxoR4',
    'https://www.youtube.com/watch?v=hneLe48CpEs',
    'https://www.youtube.com/watch?v=kYtGl1dX5qI',
    'https://www.youtube.com/watch?v=qV0LHCHf-pE',
    'https://www.youtube.com/watch?v=pHHWPTs1zxg',
    'https://www.youtube.com/watch?v=gujB7A5ycew',
    'https://www.youtube.com/watch?v=IP8OVYyuC60',
    'https://www.youtube.com/watch?v=Y66j_BUCBMY',
    'https://www.youtube.com/watch?v=UxxajLWwzqY',
    'https://www.youtube.com/watch?v=MU8B4XDI3Uw',
    'https://www.youtube.com/watch?v=Sv6dMFF_yts',
    'https://www.youtube.com/watch?v=KRaWnd3LJfs',
    'https://www.youtube.com/watch?v=4G6QDNC4jPs',
  ];

  return (
    <div className="react-player">
      <ReactPlayer
        url={url}
        width={'100%'}
        height={'100%'}
        playing={true}
        // muted={false}
        controls={true}
        loop={true}
      />
    </div>
  );
}
