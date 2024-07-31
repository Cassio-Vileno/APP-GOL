import React, { createContext, ReactNode, useCallback, useState } from "react";
import Dialog from "../components/molecules/Dialog";

type DialogContextData = {
  visibleDialog: boolean;
  openDialog: (data: DialogData) => void;
  closeDialog: () => void;
};

type DialogProviderProps = {
  children: ReactNode;
};

type DialogData = {
  title: string;
  subtitle?: string | string[];
  buttonText?: string;
  buttonPress?: () => void;
  buttonColor?: string;
  buttonBack?: boolean;
};

const DialogContext = createContext<DialogContextData>({} as DialogContextData);

export const DialogProvider = ({ children }: DialogProviderProps) => {
  const [visibleDialog, setVisibleDialog] = useState<boolean>(false);
  const [dialogData, setDialogData] = useState<DialogData>({} as DialogData);

  const openDialog = useCallback((data: DialogData) => {
    if (data.subtitle && !Array.isArray(data.subtitle)) {
      data.subtitle = [data.subtitle];
    }

    setVisibleDialog(true);
    setDialogData(data);
  }, []);

  const closeDialog = useCallback(() => {
    setVisibleDialog(false);
  }, []);

  return (
    <DialogContext.Provider value={{ visibleDialog, openDialog, closeDialog }}>
      {children}
      <Dialog
        buttonColor={dialogData.buttonColor}
        visible={visibleDialog}
        buttonBack={dialogData.buttonBack}
        title={dialogData.title}
        subtitle={dialogData.subtitle}
        buttonText={dialogData.buttonText}
        buttonPress={dialogData.buttonPress}
        close={closeDialog}
      />
    </DialogContext.Provider>
  );
};

export default DialogContext;
