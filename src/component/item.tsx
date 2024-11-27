export default function Item ({title,desc} : {title: string, desc: string}) {
    return (
        <>
            <h2>{title}</h2>
            <p>{desc}</p>
        </>
    )
}