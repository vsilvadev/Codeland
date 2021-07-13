import { createContext, ReactNode, useState } from "react";

type inputValueType = string;

type SearchContextProviderProps = {
    children: ReactNode;
}

type SearchContextType = {
    input: inputValueType,
    onChangeInput: (value: string) => void,
}

export const SearchContext = createContext({} as SearchContextType);

export function SearchContextProvider(props: SearchContextProviderProps) {
    const [inputValue, setInputValue] = useState<inputValueType>("") 

    function onChangeInput(value: string) {
        setInputValue(value);
    }

    return(
        <SearchContext.Provider value={{input: inputValue, onChangeInput}}>
            {props.children}
        </SearchContext.Provider>
    )
}