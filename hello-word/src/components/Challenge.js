const Challenge =  () => {
    const n1 = 1;
    const n2 =12;
    const numberSum = () => {
        console.log(n1 + n2);
    };

    return (
        <div>
            <button onClick={numberSum} >somar números</button>
            
        </div>
    )
}

export default Challenge;