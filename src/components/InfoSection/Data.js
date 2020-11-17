import car from "./svg-1.svg";
import money from "./svg-2.svg";
import charts from "./svg-3.svg";
export const homeObjOne = {
  id: "about",
  lightBig: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headLine: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: car,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBig: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headLine: "Login to your account at any time",
  description:
    "We have you covered no matter you are located. All you need is an internet connection and a phone or a computer",
  buttonLabel: "Learn More",
  imgStart: true,
  img: money,
  alt: "Money",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBig: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headLine: "Creating an account is extremely easy",
  description:
    "Get every set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: charts,
  alt: "charts",
  dark: false,
  primary: false,
  darkText: true,
};
