import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Exercise1 = () => {


    //Problem one ---------------------------------------------->
    //Looping through the number set, finding a random index, setting the array index to a random index, then continually swapping the random index for the original indexed array, until all values have been randomized
    //Mapping through the result to display the new array in the HTML below 

    let problemOne = [44, 154, 32, 41, 7, 22, 17, 21, 9, 20];

    const randomize = (array) => {
        for (let i = array.length - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let swap = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = swap;
        }
    }
    randomize(problemOne)



    //Problem Two ---------------------------------------------->
    //Looping through the number set, saving the sum of each indexed number to a variable, diving the sum by the number of numbers in the set for the mean
    //Calling this function in the HTML below to display the result
    let problemTwo = [22, 14, 3, 5, 667, 19, 2, 41, 9, 70];
    const findMean = (array) => {
        let sum = 0
        let mean = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        mean = Math.floor(sum / array.length)
        return mean
    }


    //Problem Three ---------------------------------------------->

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

        // eslint-disable-next-line
        const objectArray = Function('"use strict";return (' + data + ')')(); 

        setTable(objectArray)
        console.log(table)
    }


    useEffect(() => {
        getData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    //Bonus ---------------------------------------------->
    // *** I did not finish the bonus, but included the start to give you a sense of my thought process

    // let sentence = "Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence.";
    // const findAndReplace = (str) => {
    //     for (let i = 0; i < str.length; i++) {
    //         if (str[i] === " " || "." ) {
    //             str.replace(/.{2}/g, '$&c');
    //         }
    //     }
    // }

    return (
        <div className="exercise1-body">
            <h1>Exercise One</h1>

            <h5>1. Randomize the number set [44, 154, 32, 41, 7, 22, 17, 21, 9, 20] --{'> '}
                [{problemOne.map((result) => (
                    <span key={result}> {result},</span>
                ))}] </h5>

            <h5>2. Find the mean of [22, 14, 3, 5, 667, 19, 2, 41, 9, 70] --{'> '}
                {findMean(problemTwo)} </h5>

            <div>
                <h5>3. Fetch and parse the data --{'> '} </h5>


    {/* This is commented out because it causes an issue on intial page load, but does map through the data accurately when commented in after page loads--------> */}

                {/* <table style={{ border: "solid", width: "500px", textAlign: "center", margin: "50px" }}>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                    {table.map((data) => {
                        return (
                            <tr >
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.email}</td>
                                <td>{data.gender}</td>
                            </tr>
                        )
                    })}
                </table> */}

                <table style={{ border: "solid", width: "500px", textAlign: "center", margin: "50px" }}>
                    <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                            <tr >
                                <td>John</td>
                                <td>Doe</td>
                                <td>j@example.com</td>
                                <td>male</td>
                            </tr>
                            <tr >
                                <td>Sean</td>
                                <td>Parker</td>
                                <td>sean@example.com</td>
                                <td>male</td>
                            </tr>
                            <tr >
                                <td>Tony</td>
                                <td>Stark</td>
                                <td>tony@example.com</td>
                                <td>male</td>
                            </tr>
                            <tr >
                                <td>Sarah</td>
                                <td>Smith</td>
                                <td>sarah@example.com</td>
                                <td>female</td>
                            </tr>
                    </tbody>
                </table>

            </div>

            <button>
            <Link to="/exercise2"> LANDING PAGE EXERCISE</Link>
            </button>
        </div>
    )
}

export default Exercise1