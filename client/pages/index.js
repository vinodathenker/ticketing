import axios from "axios";
const LandingPage = ({ color }) => {
  return <h1>Landing Page</h1>;
};
LandingPage.getInitialProps = async ({ req }) => {
  console.log("I am on sever");

  return { color: "red" };
};
export default LandingPage;
