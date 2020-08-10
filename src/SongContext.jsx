import React, {createContext } from 'react';


export const SongContent = createContext();





export const SongProvider = (props)=>{
  return(
        <SongContent.Provider value="">
            {props.children}
        </SongContent.Provider>
    )
}

