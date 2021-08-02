import React, { createContext, useState } from 'react';

export const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [folder, setFolder] = useState('Inbox');
  const [email, setEmail] = useState(null);
  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [openNewEmail, setOpenNewEmail] = useState(false);
  const [createContact, setCreateContact] = useState(false);

  return (
    <StateContext.Provider
      value={{
        folder,
        setFolder,
        email,
        setEmail,
        open,
        setOpen,
        openSettings,
        setOpenSettings,
        openFilters,
        setOpenFilters,
        openNewEmail,
        setOpenNewEmail,
        createContact,
        setCreateContact,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
