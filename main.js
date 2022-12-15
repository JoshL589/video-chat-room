const APP_ID = "7ad793b2a4e746f1b987bcdf9f07ff55";
const TOKEN =
  "007eJxTYJi8/XLPb5Owj0/+fbC6Xszz76a9dtWVVYvfnnrIVRRlarJHgcE8McXc0jjJKNEk1dzELM0wydLCPCk5Jc0yzcA8Lc3U9EPRrOSGQEaG1jsTWBgZIBDEZ2HITczMY2AAAKHFJBA=";
const CHANNEL = "main";

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

let localTracks = [];
let remoteUsers = {};
