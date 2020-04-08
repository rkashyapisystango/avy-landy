import React, { useState, useEffect } from 'react';
import { startConference } from 'utils/jitsi-helper';
import { ContainerStyle, JitsiContainerStyle } from './style';

const LiveMeetConf = (props) => {
    const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI || window.exports.JitsiMeetExternalAPI; 
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const { match } = props;
        const { params } = match;
        if(params && params.id !== "") {
            if (window.JitsiMeetExternalAPI) {
                startConference(
                {
                    JitsiMeetExternalAPI, 
                    setLoading,
                    params,
                    redirectFun,
                });
            }
            else {
                alert('Jitsi Meet API script not loaded');
            }
        }
    }, []);

    const  redirectFun = () => {
        props.history.push(`/`);
    }
    return (
        <ContainerStyle
        >
        	{loading && <p>Loading</p>}
            <JitsiContainerStyle id="jitsi-container" />
        </ContainerStyle>
    )
}

export default LiveMeetConf;