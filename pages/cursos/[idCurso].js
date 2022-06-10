import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Cursos() {
    const rota = useRouter(),
        id = rota.query.idCurso,
        [curso, mudarCurso] = useState({});

    useEffect(() => {
        if (id) {
            fetch("http://localhost:3000/api/cursos/" + id)
                .then((resposta) => resposta.json())
                .then((dado) => mudarCurso(dado));
        }
    }, [id]);

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
