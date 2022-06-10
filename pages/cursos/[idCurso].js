export async function getStaticPaths() {
    return {
        paths: [
            { params: { idCurso: "1" } },
            { params: { idCurso: "2" } },
            { params: { idCurso: "3" } },
            { params: { idCurso: "4" } },
        ],
        fallback: false,
    };
}

export async function getStaticProps(contexto) {
    const id = contexto.params.idCurso;
    const resposta = await fetch("http://localhost:3000/api/cursos/" + id);
    const dado = await resposta.json();
    return { props: { curso: dado } };
}

export default function Cursos(propriedades) {
    const { curso } = propriedades;
    if (curso) {
        return (
            <div>
                ID: {curso.id}
                <br />
                Curso: {curso.nome}
                <br />
                Horas: {curso.horas}
            </div>
        );
    }

    return <div>Curso não encontrado.</div>;
}
