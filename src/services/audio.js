export function getAudioFiles() {
    return fetch(`${process.env.REACT_APP_JEANTBOT_API_URL}/audio/files`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}