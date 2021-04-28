import React, { useState } from 'react';

const Army = (ArmyMen, shot) => {
    function NewMen() {
        const [gunshot, setGunshot] = useState(0);
        let handleGunshots = () => {
            setGunshot(gunshot + shot)
        }
        return (<ArmyMen hocgunname="AK47" hocgunshots={gunshot} hochandleGunshots={handleGunshots}/>)
    }
    return NewMen;
}

export default Army;