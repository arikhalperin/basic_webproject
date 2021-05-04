import React, { useEffect, useMemo, useState } from 'react';
import {observer, Provider} from 'mobx-react';
import rootStores from "../../../BL/stores";
import {LoadingProvider} from "../../react-contexts/LoadingContext";
import BlockUi from "react-block-ui";
import styles from "../App.module.scss";



const TeslaPage = observer(() => {
    return (<>
        <div style={{fontSize:'64px', color:"white", padding:'200px'}}>
            Tesla
        </div>
    </>)
})

export default TeslaPage;
