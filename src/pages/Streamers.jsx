import axios from "axios";

function Streamers() {
  const s = axios.get("https://api.twitch.tv/helix/users?login=twitchdev");
  console.log(s);
  return <div>استریمر ها</div>;
}

export default Streamers;
