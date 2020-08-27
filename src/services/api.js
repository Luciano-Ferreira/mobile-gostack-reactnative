import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3334',
});

export default api;

/**
 * IOS com emulador: localhost
 * IOS com físico: IP da máquina
 * Android com emulador: localhost (utilizando adb reverse)
 * Android com emulador: 10.0.2.2 (Android Studio)
 * Android com emulador: 10.0.3.2 (Genymotion)
 * Android físico: IP da máquina
 */