export default function Section(props){
    //console.log(teste)
    return (
        <section>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>

                    <ul className={props.className}>{props.children}</ul>
                </div>
            </section>
    );
}