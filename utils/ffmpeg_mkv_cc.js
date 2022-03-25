/**
 * merge mkv and cc to new mkv file
 * see more in chinese https://crifan.github.io/media_process_ffmpeg/website/subtitle/embed/
 */
let ass = `1.ass
2.ass`.split('\n');

`1.mkv
2.mkv`.split('\n').forEach((mkv, i) => {
  console.log(`ffmpeg -i "${mkv}" -i "${'' + ass[i]}" -codec copy -map 0 -map 1 "../S1/${'xxxx S1E' + (i + 1)}.mkv"`)
})