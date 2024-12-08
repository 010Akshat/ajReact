// This component is for UI for upper box in project.
import React from "react";
import { useId } from "react";
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency ="usd",
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {

    // label i.e From and To will change everytime as we reusing component for both white boxes in UI.
    // So since they will change everytime and 'From' & 'To' will be many, so ensure uniqueness we can use useId.
    // Intution : let say i am using label " a" many times in my react project. So to uniquely identify each "a" in React i will use useId.
    // Without this Hook this project will run fine.

    const amountInputId = useId()   // a unique value will be generated.
    // console.log(amountInputId); // :r1: , :r2: This are some Ids shown in inspect console.
    /*
    Why Use useId?
    Avoid Collisions: Ensures IDs are unique, even when components are rendered multiple times.
    Server-Side Rendering (SSR): Provides consistency between the server-rendered output and the client-rendered DOM, preventing mismatches in attributes like id.
    Declarative and Simple: No need for manually tracking IDs or generating them yourself

    IMP: It should not be used for keys in lists.
    */
    return (
        // Here CSS is written in Js(``) so the we can use className variable, in case user wants to add its own CSS.For now it is empty.
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId} // Binded with label.(It is important to bind this with label otherwise what is the use of uniquely identyfying each label if you cannot identfy inputBox from that label) 
                                       // All this will help in optimization purpose to REACT CORE LIBRARY. 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}//  onAnountChange is just a checker that it exist or not and if it exist , execute it onAmountChange() 
                                                                                            // sometimes it takes event values in string and it takes too muc time to resolve this bug . Hence just typecast into Number()                                            
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency)=>(
                        // Remember(Interview POV): If you want to bring good performance in loop , just use key in loop. Otherwise performance is severly degraded. It was previously discussed while studying React Fibre.(Thoda sa copy me likha hai iske baare me).
                        // i.e Remember the KEY in loops in react.(Very IMP) for optimization purpose by core REACT library.
                        <option key={currency} value={currency}> 
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
