"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";

import PlayerContent from "@/components/player-content";

type Props = {};

export default function Player({}: Props) {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full px-4 py-2 h-[80px]">
      <PlayerContent song={song} songUrl={songUrl} key={songUrl} />
    </div>
  );
}
