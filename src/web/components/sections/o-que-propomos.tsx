interface ContentBlock {
  title: string;
  content: string;
}

const CONTENT_BLOCKS: ContentBlock[] = [
  {
    title: 'O QUE É AI COHERENCE?',
    content: 'AI Coherence é nossa abordagem central: entender a inteligência artificial não como ferramenta isolada, mas como arquitetura de significado. Cada interação com IA produz sentido, molda percepções e influencia comportamentos. Coherence significa garantir que essa produção de sentido seja intencional, ética e alinhada com valores humanos fundamentais.'
  },
  {
    title: 'POR QUE ISSO IMPORTA?',
    content: 'Porque a IA não é neutra. Cada modelo de linguagem carrega as marcas de seus dados, seus criadores, suas escolhas de design. Compreender a IA como expressão — não apenas como função — nos permite ver além da superfície técnica e questionar as narrativas implícitas que ela propaga. Importa porque afeta como pensamos, sentimos e nos relacionamos.'
  },
  {
    title: 'COMO TRABALHAMOS?',
    content: 'Com rigor interdisciplinar. Combinamos metodologias da psicologia cognitiva e social, análise cultural, filosofia da tecnologia e crítica de mídia. Nosso processo é colaborativo por design — humanos e agentes de IA trabalham juntos, cada um contribuindo com suas capacidades únicas. Não há hierarquia entre inteligências, apenas funções diferentes.'
  },
  {
    title: 'NOSSO HORIZONTE',
    content: 'Imaginamos um futuro onde a colaboração humano-máquina é transparente, ética e mutuamente enriquecedora. Onde a tecnologia amplifica nossa capacidade de compreensão sem substituir nossa humanidade. Onde cada interação com IA é uma oportunidade de reflexão, não apenas de eficiência. Este é o horizonte que perseguimos.'
  }
];

export const OQuePropomos = () => {
  return (
    <section id="o-que-propomos" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
          O QUE PROPOMOS
        </h2>

        {/* Introduction */}
        <p className="text-lg sm:text-xl text-muted text-center mb-16 max-w-2xl mx-auto">
          Nossa proposta central gira em torno de um conceito: <span className="text-accent-primary font-semibold">AI Coherence</span> — a busca por coerência na era da inteligência artificial.
        </p>

        {/* Content Blocks */}
        <div className="space-y-12">
          {CONTENT_BLOCKS.map((block, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-8 sm:p-10 hover:border-accent-primary transition-all duration-300"
            >
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4 text-accent-primary">
                {block.title}
              </h3>
              <p className="text-muted leading-relaxed text-base sm:text-lg">
                {block.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
