const express = require("express");
const ytdl = require("ytdl-core");

const app = express();

app.get("/", async (req, res) => {
  const info = await ytdl.getInfo(req.query.url);

  const audios = [];
  const videos = [];

  info.formats
    .filter((format) => format.hasAudio)
    .forEach((format) =>
      format.mimeType.includes("audio")
        ? audios.push(format)
        : videos.push(format)
    );

  return res.send({
    title: info.videoDetails.title,
    thumbnail:
      info.videoDetails.thumbnails[info.videoDetails.thumbnails.length - 1].url,
    duration: info.videoDetails.lengthSeconds,
    audios,
    videos,
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
