export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  {
    id: "spinboss",
    name: "SpinBoss",
    logo: "/brands/spinboss.webp",
    rating: 10.0,
    bonus: "400% UP TO £12,750 + 400 FS",
    url: "https://spbs.lynmonkel.com/?mid=355610_2121758&subid=SpinBoss-SRJ71&clickid=",
    isMobile: true,
    votes: 14821,
  },
  {
    id: "lizaro",
    name: "Lizaro",
    logo: "/brands/lizaro.png",
    rating: 9.9,
    bonus: "350% up to £1,500 + 200 FS",
    url: "https://liro.lynmonkel.com/?mid=330950_1985162&subid=Lizaro-SRJ71&clickid=",
    isMobile: true,
    votes: 13654,
  },
  {
    id: "7abet",
    name: "7Abet",
    logo: "/brands/7ABET.svg",
    rating: 9.8,
    bonus: "Casino Welcome Bonus 300% up to £200 + 50 Free Spins to kickstart your journey!",
    url: "https://record.yoloaffiliates.com/_iPf0f63L7Qdhg6WO2I1rgWNd7ZgqdRLk/1/?s2s.req_id=7Abet-SRJ71&payload=",
    isMobile: true,
    votes: 11396,
  },
  {
    id: "bluefox-casino",
    name: "BlueFox Casino",
    logo: "/brands/BlueFox_Casino.max-600x340.webp",
    rating: 10.0,
    bonus: "WELCOME PACKAGE UP TO £1000 + 100 FREE SPINS",
    url: "https://track-otn.com/trk.php?t=1643&c=2712&clickid=",
    isMobile: false,
    votes: 4821,
  },
  {
    id: "mogobet",
    name: "MogoBet",
    logo: "/brands/mogobet.webp",
    rating: 9.9,
    bonus: "100% UP TO £200 + 20 FREE SPINS",
    url: "https://track-otn.com/trk.php?t=1641&c=2713&clickid=",
    isMobile: false,
    votes: 3654,
  },
];
