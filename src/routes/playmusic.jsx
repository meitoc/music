import { MusicPlayerProvider } from "../contexts/MusicPlayerContext";
import TrackList from "../modules/TrackList";
export default function PlayMusic() {

  return (
    <MusicPlayerProvider>
      <TrackList />
    </MusicPlayerProvider>
  );
}
