export interface PlaylistProps {
  playlists: {
    [key: string]: {
      id: number;
      title: string;
      url: string;
      thumb: string;
      playlist: string;
      created_at: Date;
    }[];
  };
}
