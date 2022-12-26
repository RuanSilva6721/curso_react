const TemplateExpressions = () => {
    const name = "Ruan";
    const data= {
        age: 21,
        job: "Programmer",
    }
    return (
        <div>
            <h1>olá {name}, tudo bem?</h1>
            <p>{data.job}</p>

        </div>
    )
}

export default TemplateExpressions;