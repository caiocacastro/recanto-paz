import { Alert, Slide, Snackbar } from '@mui/material';
import { useGlobalContext } from '../../hooks/globalContext';
import { useEffect } from 'react';
import { TransitionProps } from '@mui/material/transitions';

const SystemMessages = () => {
  const { systemMessages, setSystemMessages } = useGlobalContext();
  const DEFAULT_CLOSE_TIME = 2000;

  useEffect(() => {
    const timer = setTimeout(
      () =>
        setSystemMessages(systemMessages.slice(0, systemMessages.length - 1)),
      DEFAULT_CLOSE_TIME
    );

    return () => clearTimeout(timer);
  }, [setSystemMessages, systemMessages]);

  return systemMessages.map(({ message, type, show = true }) => (
    <Snackbar
      key={`${message}_${type}`}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      open={show}
      TransitionComponent={(children) => (
        <Slide {...children} direction="down" />
      )}
      onClose={() => {
        setSystemMessages(systemMessages.filter((s) => s.message === message));
        show = false;
      }}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  ));
};

export default SystemMessages;
