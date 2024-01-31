
function Javascript() {
    const time = new Date().getHours();
    console.log(time < 12);

    return (
        <>
        {time < 12 && <p className="morning"> Good morning Christian </p> }
        {time > 16 && <p className="afternoon"> Good afternoon Christian </p>}
        {time > 24 && <p className="evening"> Good evening Christian</p> }
    


        
        </>
    )
}

export default Javascript;