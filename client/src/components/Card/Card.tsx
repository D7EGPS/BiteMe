interface Props {
    img: string
    detail: string
}
export default function Card({ img, detail }: Props) {
    return (
        <article>
            <img src={img} alt={detail} />
            <section>
                <p>{detail}</p>
            </section>
        </article>)
}