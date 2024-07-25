function Random(){
    let myName = 'Aman'
    let num = Math.random() * 100;
    return <div>
        <p>Hello, my name is {myName}.
            this is message number {Math.round(num)}
        </p>
        
    </div>
}
export default Random;