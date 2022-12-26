const Events = () => {
    const hadleyMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };

    return (
    <div>
        <div>
        <button onClick={hadleyMyEvent} type="submit">Clique Aqui!</button>
        </div>
        
    </div>
    )
}

export default Events;