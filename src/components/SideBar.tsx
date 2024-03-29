import { useEffect, useState, memo, useCallback } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

type GenreResponse = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  onClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({onClickButton, selectedGenreId}: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponse[]>([]);

  useEffect(() => {
    api.get<GenreResponse[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              idBtn={genre.id}
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClickButton={onClickButton}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}