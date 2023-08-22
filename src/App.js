import Card from "./components/Card";
import profile_img from "./assets/profile.png"

function App() {
  return (
    <>
      <Card
        avatar={profile_img}
        userName="Johnny's Cash"
        twitterHandle="@degenjohndoe"
        followerCount={545}
      />
    </>
  );
}

export default App;
