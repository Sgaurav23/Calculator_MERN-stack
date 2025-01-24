// import React, { useState, useEffect } from "react";

// import axios from 'axios';

// const API_URL = 'https://luminous-resonant-feels.glitch.me/history';

// function Calculator() {
//     const [input, setInput] = useState('');
//     const [result, setResult] = useState('');
//     const [history, setHistory] = useState([]);
//     const [showHistory, setShowHistory] = useState(false);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false); // Add loading state
//     const [autoCalculate, setAutoCalculate] = useState(true); // Toggle for auto calculation

//     useEffect(() => {
//         axios.get(API_URL)
//             .then(response => setHistory(response.data))
//             .catch(err => console.error('Error fetching history:', err));
//     }, []);

//     const clear = () => {
//         setInput('');
//         setResult('');
//         setError('');
//     };

//     const toggleHistory = () => {
//         setShowHistory(!showHistory);
//     };

//     const toggleAutoCalculate = () => {
//         setAutoCalculate(!autoCalculate);
//     };

//     const calculate = async (input) => {
//         setLoading(true); // Set loading state to true
//         try {
//             setError('');
//             let res;
//             if (input.includes('log')) {
//                 res = Math.log10(parseFloat(input.split('log')[1])).toString();
//             } else if (input.includes('sin')) {
//                 const degrees = parseFloat(input.split('sin')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.sin(radians).toString();
//             } else if (input.includes('cos')) {
//                 const degrees = parseFloat(input.split('cos')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.cos(radians).toString();
//             } else if (input.includes('tan')) {
//                 const degrees = parseFloat(input.split('tan')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.tan(radians).toString();
//             } else {
//                 res = eval(input).toString();
//             }
//             setTimeout(() => { // Simulate a delay
//                 setResult(res);
//                 setLoading(false); // Set loading state to false after delay
//                 const newEntry = { expression: input, result: res };
//                 axios.post(API_URL, newEntry).then(response => {
//                     setHistory(prevHistory => [...prevHistory, newEntry]);
//                 }).catch(err => {
//                     console.error('Error updating history:', err);
//                 });
//             }, 500); // Adjust delay duration as needed
//             return res;
//         } catch (err) {
//             setError('Invalid input');
//             setLoading(false); // Set loading state to false if there's an error
//             return '';
//         }
//     };

//     const handleChange = (val) => {
//         const newInput = input + val;
//         setInput(newInput);
//         if (autoCalculate) {
//             calculate(newInput); // Update result dynamically if autoCalculate is enabled
//         }
//     };

//     const submitResult = async () => {
//         try {
//             const res = calculate(input);
//             if (res) {
//                 const newEntry = { expression: input, result: res };
//                 await axios.post(API_URL, newEntry);
//                 setHistory(prevHistory => [...prevHistory, newEntry]);
//             }
//         } catch (err) {
//             console.error('Error saving result:', err);
//         }
//     };

//     const clearHistory = async () => {
//         try {
//             await axios.delete(API_URL);
//             setHistory([]);
//         } catch (err) {
//             console.error('Error clearing history:', err);
//         }
//     };

//     return (
//         <div className="calculator">
//             <h1 class="title">Calculator</h1>
//             <input type="text" value={input} readOnly placeholder="input" />
//             <input type="text" value={loading ? "Loading..." : result} readOnly placeholder="result" />
//             {error && <p className="error">{error}</p>}
//             <div className="buttons">
//                 {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '/', 'log', 'sin', 'cos', 'tan'].map((btn) => (
//                     <button
//                         className={btn.match(/[0-9]/) ? "numeric" :
//                                    btn.match(/[+\-*/]/) ? "algebraic" :
//                                    btn.match(/(log|sin|cos|tan)/) ? "trigonometric" : 
//                                    "function"}
//                         onClick={() => handleChange(btn)}
//                         key={btn}
//                     >
//                         {btn}
//                     </button>
//                 ))}
//                 <button className="function" onClick={clear}>clear</button>
//                 <button className="function" onClick={submitResult}>=</button>
//                 <button className="function" onClick={clearHistory}>clrHtry</button>
//                 <button className="function" onClick={toggleHistory}>histry</button>
//                 <button className="auto" onClick={toggleAutoCalculate}>
//                     {autoCalculate ? "Disable Auto Calculate" : "Enable Auto Calculate"}
//                 </button>
//             </div>
//             {showHistory && (
//                 <div className="history">
//                     <h2>History</h2>
//                     <ul>
//                         {history.map((item, index) => (
//                             <li key={index}>
//                                 {item.expression} = {item.result}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Calculator;











// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// // import './calculator.css';

// const API_URL = 'https://luminous-resonant-feels.glitch.me/history';

// function Calculator() {
//     const [input, setInput] = useState('');
//     const [result, setResult] = useState('');
//     const [history, setHistory] = useState([]);
//     const [showHistory, setShowHistory] = useState(false);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false); // Add loading state
//     const [autoCalculate, setAutoCalculate] = useState(true); // Toggle for auto calculation

//     useEffect(() => {
//         axios.get(API_URL)
//             .then(response => setHistory(response.data))
//             .catch(err => console.error('Error fetching history:', err));
//     }, []);

//     const clear = () => {
//         setInput('');
//         setResult('');
//         setError('');
//     };

//     const toggleHistory = () => {
//         setShowHistory(!showHistory);
//     };

//     const toggleAutoCalculate = () => {
//         setAutoCalculate(!autoCalculate);
//     };

//     const calculate = async (input) => {
//         setLoading(true); // Set loading state to true
//         try {
//             setError('');
//             let res;
//             if (input.includes('log')) {
//                 res = Math.log10(parseFloat(input.split('log')[1])).toString();
//             } else if (input.includes('sin')) {
//                 const degrees = parseFloat(input.split('sin')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.sin(radians).toString();
//             } else if (input.includes('cos')) {
//                 const degrees = parseFloat(input.split('cos')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.cos(radians).toString();
//             } else if (input.includes('tan')) {
//                 const degrees = parseFloat(input.split('tan')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.tan(radians).toString();
//             } else {
//                 res = eval(input).toString();
//             }
//             setTimeout(() => { // Simulate a delay
//                 setResult(res);
//                 setLoading(false); // Set loading state to false after delay
//                 const newEntry = { expression: input, result: res };
//                 axios.post(API_URL, newEntry).then(response => {
//                     setHistory(prevHistory => [...prevHistory, newEntry]);
//                 }).catch(err => {
//                     console.error('Error updating history:', err);
//                 });
//             }, 500); // Adjust delay duration as needed
//             return res;
//         } catch (err) {
//             setError('Invalid input');
//             setLoading(false); // Set loading state to false if there's an error
//             return '';
//         }
//     };

//     const handleChange = (val) => {
//         const newInput = input + val;
//         setInput(newInput);
//         if (autoCalculate) {
//             calculate(newInput); // Update result dynamically if autoCalculate is enabled
//         }
//     };

//     const submitResult = async () => {
//         try {
//             const res = calculate(input);
//             if (res) {
//                 const newEntry = { expression: input, result: res };
//                 await axios.post(API_URL, newEntry);
//                 setHistory(prevHistory => [...prevHistory, newEntry]);
//             }
//         } catch (err) {
//             console.error('Error saving result:', err);
//         }
//     };

//     const clearHistory = async () => {
//         try {
//             await axios.delete(API_URL);
//             setHistory([]);
//         } catch (err) {
//             console.error('Error clearing history:', err);
//         }
//     };

//     return (
//         <div className="calculator">
//             <h1 class="title">Calculator</h1>
//             <input type="text" value={input} readOnly placeholder="input" />
//             <input type="text" value={loading ? "Loading..." : result} readOnly placeholder="result" />
//             {error && <p className="error">{error}</p>}
//             <div className="buttons">
//                 {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '/', 'log', 'sin', 'cos', 'tan'].map((btn) => (
//                     <button
//                         className={btn.match(/[0-9]/) ? "numeric" :
//                                    btn.match(/[+\-*/]/) ? "algebraic" :
//                                    btn.match(/(log|sin|cos|tan)/) ? "trigonometric" : 
//                                    "function"}
//                         onClick={() => handleChange(btn)}
//                         key={btn}
//                     >
//                         {btn}
//                     </button>
//                 ))}
//                 <button className="function" onClick={clear}>clear</button>
//                 <button className="function" onClick={submitResult}>=</button>
//                 <button className="function" onClick={clearHistory}>clrHtry</button>
//                 <button className="function" onClick={toggleHistory}>histry</button>
//                 <button className="auto" onClick={toggleAutoCalculate}>
//                     {autoCalculate ? "Disable Auto Calculate" : "Enable Auto Calculate"}
//                 </button>
//             </div>
//             {showHistory && (
//                 <div className="history">
//                     <h2>History</h2>
//                     <ul>
//                         {history.map((item, index) => (
//                             <li key={index}>
//                                 {item.expression} = {item.result}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Calculator;























// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// // import './calculator.css';

// const API_URL = 'https://luminous-resonant-feels.glitch.me/history';

// function Calculator() {
//     const [input, setInput] = useState('');
//     const [result, setResult] = useState('');
//     const [history, setHistory] = useState([]);
//     const [showHistory, setShowHistory] = useState(false);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false); // Add loading state
//     const [autoCalculate, setAutoCalculate] = useState(true); // Toggle for auto calculation

//     useEffect(() => {
//         axios.get(API_URL)
//             .then(response => setHistory(response.data))
//             .catch(err => console.error('Error fetching history:', err));
//     }, []);

//     const clear = () => {
//         setInput('');
//         setResult('');
//         setError('');
//     };

//     const toggleHistory = () => {
//         setShowHistory(!showHistory);
//     };

//     const toggleAutoCalculate = () => {
//         setAutoCalculate(!autoCalculate);
//     };

//     const calculate = async (input) => {
//         setLoading(true); // Set loading state to true
//         try {
//             setError('');
//             let res;
//             if (input.includes('log')) {
//                 res = Math.log10(parseFloat(input.split('log')[1])).toString();
//             } else if (input.includes('sin')) {
//                 const degrees = parseFloat(input.split('sin')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.sin(radians).toString();
//             } else if (input.includes('cos')) {
//                 const degrees = parseFloat(input.split('cos')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.cos(radians).toString();
//             } else if (input.includes('tan')) {
//                 const degrees = parseFloat(input.split('tan')[1]);
//                 const radians = (Math.PI / 180) * degrees;
//                 res = Math.tan(radians).toString();
//             } else {
//                 res = eval(input).toString();
//             }
//             setTimeout(() => { // Simulate a delay
//                 setResult(res);
//                 setLoading(false); // Set loading state to false after delay
//                 const newEntry = { expression: input, result: res };
//                 axios.post(API_URL, newEntry).then(response => {
//                     setHistory(prevHistory => [...prevHistory, newEntry]);
//                 }).catch(err => {
//                     console.error('Error updating history:', err);
//                 });
//             }, 500); // Adjust delay duration as needed
//             return res;
//         } catch (err) {
//             setError('Invalid input');
//             setLoading(false); // Set loading state to false if there's an error
//             return '';
//         }
//     };

//     const handleChange = (val) => {
//         const newInput = input + val;
//         setInput(newInput);
//         if (autoCalculate) {
//             calculate(newInput); // Update result dynamically if autoCalculate is enabled
//         }
//     };

//     const submitResult = async () => {
//         try {
//             const res = calculate(input);
//             if (res) {
//                 const newEntry = { expression: input, result: res };
//                 await axios.post(API_URL, newEntry);
//                 setHistory(prevHistory => [...prevHistory, newEntry]);
//             }
//         } catch (err) {
//             console.error('Error saving result:', err);
//         }
//     };

//     const clearHistory = async () => {
//         try {
//             await axios.delete(API_URL);
//             setHistory([]);
//         } catch (err) {
//             console.error('Error clearing history:', err);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-[#1C1C1C] flex flex-col justify-end overflow-hidden">
//         <div className="w-full max-w-md mx-auto bg-[#2D2D2D] rounded-t-3xl shadow-2xl p-6 overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-track-[#1C1C1C] scrollbar-thumb-[#00FFF5]/50">
//             {/* Display */}
//             <div className="bg-[#1C1C1C] rounded-2xl p-4 mb-6 sticky top-0 z-10 backdrop-blur-lg">
//                 <input 
//                     type="text" 
//                     value={input} 
//                     readOnly 
//                     className="w-full bg-transparent text-[#00FFF5] text-right text-lg mb-1 font-mono"
//                     placeholder="0"
//                 />
//                 <input 
//                     type="text" 
//                     value={loading ? "Calculating..." : result} 
//                     readOnly 
//                     className="w-full bg-transparent text-[#00FFF5] text-right text-3xl font-bold font-mono"
//                     placeholder="0"
//                 />
//             </div>
    
//             {/* Controls */}
//             <div className="space-y-4">
//                 <div className="grid grid-cols-3 gap-3">
//                     <button 
//                         onClick={toggleAutoCalculate}
//                         className={`${autoCalculate ? 'bg-[#00FFF5]/20 text-[#00FFF5] ring-1 ring-[#00FFF5]/50' : 'bg-[#1C1C1C] text-gray-400'} 
//                         px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-[#00FFF5]/30`}
//                     >
//                         Auto: {autoCalculate ? 'ON' : 'OFF'}
//                     </button>
//                     <button 
//                         onClick={toggleHistory}
//                         className="bg-[#1C1C1C] text-[#00FFF5] px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-[#00FFF5]/20 ring-1 ring-[#00FFF5]/50"
//                     >
//                         History
//                     </button>
//                     <button 
//                         onClick={clearHistory}
//                         className="bg-[#1C1C1C] text-[#FF00E5] px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-[#FF00E5]/20"
//                     >
//                         Clear
//                     </button>
//                 </div>
    
//                 {/* History Panel */}
//                 {showHistory && (
//                     <div className="bg-[#1C1C1C] rounded-2xl p-4">
//                         <div className="flex justify-between items-center mb-3">
//                             <h2 className="text-[#00FFF5] text-lg font-medium">Calculation History</h2>
//                             <button 
//                                 onClick={toggleHistory}
//                                 className="text-[#FF00E5] text-sm hover:text-[#FF00E5]/80"
//                             >
//                                 Close
//                             </button>
//                         </div>
//                         <div className="max-h-48 overflow-y-auto space-y-2">
//                             {history.map((item, index) => (
//                                 <div 
//                                     key={index}
//                                     className="bg-[#2D2D2D] p-3 rounded-xl text-[#00FFF5] font-mono text-sm"
//                                 >
//                                     {item.expression} = {item.result}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}
    
//                 {/* Rest of calculator buttons */}
//                 <div className="grid grid-cols-4 gap-2">
//                     {['sin', 'cos', 'tan', 'log'].map(btn => (
//                         <button
//                             key={btn}
//                             onClick={() => handleChange(btn)}
//                             className="bg-[#1C1C1C] text-[#FF00E5] p-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-[#FF00E5]/20"
//                         >
//                             {btn}
//                         </button>
//                     ))}
//                 </div>
    
//                 <div className="grid grid-cols-4 gap-2">
//                     {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '.', '0', '=', '+'].map((btn) => (
//                         <button
//                             key={btn}
//                             onClick={() => btn === '=' ? calculate(input) : handleChange(btn)}
//                             className={`
//                                 ${btn === '=' 
//                                     ? 'bg-[#00FFF5]/20 text-[#00FFF5] ring-1 ring-[#00FFF5]/50 hover:bg-[#00FFF5]/30' 
//                                     : btn.match(/[0-9.]/) 
//                                         ? 'bg-[#1C1C1C] text-white hover:bg-white/10' 
//                                         : 'bg-[#1C1C1C] text-[#FF00E5] hover:bg-[#FF00E5]/20'
//                                 }
//                                 p-4 rounded-xl text-xl font-medium transition-all duration-300
//                                 shadow-lg hover:shadow-[#00FFF5]/10
//                             `}
//                         >
//                             {btn}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     );
    
// }

// export default Calculator;






















import React, { useState, useEffect } from "react";
import axios from 'axios';
import './calculator.css'; // Ensure you have Tailwind CSS included in your project

const API_URL = 'https://luminous-resonant-feels.glitch.me/history';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const [autoCalculate, setAutoCalculate] = useState(true); // Toggle for auto calculation

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setHistory(response.data))
            .catch(err => console.error('Error fetching history:', err));
    }, []);

    const clear = () => {
        setInput('');
        setResult('');
        setError('');
    };

    const toggleHistory = () => {
        setShowHistory(!showHistory);
    };

    const toggleAutoCalculate = () => {
        setAutoCalculate(!autoCalculate);
    };

    const calculate = async (input) => {
        setLoading(true); // Set loading state to true
        try {
            setError('');
            let res;
            if (input.includes('log')) {
                res = Math.log10(parseFloat(input.split('log')[1])).toString();
            } else if (input.includes('sin')) {
                const degrees = parseFloat(input.split('sin')[1]);
                const radians = (Math.PI / 180) * degrees;
                res = Math.sin(radians).toString();
            } else if (input.includes('cos')) {
                const degrees = parseFloat(input.split('cos')[1]);
                const radians = (Math.PI / 180) * degrees;
                res = Math.cos(radians).toString();
            } else if (input.includes('tan')) {
                const degrees = parseFloat(input.split('tan')[1]);
                const radians = (Math.PI / 180) * degrees;
                res = Math.tan(radians).toString();
            } else {
                res = eval(input).toString();
            }
            setTimeout(() => { // Simulate a delay
                setResult(res);
                setLoading(false); // Set loading state to false after delay
                const newEntry = { expression: input, result: res };
                axios.post(API_URL, newEntry).then(response => {
                    setHistory(prevHistory => [...prevHistory, newEntry]);
                }).catch(err => {
                    console.error('Error updating history:', err);
                });
            }, 500); // Adjust delay duration as needed
            return res;
        } catch (err) {
            setError('Invalid input');
            setLoading(false); // Set loading state to false if there's an error
            return '';
        }
    };

    const handleChange = (val) => {
        const newInput = input + val;
        setInput(newInput);
        if (autoCalculate) {
            calculate(newInput); // Update result dynamically if autoCalculate is enabled
        }
    };

    const submitResult = async () => {
        try {
            const res = calculate(input);
            if (res) {
                const newEntry = { expression: input, result: res };
                await axios.post(API_URL, newEntry);
                setHistory(prevHistory => [...prevHistory, newEntry]);
            }
        } catch (err) {
            console.error('Error saving result:', err);
        }
    };

    const clearHistory = async () => {
        try {
            await axios.delete(API_URL);
            setHistory([]);
            setInput('')
            setResult('')
        } catch (err) {
            console.error('Error clearing history:', err);
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-[#c79393]">
            <div className="w-full max-w-md mx-auto glass p-6 overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-track-[#e0e0e0] scrollbar-thumb-[#00FFF5]">
                {/* Display */}
                <div className="bg-[#ffffff7a] rounded-2xl p-4 mb-6 sticky top-0 z-10 backdrop-blur-lg">
                    <input 
                        type="text" 
                        value={input} 
                        readOnly 
                        className="w-full bg-transparent text-[#333] text-right text-lg mb-1 font-mono"
                        placeholder="0"
                    />
                    <input 
                        type="text" 
                        value={loading ? "Calculating..." : result} 
                        readOnly 
                        className="w-full bg-transparent text-[#333] text-right text-3xl font-bold font-mono"
                        placeholder="0"
                    />
                </div>
        
                {/* Controls */}
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                        <button 
                            onClick={toggleAutoCalculate}
                            className={`${autoCalculate ? 'bg-[#e73970] text-[#00FFF5] ring-1 ring-[#00FFF5]/50' : 'bg-[#ffffff] text-gray-400'} 
                            px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-[#00FFF5]/30`}
                        >
                            Auto: {autoCalculate ? 'ON' : 'OFF'}
                        </button>
                        <button 
                            onClick={toggleHistory}
                            className="bg-[#e73970] text-[#00FFF5] px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-[#00FFF5]/20 ring-1 ring-[#00FFF5]/50"
                        >
                            History
                        </button>
                        <button 
                            onClick={clearHistory}
                            className="bg-[#e73970] text-[#00FFF5] px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-[#FF00E5]/20"
                        >
                            Clear
                        </button>
                    </div>
        
                    {/* History Panel */}
                    {showHistory && (
                        <div className="bg-[#ffffff] rounded-2xl p-4">
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-[#00FFF5] text-lg font-medium">Calculation History</h2>
                                <button 
                                    onClick={toggleHistory}
                                    className="text-[#FF00E5] text-sm hover:text-[#FF00E5]/80"
                                >
                                    Close
                                </button>
                            </div>
                            <div className="max-h-48 overflow-y-auto space-y-2">
                                {history.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="bg-[#48b3a0] p-3 rounded-xl text-[#feffff] font-mono text-sm"
                                    >
                                        {item.expression} = {item.result}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
        
                    {/* Rest of calculator buttons */}
                    <div className="grid grid-cols-4 gap-2">
                        {['sin', 'cos', 'tan', 'log'].map(btn => (
                            <button
                                key={btn}
                                onClick={() => handleChange(btn)}
                                className="bg-[rgb(190,76,163)] text-[#f4cfcf] p-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-[#FF00E5]/20"
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
        
                    <div className="grid grid-cols-4 gap-2">
                        {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '.', '0', '=', '+'].map((btn) => (
                            <button
                                key={btn}
                                onClick={() => btn === '=' ? calculate(input) : handleChange(btn)}
                                className={`p-4 rounded-xl text-xl font-medium transition-all duration-300
                                    ${btn === '=' 
                                        ? ' bg-[#b37ee8] text-[#ffffff] ring-1 ring-[#00FFF5]/50 hover:bg-[#00FFF5]/30' 
                                        : btn.match(/[0-9.]/) 
                                            ? 'bg-[#ffffff] text-[#333] hover:bg-[#e0e0e0]' 
                                            : 'bg-[#9d40d7] text-[#c8e5ff] hover:bg-[#FF00E5]/20'
                                    }`}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
