import Layout from '@/react-app/components/Layout';

// ... (a sua interface CaseStudy e o array caseStudies continuam exatamente os mesmos, não precisa mexer)
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  age: number;
  challenge: string;
  treatment: string;
  testimonial: string;
  duration: string;
  results: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'mariana-running',
    title: 'Retorno ao esporte sem dor',
    client: 'Mariana R.',
    age: 32,
    challenge: 'Mariana, corredora amadora há 8 anos, desenvolveu fascite plantar bilateral que a impedia de correr há 6 meses. A dor era intensa pela manhã e após períodos prolongados em pé, comprometendo significativamente sua qualidade de vida e bem-estar emocional.',
    treatment: 'O tratamento incluiu terapia manual especializada para liberação miofascial, exercícios específicos de fortalecimento da musculatura intrínseca do pé, alongamentos direcionados, uso de órteses personalizadas e orientações sobre técnica de corrida e calçados adequados.',
    testimonial: 'Depois de meses sem conseguir correr, o tratamento no Equilíbrio Studio me devolveu não só a capacidade de praticar o esporte que amo, mas também a confiança no meu corpo. A abordagem personalizada e o cuidado da equipe fizeram toda a diferença.',
    duration: '3 meses',
    results: [
      'Eliminação completa da dor plantar',
      'Retorno gradual e seguro à corrida',
      'Melhora da biomecânica da corrida',
      'Prevenção de recidivas',
      'Aumento da performance esportiva'
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'carlos-back',
    title: 'Alívio definitivo das dores lombares',
    client: 'Carlos M.',
    age: 45,
    challenge: 'Carlos, executivo que passa longas horas sentado, sofria com dor lombar crônica há mais de 2 anos. A dor irradiava para a perna direita, causava rigidez matinal e limitava suas atividades diárias, incluindo brincar com os filhos nos fins de semana.',
    treatment: 'O protocolo incluiu mobilização articular da coluna lombar, fortalecimento do core através do Pilates Clínico, correção postural, ergonomia do ambiente de trabalho e programa de exercícios domiciliares. Também foram aplicadas técnicas de terapia manual e educação sobre mecânica corporal.',
    testimonial: 'Após anos convivendo com dor constante e limitações, finalmente encontrei no Equilíbrio Studio a solução que eu precisava. Hoje posso trabalhar sem desconforto e aproveitei muito mais os momentos em família. O investimento na minha saúde valeu cada centavo.',
    duration: '4 meses',
    results: [
      'Redução de 95% da dor lombar',
      'Eliminação da irradiação para a perna',
      'Melhora significativa da postura',
      'Aumento da flexibilidade da coluna',
      'Retorno completo às atividades diárias'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];


export default function Portfolio() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Casos de Sucesso
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça histórias reais de transformação e recuperação de nossos pacientes
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((caseStudy, index) => (
              // O container de cada estudo de caso agora é um grid simples
              <div key={caseStudy.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Imagem - A classe 'order' faz a mágica da alternância */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-80 lg:h-full object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute top-6 left-6 bg-sage text-white px-4 py-2 rounded-lg">
                    <p className="text-sm font-semibold">{caseStudy.duration}</p>
                    <p className="text-xs opacity-90">de tratamento</p>
                  </div>
                </div>

                {/* Conteúdo - A classe 'order' também se aplica aqui */}
                <div className={`bg-beige rounded-2xl p-8 flex flex-col justify-center h-full ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-6">
                    <h2 className="font-serif text-3xl font-bold text-gray-800 mb-3">
                      {caseStudy.client} - {caseStudy.title}
                    </h2>
                    <p className="text-sage font-semibold">
                      {caseStudy.age} anos
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">
                        O Desafio
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">
                        O Tratamento
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudy.treatment}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">
                        Resultados Alcançados
                      </h3>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-sage mr-2 mt-1">✓</span>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Testimonial - Sempre ocupa as duas colunas no final */}
                <div className="lg:col-span-2 mt-8">
                  <div className="bg-white border-l-4 border-sage p-6 rounded-r-lg shadow-sm">
                    <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                      "{caseStudy.testimonial}"
                    </blockquote>
                    <cite className="block mt-4 text-sage font-semibold">
                      - {caseStudy.client}, {caseStudy.age} anos
                    </cite>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O resto da sua página (Statistics, Call to Action) continua o mesmo */}
      {/* ... (cole o resto do seu código aqui) ... */}
            
    </Layout>
  );
}