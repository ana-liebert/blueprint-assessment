const Exercise1 = () => {

    let problemOne = [44, 154, 32, 41, 7, 22, 17, 21, 9, 20];
    let problemTwo = [22, 14, 3, 5, 667, 19, 2, 41, 9, 70];

    const randomize = (array) => {
        for (let i = array.length - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let swap = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = swap;
        }
    }
    
    const findMean = (array) => {
        let sum = 0
        let mean = 0
        for (let i = 0; i < array.length; i++) {
            console.log(array[i])
            sum += array[i]
        }
        mean = Math.floor(sum / array.length)
        return mean
    }
    
    randomize(problemOne)
    
    return (
        <div>
            <div>
                <h5>1. Randomize the number set [44, 154, 32, 41, 7, 22, 17, 21, 9, 20] --{'> '}
                    [{problemOne.map((result) => (
                        <span> {result},</span>
                    ))}] </h5>
                    
                <h5>2. Find the mean of [22, 14, 3, 5, 667, 19, 2, 41, 9, 70] --{'> '}
                    {findMean(problemTwo)} </h5>
            </div>
        </div>
    )
}

export default Exercise1