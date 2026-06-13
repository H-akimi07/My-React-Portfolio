import { createContext, useState } from "react";

export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const toggleFavorite = (project) => {
    const exists = favorites.find((p) => p.id === project.id);

    let updated;
    if (exists) {
      updated = favorites.filter((p) => p.id !== project.id);
    } else {
      updated = [...favorites, project];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;