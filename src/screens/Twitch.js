import React, { useState } from "react";
import { Container, Button } from 'react-bootstrap';
import { subscribeUser } from '../subscriptions'
import { Header } from '../components'

function Twitch() {
    const [audioCmp, setAudioCmp] = useState()
    const [didInteract, setDidInteract] = useState(false)

    const turnOnPushNotifications = () => {
        subscribeUser()
        setDidInteract(true)

        const broadcast = new BroadcastChannel('audio-channel');
        broadcast.onmessage = (event) => {
            if (event.data) {
                setAudioCmp(<div></div>)
                setTimeout(() => {
                    setAudioCmp(
                        <div>
                            Playing {event.data.audioSrc}...done!
                            <video autoPlay hidden>
                                <source src={event.data.audioSrc} type="audio/mpeg" />
                            </video>
                        </div>
                    )
                }, 1000)
            }
        }
    }

    return (
        <div className="Main">
        <Header />
        <Container>
            { didInteract ?
                audioCmp :
                <Button onClick={turnOnPushNotifications}>Start Receiving Push Events!</Button>
            }
        </Container>
        </div>
    )
}

export { Twitch };
