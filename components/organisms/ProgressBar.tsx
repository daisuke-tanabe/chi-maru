import LinearProgress from '@mui/material/LinearProgress';
import Router   from 'next/router';
import React from 'react';
import sleep from '../../src/sleep';

type RouterChange = (url: string, { shallow }: { shallow: boolean }) => void
type RouterChangeError = (error: Error, url: string, { shallow }: { shallow: boolean }) => void

const ProgressBar = () => {
  const [isStarted, setIsStarted] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const routeChangeStart: RouterChange = (url, { shallow }) => {
      if (shallow) return;
      setIsStarted(true);
      setIsDone(false);
      setProgress(30);
    }

    const routeChangeComplete: RouterChange = (url, { shallow }) => {
      if (shallow) return;
      setProgress(100)
      sleep(450).then(() => {
        setIsStarted(false);
        setIsDone(true);
        setProgress(0);
      });
    }

    const routeChangeError: RouterChangeError = (error, url, { shallow }) => {
      if (shallow) return;
      setProgress(100)
      sleep(450).then(() => {
        setIsStarted(false);
        setIsDone(true);
        setProgress(0);
      });
    }

    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeComplete);
    Router.events.on('routeChangeError', routeChangeError);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart)
      Router.events.off('routeChangeComplete', routeChangeComplete);
      Router.events.off('routeChangeError', routeChangeError);
    }
  })

  return (
    <div css={
      {
        visibility: isStarted ? 'visible' : 'hidden',
        position: 'fixed',
        width: '100%'
      }
    }>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          '& > span': {
            transitionProperty: isDone ? 'none' : 'transform'
          }
        }}
      />
    </div>
  )
}

export default ProgressBar;
