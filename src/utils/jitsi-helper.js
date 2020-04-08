export function startConference(props) {
    const { JitsiMeetExternalAPI, setLoading, params, redirectFun } = props;
    try {
    //  const domain = '35.208.134.182';
     //const domain = 'meet.jit.si';
    //  const domain = 'meet.totalrecallsolutions.com';
    const domain = 'meet.totalrecallsolutions.com';
     const options = {
      roomName: params.id,
      height: 600,
      parentNode: document.getElementById('jitsi-container'),
      interfaceConfigOverwrite: {
        filmStripOnly: false,
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        SHOW_BRAND_WATERMARK: false,
      },
      configOverwrite: {
       disableSimulcast: false,
       startWithVideoMuted: true, 
       resolution: 180,
       constraints: {
           video: {
               aspectRatio: 4 / 3,
               height: {
                   ideal: 720,
                   max: 640,
                   min: 180
               }
           }
       },
      },
     };
  
     const api = new JitsiMeetExternalAPI(domain, options);
     api.addEventListener('videoConferenceJoined', () => {
      console.log('Local User Joined');
      console.log(setLoading)
      setLoading(false);
        api.addEventListener('videoConferenceLeft', () => {
            if(redirectFun) redirectFun();
        });
    //   api.executeCommand('displayName', 'MyName');
     });

  
     console.log(api)
    //  api.leave().then((abc) => {
    //      console.log(abc, 'working')
    //  })
    } catch (error) {
        console.error('Failed to load Jitsi API', error);
    }
}