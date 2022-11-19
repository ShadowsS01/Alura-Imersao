export interface PlaylistProps {
  playlists: {
    [key: string]: {
      id: number;
      youtube_id: string;
      title: string;
      url: string;
      thumb: string;
      playlist: string;
      created_at: Date;
    }[];
  };
}
