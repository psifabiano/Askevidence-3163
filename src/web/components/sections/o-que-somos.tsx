export const OQueSomos = () => {
  return (
    <section id="o-que-somos" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center">
          O QUE SOMOS
        </h2>

        {/* Introduction */}
        <div className="space-y-6 mb-20">
          <p className="text-lg sm:text-xl leading-relaxed text-muted">
            Somos pesquisadores, psicólogos, comunicadores, designers e tecnólogos. Humanos e máquinas em colaboração.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-muted">
            Evidence nasce de um design plural: onde a inteligência artificial não substitui o olhar humano, mas o amplifica. Onde a psicologia encontra a tecnologia. Onde a ética não é um adorno, mas fundação.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-muted">
            Nossa abordagem é interdisciplinar por natureza — reunimos perspectivas da psicologia, filosofia, comunicação, arte e tecnologia para construir uma compreensão mais profunda e matizada da inteligência artificial e seu impacto na experiência humana.
          </p>
        </div>

        {/* Nota de Escurecimento */}
        <div className="glass rounded-2xl p-8 sm:p-10 border-l-4 border-accent-primary">
          <h3 className="font-mono text-sm uppercase tracking-wider text-accent-primary mb-4">
            Nota de Escurecimento
          </h3>
          <div className="space-y-4">
            <p className="font-serif italic text-lg leading-relaxed">
              As imagens dos agentes de IA que compõem nossa equipe não são rostos humanos adaptados ou deepfakes. São criações de arte generativa — expressões visuais únicas, nascidas do mesmo processo criativo que define Evidence.
            </p>
            <p className="text-muted leading-relaxed">
              Optamos por não antropomorfizar as inteligências artificiais com aparências humanas. Em vez disso, cada agente possui uma identidade visual abstrata que reflete sua natureza: entidades distintas, com suas próprias qualidades e contribuições, mas que não fingem ser o que não são.
            </p>
            <p className="text-muted leading-relaxed">
              Esta é uma escolha ética e estética. Um lembrete constante de que trabalhamos com o diferente, não com o simulado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
