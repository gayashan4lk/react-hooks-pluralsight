import React, { useEffect } from 'react';

const useEffectSyntax = () => {

    const [checkBoxValue, setCheckBoxValue] = useState(false);

    useEffect(() => {
        console.log("This is useEffect");
        return () => {
            console.log("this is return func of useEffect");
        }
    },[]);

    return (
        <div></div>
    );
}
 
export default useEffectSyntax;