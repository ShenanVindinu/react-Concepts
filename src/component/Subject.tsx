export default function Subject (props : {children: React.ReactNode, name: string}) {
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.children}</p>
        </>
    )
}