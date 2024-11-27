export default function Button() {
    return <button onClick={()=> alert('Click')}>Click Me</button>
}

export  function FancyButton() {
    return <button onClick={()=> alert('Click1')}>Click Me</button>
}

export  function SmallButton() {
    return <button onClick={()=> alert('Click2')}>Click Me</button>
}