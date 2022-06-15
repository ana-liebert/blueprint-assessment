import {useState, useEffect} from "react";

const Exercise2 = () => {

    //Fetching data from the given blueprint URL ----->
    const URL = "https://blueprintinteractive.com/test.json/";

    //Utilizing useState, and useEffect to update the table asychrounously ----->
    const [table, setTable] = useState({})

    //Utilizing an async/await function for simple syntax to fetch the data, and update the state ----->
    const getData = async () => {
        const response = await fetch(URL)

    //Note** for json data I would have utilized response.json(), but it appears the URL did not contain valid json data
    //Instead, I translated the data to text, and then tranlated the text to a javascript object array calling the Function constructor, which I found as a better alternative to eval()
    //I attached a screenshot of the error message from the URL in the main directory ----->

        const data = await response.text();
        const objectArray = Function('"use strict";return (' + data + ')')();
        setTable(objectArray)
    }

    console.log("the table, " , table)

    useEffect(() => {
        getData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps




    return (
        <h1>test two</h1>
    )
}

export default Exercise2