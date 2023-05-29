import React from 'react';
import CoreNavigation from "../../navigation/CoreNavigation";
import Loader from "../../components/loader/Loader";
import {useController} from "./controller";

const CoreLayout = () => {
    const {isGeneralLoading} = useController()
    return (
        <div>
            <Loader isLoading={isGeneralLoading}/>
            <CoreNavigation/>
        </div>
    );
};

export default CoreLayout;
