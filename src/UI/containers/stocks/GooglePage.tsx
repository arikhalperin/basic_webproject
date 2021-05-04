import React, { useEffect, useMemo, useState } from 'react';
import {observer, Provider} from 'mobx-react';
import rootStores from "../../../BL/stores";
import {LoadingProvider} from "../../react-contexts/LoadingContext";
import BlockUi from "react-block-ui";
import styles from "../App.module.scss";
import GoogleStore from "../../../BL/stores/Google.store";
import {GOOGLE_STORE} from "../../../BL/consts/store";


const googleStore: GoogleStore = rootStores[GOOGLE_STORE];


const GooglePage = observer(() => {
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = React.useCallback(() => {
        setIsLoading(true);
        googleStore.getStock("google", () => {
            setIsLoading(false);
        });
    }, []);

    return (<>
        <div style={{fontSize:'64px', color:"white", padding:'200px'}}>
            Google
        </div>
    </>)
})

export default GooglePage;
