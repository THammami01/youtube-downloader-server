# Youtube Downloader

## Description

An Express.js app that downloads youtube audios/videos using ytdl-core NPM package.

## Example

GET `http://localhost:3000/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF_oOtaxb0L8`:

```json
{
  "title": "NestJs Course for Beginners - Create a REST API",
  "thumbnail": "https://i.ytimg.com/vi_webp/GHTA143_b-s/maxresdefault.webp",
  "duration": "13329",
  "audios": [
    {
      "mimeType": "audio/mp4; codecs=\"mp4a.40.2\"",
      "qualityLabel": null,
      "bitrate": 143260,
      "audioBitrate": 128,
      "itag": 140,
      "url": "https://rr1---sn-u0opnp5o5-u0ol.googlevideo.com/videoplayback?expire=1677233140&ei=lDf4Y5GcB5qjmLAP2Z6S6AM&ip=197.17.4.140&id=o-AIEcyS2QnZE60Knj6HPqtw9x8tHC2blrJxwpE9XraYUb&itag=140&source=youtube&requiressl=yes&mh=9B&mm=31%2C29&mn=sn-u0opnp5o5-u0ol%2Csn-hgn7rnls&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=220000&vprv=1&mime=audio%2Fmp4&ns=khj7xMjWpvqh6LJ2gPBe9FcL&gir=yes&clen=215708469&dur=13328.555&lmt=1663510545072756&mt=1677211262&fvip=5&keepalive=yes&fexp=24007246&c=WEB&txp=5532434&n=YXlIacKLAjl3Og&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgbZvhL2jZnhYaqxlmy_x2KYMK9D7xeoEPMKjE4uCASh8CIQCQdz1BP3HvoqXIAoQib6DJdZ7OCCQqqnOGYYrw75k13Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMWCGMyWuptf_7vhyRBefIJSALrafGR9bW9qWFp5JBOAAiEAjQQKtZXXixHxK4GGWpkUT4VU_6OAdFWme-P5VK8l9b4%3D",
      "initRange": {
        "start": "0",
        "end": "631"
      },
      "indexRange": {
        "start": "632",
        "end": "16683"
      },
      "lastModified": "1663510545072756",
      "contentLength": "215708469",
      "quality": "tiny",
      "projectionType": "RECTANGULAR",
      "averageBitrate": 129471,
      "highReplication": true,
      "audioQuality": "AUDIO_QUALITY_MEDIUM",
      "approxDurationMs": "13328555",
      "audioSampleRate": "44100",
      "audioChannels": 2,
      "loudnessDb": -3.0599995,
      "hasVideo": false,
      "hasAudio": true,
      "container": "mp4",
      "codecs": "mp4a.40.2",
      "videoCodec": null,
      "audioCodec": "mp4a.40.2",
      "isLive": false,
      "isHLS": false,
      "isDashMPD": false
    },
    {
      "mimeType": "audio/webm; codecs=\"opus\"",
      "qualityLabel": null,
      "bitrate": 133256,
      "audioBitrate": 160,
      "itag": 251,
      "url": "https://rr1---sn-u0opnp5o5-u0ol.googlevideo.com/videoplayback?expire=1677233140&ei=lDf4Y5GcB5qjmLAP2Z6S6AM&ip=197.17.4.140&id=o-AIEcyS2QnZE60Knj6HPqtw9x8tHC2blrJxwpE9XraYUb&itag=251&source=youtube&requiressl=yes&mh=9B&mm=31%2C29&mn=sn-u0opnp5o5-u0ol%2Csn-hgn7rnls&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=220000&vprv=1&mime=audio%2Fwebm&ns=khj7xMjWpvqh6LJ2gPBe9FcL&gir=yes&clen=179873737&dur=13328.521&lmt=1663512416586171&mt=1677211262&fvip=5&keepalive=yes&fexp=24007246&c=WEB&txp=5532434&n=YXlIacKLAjl3Og&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJK2GZVFta7FBy3qQgT134PdG2omvlltcSUam06vnPpkAiAxpDoDnJAF0EIHOREyOpE5OgY_shwrZd8R-HWX3WiFrw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMWCGMyWuptf_7vhyRBefIJSALrafGR9bW9qWFp5JBOAAiEAjQQKtZXXixHxK4GGWpkUT4VU_6OAdFWme-P5VK8l9b4%3D",
      "initRange": {
        "start": "0",
        "end": "258"
      },
      "indexRange": {
        "start": "259",
        "end": "24127"
      },
      "lastModified": "1663512416586171",
      "contentLength": "179873737",
      "quality": "tiny",
      "projectionType": "RECTANGULAR",
      "averageBitrate": 107963,
      "audioQuality": "AUDIO_QUALITY_MEDIUM",
      "approxDurationMs": "13328521",
      "audioSampleRate": "48000",
      "audioChannels": 2,
      "loudnessDb": -3.0599995,
      "hasVideo": false,
      "hasAudio": true,
      "container": "webm",
      "codecs": "opus",
      "videoCodec": null,
      "audioCodec": "opus",
      "isLive": false,
      "isHLS": false,
      "isDashMPD": false
    },
    {
      "mimeType": "audio/webm; codecs=\"opus\"",
      "qualityLabel": null,
      "bitrate": 79123,
      "audioBitrate": 64,
      "itag": 250,
      "url": "https://rr1---sn-u0opnp5o5-u0ol.googlevideo.com/videoplayback?expire=1677233140&ei=lDf4Y5GcB5qjmLAP2Z6S6AM&ip=197.17.4.140&id=o-AIEcyS2QnZE60Knj6HPqtw9x8tHC2blrJxwpE9XraYUb&itag=250&source=youtube&requiressl=yes&mh=9B&mm=31%2C29&mn=sn-u0opnp5o5-u0ol%2Csn-hgn7rnls&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=220000&vprv=1&mime=audio%2Fwebm&ns=khj7xMjWpvqh6LJ2gPBe9FcL&gir=yes&clen=98694409&dur=13328.521&lmt=1663512417060479&mt=1677211262&fvip=5&keepalive=yes&fexp=24007246&c=WEB&txp=5532434&n=YXlIacKLAjl3Og&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgYcNiLV7tAOqwHHP1RPDWsK5w6PhWQ9BnOjM_XVa7HqwCIDN6Y7p1K4hpYbs_kq69pL6haZcTyyM6RzHsRizM-qKY&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMWCGMyWuptf_7vhyRBefIJSALrafGR9bW9qWFp5JBOAAiEAjQQKtZXXixHxK4GGWpkUT4VU_6OAdFWme-P5VK8l9b4%3D",
      "initRange": {
        "start": "0",
        "end": "258"
      },
      "indexRange": {
        "start": "259",
        "end": "24024"
      },
      "lastModified": "1663512417060479",
      "contentLength": "98694409",
      "quality": "tiny",
      "projectionType": "RECTANGULAR",
      "averageBitrate": 59238,
      "audioQuality": "AUDIO_QUALITY_LOW",
      "approxDurationMs": "13328521",
      "audioSampleRate": "48000",
      "audioChannels": 2,
      "loudnessDb": -3.0599995,
      "hasVideo": false,
      "hasAudio": true,
      "container": "webm",
      "codecs": "opus",
      "videoCodec": null,
      "audioCodec": "opus",
      "isLive": false,
      "isHLS": false,
      "isDashMPD": false
    },
    {
      "mimeType": "audio/webm; codecs=\"opus\"",
      "qualityLabel": null,
      "bitrate": 70321,
      "audioBitrate": 48,
      "itag": 249,
      "url": "https://rr1---sn-u0opnp5o5-u0ol.googlevideo.com/videoplayback?expire=1677233140&ei=lDf4Y5GcB5qjmLAP2Z6S6AM&ip=197.17.4.140&id=o-AIEcyS2QnZE60Knj6HPqtw9x8tHC2blrJxwpE9XraYUb&itag=249&source=youtube&requiressl=yes&mh=9B&mm=31%2C29&mn=sn-u0opnp5o5-u0ol%2Csn-hgn7rnls&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=220000&vprv=1&mime=audio%2Fwebm&ns=khj7xMjWpvqh6LJ2gPBe9FcL&gir=yes&clen=83972613&dur=13328.521&lmt=1663512416714927&mt=1677211262&fvip=5&keepalive=yes&fexp=24007246&c=WEB&txp=5532434&n=YXlIacKLAjl3Og&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgHkxmNxT7MKARnWRTdIvepmcZz-bJngfPDCQkDsT6HOgCIQDyeHLnJR3MdpzP76HkQ8MSy3HDLbnQjUmmHav_drd0NA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMWCGMyWuptf_7vhyRBefIJSALrafGR9bW9qWFp5JBOAAiEAjQQKtZXXixHxK4GGWpkUT4VU_6OAdFWme-P5VK8l9b4%3D",
      "initRange": {
        "start": "0",
        "end": "258"
      },
      "indexRange": {
        "start": "259",
        "end": "23984"
      },
      "lastModified": "1663512416714927",
      "contentLength": "83972613",
      "quality": "tiny",
      "projectionType": "RECTANGULAR",
      "averageBitrate": 50401,
      "audioQuality": "AUDIO_QUALITY_LOW",
      "approxDurationMs": "13328521",
      "audioSampleRate": "48000",
      "audioChannels": 2,
      "loudnessDb": -3.0599995,
      "hasVideo": false,
      "hasAudio": true,
      "container": "webm",
      "codecs": "opus",
      "videoCodec": null,
      "audioCodec": "opus",
      "isLive": false,
      "isHLS": false,
      "isDashMPD": false
    }
  ],
  "videos": [
    {
      "mimeType": "video/mp4; codecs=\"avc1.64001F, mp4a.40.2\"",
      "qualityLabel": "720p",
      "bitrate": 222734,
      "audioBitrate": 192,
      "itag": 22,
      "url": "https://rr1---sn-u0opnp5o5-u0ol.googlevideo.com/videoplayback?expire=1677233140&ei=lDf4Y5GcB5qjmLAP2Z6S6AM&ip=197.17.4.140&id=o-AIEcyS2QnZE60Knj6HPqtw9x8tHC2blrJxwpE9XraYUb&itag=22&source=youtube&requiressl=yes&mh=9B&mm=31%2C29&mn=sn-u0opnp5o5-u0ol%2Csn-hgn7rnls&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=220000&vprv=1&mime=video%2Fmp4&ns=_7t3XeshgeYt19MS-Sq1Gu0L&cnr=14&ratebypass=yes&dur=13328.555&lmt=1673609586147265&mt=1677211262&fvip=5&fexp=24007246&c=WEB&txp=5532434&n=m95m_QLTeqoAeQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAI0CoTugYhhfKFQ8y45rN15drQZbhUIbNHa4DsCc-4-hAiACflV4XiXk3Bt5DlNYVRyVF-TlbciroA0e5BRm_U3TIA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMWCGMyWuptf_7vhyRBefIJSALrafGR9bW9qWFp5JBOAAiEAjQQKtZXXixHxK4GGWpkUT4VU_6OAdFWme-P5VK8l9b4%3D",
      "width": 1280,
      "height": 720,
      "lastModified": "1673609586147265",
      "quality": "hd720",
      "fps": 30,
      "projectionType": "RECTANGULAR",
      "audioQuality": "AUDIO_QUALITY_MEDIUM",
      "approxDurationMs": "13328555",
      "audioSampleRate": "44100",
      "audioChannels": 2,
      "hasVideo": true,
      "hasAudio": true,
      "container": "mp4",
      "codecs": "avc1.64001F, mp4a.40.2",
      "videoCodec": "avc1.64001F",
      "audioCodec": "mp4a.40.2",
      "isLive": false,
      "isHLS": false,
      "isDashMPD": false
    },
    {
      "mimeType": "video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"",
      "qualityLabel": "360p",
      "bitrate": 175612,
      "audioBitrate": 96,
      "itag": 18,
      "url": "https://rr1---sn-u0opnp5o5-u0ol.googlevideo.com/videoplayback?expire=1677233140&ei=lDf4Y5GcB5qjmLAP2Z6S6AM&ip=197.17.4.140&id=o-AIEcyS2QnZE60Knj6HPqtw9x8tHC2blrJxwpE9XraYUb&itag=18&source=youtube&requiressl=yes&mh=9B&mm=31%2C29&mn=sn-u0opnp5o5-u0ol%2Csn-hgn7rnls&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=220000&vprv=1&mime=video%2Fmp4&ns=_7t3XeshgeYt19MS-Sq1Gu0L&cnr=14&ratebypass=yes&dur=13328.555&lmt=1664496079280932&mt=1677211262&fvip=5&fexp=24007246&c=WEB&txp=5538434&n=m95m_QLTeqoAeQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAM7Fn5AUnx-1n-0n2c-x6paYkglD9G_SfSynq0TGJcU8AiEAgPucbuTe_0m3YOgGl43f7J22FpW8yE2F21eTz3w6zxI%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMWCGMyWuptf_7vhyRBefIJSALrafGR9bW9qWFp5JBOAAiEAjQQKtZXXixHxK4GGWpkUT4VU_6OAdFWme-P5VK8l9b4%3D",
      "width": 640,
      "height": 360,
      "lastModified": "1664496079280932",
      "quality": "medium",
      "fps": 30,
      "projectionType": "RECTANGULAR",
      "audioQuality": "AUDIO_QUALITY_LOW",
      "approxDurationMs": "13328555",
      "audioSampleRate": "44100",
      "audioChannels": 2,
      "hasVideo": true,
      "hasAudio": true,
      "container": "mp4",
      "codecs": "avc1.42001E, mp4a.40.2",
      "videoCodec": "avc1.42001E",
      "audioCodec": "mp4a.40.2",
      "isLive": false,
      "isHLS": false,
      "isDashMPD": false
    }
  ]
}
```
