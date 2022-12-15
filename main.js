const APP_ID = "7ad793b2a4e746f1b987bcdf9f07ff55";
const TOKEN =
  "007eJxTYJi8/XLPb5Owj0/+fbC6Xszz76a9dtWVVYvfnnrIVRRlarJHgcE8McXc0jjJKNEk1dzELM0wydLCPCk5Jc0yzcA8Lc3U9EPRrOSGQEaG1jsTWBgZIBDEZ2HITczMY2AAAKHFJBA=";
const CHANNEL = "main";

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

let localTracks = [];
let remoteUsers = {};

let joinAndDisplayLocalStream = async () => {
  let UID = await client.join(APP_ID, CHANNEL, TOKEN, null);

  localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

  let player = `<div class="video-container" id="user-container-${UID}">
<div class="video-player" id="user-${UID}"></div>
</div>`;

  document
    .getElementById("video-streams")
    .insertAdjacentElement("beforeend", player);

  localTracks[1].play(`user-${UID}`);

  await client.publish([localTracks[0], localTracks[1]]);
};

let joinStream = async () => {
  await joinAndDisplayLocalStream();
  document.getElementById("join-btn").style.display = "none";
  document.getElementById("stream-controls").style.display = "flex";
};

document.getElementById("join-btn").addEventListener("click", joinStream);
