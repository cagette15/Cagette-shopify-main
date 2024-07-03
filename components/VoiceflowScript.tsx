import Script from 'next/script';

const VoiceflowScript = () => (
  <Script 
    id="voiceflow-script" 
    type="text/javascript"
    strategy="afterInteractive"
  >
    {`
      (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '667c81bb850150af39162ea0' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');
    `}
  </Script>
);

export default VoiceflowScript;
