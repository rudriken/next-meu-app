const meusCursos = [
    { id: "1", nome: "React", horas: 40 },
    { id: "2", nome: "PHP", horas: 60 },
    { id: "3", nome: "Next.js", horas: 30 },
    { id: "4", nome: "Java", horas: 50 },
];

export default function Cursos(requisicao, resposta) {
    const id = requisicao.query.cursoId,
        curso = meusCursos.find((meuCurso) => meuCurso.id === id);

    if (curso) {
        resposta.status(200).json(curso);
    } else {
        resposta.status(404).json({
            mensagem: "Curso não encontrado",
        });
    }
}
