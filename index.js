const { dlAudio } = require("youtube-exec");
const fs = require("fs");

function getLink() {
  const link = fs.readFileSync("link.txt", "UTF-8");
  const lines = link.split(/\r?\n/);
  const linkStr = lines[0];
  return linkStr;
}

async function downloadAudio(link) {
  try {
    await dlAudio({
      url: link,
      folder: "downloads", // optional, default: "youtube-exec"
      //   filename: "filename", // optional, default: video title
      quality: "best",
    });
    console.log("Audio downloaded successfully! 🔊🎉");
  } catch (err) {
    console.error("An error occurred:", err.message);
  }
}

const link = getLink();
downloadAudio(link);
