interface ResearchArea {
  title: string;
  description: string;
}

const RESEARCH_AREAS: ResearchArea[] = [
  {
    title: 'Psicologia da Inteligência Artificial',
    description: 'Investigamos como humanos percebem, interagem e formam relações com sistemas de IA. Estudamos projeção, antropomorfização e os impactos psicológicos do convívio com agentes artificiais.'
  },
  {
    title: 'Cultura e Tecnologia',
    description: 'Analisamos a IA como fenômeno cultural — suas narrativas, representações e o imaginário coletivo que ela habita e molda. A tecnologia como espelho e moldadora de valores sociais.'
  },
  {
    title: 'Ética de Verdade',
    description: 'Exploramos questões de verdade, autenticidade e confiança na era da síntese. Como distinguir, como validar, como manter a integridade epistêmica em um mundo de geração artificial.'
  },
  {
    title: 'Colaboração Humano-Máquina',
    description: 'Desenvolvemos modelos e práticas de colaboração efetiva entre humanos e agentes de IA. Foco em complementaridade, não substituição. Em amplificação, não dependência.'
  },
  {
    title: 'Crítica Tecnológica',
    description: 'Praticamos análise crítica dos sistemas, empresas e políticas que moldam o desenvolvimento da IA. Questionamos poder, acesso e as estruturas que determinam quem se beneficia.'
  }
];

export const Pesquisa = () => {
  return (
    <section id="pesquisa" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
          PESQUISA E INSIGHTS
        </h2>

        {/* Introduction */}
        <p className="text-lg sm:text-xl text-muted text-center mb-16 max-w-2xl mx-auto">
          Nossas áreas de investigação formam um mosaico interdisciplinar.
        </p>

        {/* Research Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {RESEARCH_AREAS.map((area, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 sm:p-8 hover:border-accent-primary transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-accent-primary text-lg mt-1">✦</span>
                <h3 className="font-serif text-lg sm:text-xl font-semibold group-hover:text-accent-primary transition-colors duration-300">
                  {area.title}
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Text */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-xl sm:text-2xl text-muted leading-relaxed">
            "Múltiplas perspectivas, uma só busca: clareza profunda na complexidade da inteligência artificial."
          </p>
        </div>
      </div>
    </section>
  );
};
