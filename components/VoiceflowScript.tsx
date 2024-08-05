'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import React, { useEffect, useRef, useState } from 'react';


const autoPopList:string[] = ['/search/', '/delicatessen-shop', '/the-restaurant']


const getPathname = (pathname:string):string => {
  

  if (pathname == '/search/promotions') {
    return '/default';
  }

  let isIncluded = false;
  for (let i of [...autoPopList, '/products/', '/e-shop']) {
    if (pathname.includes(i)) {
      isIncluded = true;
      break;
    }
  }

  if (isIncluded) {
    return pathname;
  } else {
    return '/default';
  }
}




const VoiceflowScript: React.FC = () => {

  const [isVoiceflowLoaded, setIsVoiceflowLoaded] = useState<boolean>(false);

  const pathname = usePathname();

  const vfWidgetRef = useRef<HTMLElement | null>(null);
  const vfLauncherRef = useRef<HTMLElement | null>(null);
  const isFirstTime = useRef<boolean>(true);
  const isOneTimeOpened = useRef<boolean>(false);
  const isEventsAttached = useRef<boolean>(false);
  const isSamePath = useRef<boolean>(false);
  const currentPathname = useRef<string>(pathname);




  const addVibrateEffect = (): void => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes vibrate {
        0% { transform: translate(0); }
        40% { transform: translate(-2px, 0px); }
        80% { transform: translate(2px, 0px); }
        100% { transform: translate(0); }
      }
      .vibrate {
        animation: vibrate 0.3s linear 10;
      }
    `;
    vfWidgetRef.current?.shadowRoot?.appendChild(style);
    vfLauncherRef.current?.classList?.add('vibrate');
  }



  const attachCloseEvent = (): void => {

    if (!isEventsAttached.current) {
      if (vfWidgetRef.current && vfWidgetRef.current.shadowRoot) {
        const header_Button_Minimzed = vfWidgetRef.current.shadowRoot.querySelectorAll('.vfrc-header--button');
        header_Button_Minimzed[1]?.addEventListener('click', () => {
          const buttonFound = vfWidgetRef.current?.shadowRoot?.querySelector('.vfrc-prompt .vfrc-button');
          if (!isEventsAttached.current) {
            buttonFound?.addEventListener('click', () => {
              isOneTimeOpened.current = false;
              isEventsAttached.current = true;
              loadVoiceflow()
            });
          }
        });
      }
    }

  }

  const loadVoiceflow = async (): Promise<void> => {
    await (window as any).voiceflow.chat.destroy();
    await (window as any).voiceflow.chat.load({
      verify: { projectID: '66ac93401c1a38b862ae80f4' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      launch: {
        event: {
          type: "launch",
          payload: { url: `https://www.cagettebkk.com${getPathname(currentPathname.current)}` }
        }
      }
    })

    vfWidgetRef.current = document.querySelector('#voiceflow-chat');
    if (vfWidgetRef.current && vfWidgetRef.current.shadowRoot) {
      vfLauncherRef.current = vfWidgetRef.current.shadowRoot.querySelector('.vfrc-launcher');
      if (vfLauncherRef.current) {
        vfLauncherRef.current.addEventListener('click', voiceflowButtonClickHandler);
        if (window.innerWidth <= 768) {
          addVibrateEffect();
        }
      }
    }

    isEventsAttached.current = false;

  }





  const interactHandler = async (pathname: string, wait: boolean) => {



    // let isOpen = false;
    // const checkIfOpen = vfWidgetRef.current.shadowRoot.querySelector('.vfrc-widget').className;
    // if (checkIfOpen.includes('withChat-true')) {
    //   isOpen = true;
    // }

    // if (!isOpen) {

    if (wait) {
      
      await new Promise((resolve) => setTimeout(resolve, currentPathname.current.includes('/search/') ? 10000 : 1000));

      if (isSamePath.current || pathname != currentPathname.current) {
        return;
      }
      await (window as any).voiceflow?.chat?.open();
    }
    // }


    attachCloseEvent();



    if (isOneTimeOpened.current) {
      
      (window as any).voiceflow.chat.interact({
        type: "launch",
        payload: { url: `https://www.cagettebkk.com${pathname}` }
      });
    }

    isOneTimeOpened.current = true;
    isSamePath.current = true;
  }



  const voiceflowButtonClickHandler = async (): Promise<void> => {

    if (isOneTimeOpened.current && !isSamePath.current) {

      let isIncluded = false;
      for (let i of [...autoPopList, '/products/', '/e-shop']) {
        if (currentPathname.current.includes(i)) {
          isIncluded = true;
          break;
        }
      }

      if (isIncluded) {
        interactHandler(currentPathname.current, false);
      } else {
        interactHandler('/default', false);
      }
    } else {
      await (window as any).voiceflow?.chat?.open();
      attachCloseEvent();
    }

    isOneTimeOpened.current = true;
    isSamePath.current = true;

  }

  useEffect(() => {


    let checkVoiceflowLoadedInterval:NodeJS.Timeout;

    (async () => {

      if (!isOneTimeOpened.current && !isFirstTime.current) {
        await loadVoiceflow();
      } else {
        await (window as any).voiceflow?.chat?.close();
      }

      if (isVoiceflowLoaded) {
        isFirstTime.current = false;
      }

      if (vfLauncherRef.current) {

        if (window.innerWidth > 768) {

          if (pathname != '/search/promotions') {
            let isIncluded = false;
            for (let i of autoPopList) {
              if (pathname.includes(i)) {
                isIncluded = true;
                break;
              }
            }
            if (isIncluded) {
              interactHandler(pathname, true);
            }
          }

        }

      } else {
        checkVoiceflowLoadedInterval = setInterval(() => {
          vfWidgetRef.current = document.querySelector('#voiceflow-chat');
          if (vfWidgetRef.current && vfWidgetRef.current.shadowRoot) {
            vfLauncherRef.current = vfWidgetRef.current.shadowRoot.querySelector('.vfrc-launcher');
            if (vfLauncherRef.current) {
              setIsVoiceflowLoaded(true);
              clearInterval(checkVoiceflowLoadedInterval);
              vfLauncherRef.current.addEventListener('click', voiceflowButtonClickHandler);
              if (window.innerWidth <= 768) {
                addVibrateEffect();
              }
            }
          }
        }, 100)
      }
    })()




    isSamePath.current = false;
    currentPathname.current = pathname;


    return () => clearInterval(checkVoiceflowLoadedInterval);

  }, [pathname, isVoiceflowLoaded])



  return (<Script
    id="voiceflow-script"
    type="text/javascript"
    strategy="afterInteractive"
  >
    {`
      (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '66ac93401c1a38b862ae80f4' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          launch: {
            event: {
              type: "launch",
              payload: { url: "https://www.cagettebkk.com${getPathname(pathname)}" }
            }
          }
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
    `}
  </Script>)

};

export default VoiceflowScript;
