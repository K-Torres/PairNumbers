import { ChangeEvent, FormEvent, useState } from "react";
import "./algorithmSolver.css";

function Algorithm() {
    const [numbersValue, setNumbersValue] = useState('');
    const [targetValue, setTargetValue] = useState<number | string>("");
    const [pairsNumbers, setPairsNumbers] = useState<number[][] | null>(null);

    const handleNumbersChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const sanitizedValue = value.replace(/[^-,\d]|,,+/g, '');
        setNumbersValue(sanitizedValue);
    };

    const handleTargetChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const sanitizedValue = value.replace(/[^0-9]+/g, '');
        setTargetValue(+sanitizedValue);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setPairsNumbers(findPairs())
    };

    const handleClear = () => {
        setPairsNumbers(null)
        setTargetValue("")
        setNumbersValue('')
    };

    const findPairs = () => {
        const nums: number[] = numbersValue.split(",").map(Number);
        const pairs: number[][] = [];
        const complements: { [key: number]: boolean } = {};

        for (const num of nums) {
            const complement = (targetValue as number) - num;
            if (complements[complement]) {
                pairs.push([num, complement]);
            }
            complements[num] = true;
        }
        return pairs;
    };

    return (
        <div className="containeer">

            <div className="result">

                {pairsNumbers && <span>
                    {pairsNumbers.map(pair => (
                        `(${pair[0]} , ${pair[1]})`
                    ))}
                </span>}
                {!pairsNumbers && <span>
                    Please, field the inputs
                </span>}
            </div>

            <form onSubmit={handleSubmit}>
                <div className="inputBox">
                    <input type="text"
                        aria-label="Enter numbers separated by commas"
                        value={numbersValue}
                        onChange={handleNumbersChange}
                        required />
                    <span>Enter numbers separated by commas </span>
                </div>

                <div className="inputBox">
                    <input type="text"
                        aria-label="Target sum"
                        value={targetValue}
                        onChange={handleTargetChange}
                        required />
                    <span>Target sum</span>
                </div>

                <div>
                    <button
                        type="button" onClick={handleClear} className="button">
                        clear
                    </button>

                    <button type="submit" className="button">
                        result
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Algorithm
