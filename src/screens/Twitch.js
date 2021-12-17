import React, { useState, useEffect } from "react";
import { Container, Button } from 'react-bootstrap';
import { subscribeUser } from '../services/subscriptions';
import { getAudioFiles } from '../services/audio';
import { Header } from '../components';

function Twitch() {
    const [audioCmp, setAudioCmp] = useState(<div></div>);
    const [didInteract, setDidInteract] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [pushAudioFileName, setPushAudioFileName] = useState('')

    useEffect(() => {
        (async () => {
            const files = await (await getAudioFiles()).json();
            setFileList(files);
        })()
    }, [])

    const loadSoundEffect = (e) => {
        playSoundEffect({ audioSrc: `/audio/${e.target.name}` }, true)
    }

    const playSoundEffect = (data, manualLoad) => {
        setPushAudioFileName('')
        setAudioCmp(<div></div>)
        setTimeout(() => {
            setPushAudioFileName(data.audioSrc)
            setAudioCmp(
                <div>
                    <video autoPlay hidden>
                        <source src={data.audioSrc} type="audio/mpeg" />
                    </video>
                </div>
            )
        }, 1000)
    }

    const turnOnPushNotifications = () => {
        subscribeUser()
        setDidInteract(true)

        const broadcast = new BroadcastChannel('audio-channel');
        broadcast.onmessage = (event) => {
            if (event.data) {
                playSoundEffect(event.data, false)
            }
        }
    }

    return (
        <div className="Main">
            <Header />
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Container>
                    <h2>List of Sound Effects</h2>
                    <p>updated 12/1/21</p>
                    <ul> 
                        {fileList.length ? fileList.map((fileName, i) => {
                            return (
                                <li key={i}><a href="#1" onClick={loadSoundEffect} name={fileName}>{fileName}</a></li>
                            )
                        }): null}
                    </ul>
                </Container>
                <Container>
                    { !didInteract ?
                        <Button onClick={turnOnPushNotifications}>Start Receiving Push Events!</Button>
                        : null
                    }
                    {pushAudioFileName ? <div>Playing {pushAudioFileName}...done!</div> : null}
                    {audioCmp}
                </Container>
            </div>
        </div>
    )
}

export { Twitch };
