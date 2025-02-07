import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <SearchContext.Provider value={{ showSearch, setShowSearch }}>
            {children}
        </SearchContext.Provider>
    )
}
export default SearchContext