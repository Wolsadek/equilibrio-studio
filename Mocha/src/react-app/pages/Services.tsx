import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Layout from '@/react-app/components/Layout';

interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  indication: string;
  duration: string;
  price: string;
}

const services: Service[] = [
  {
    id: 'fisioterapia-ortopedica',
    title: 'Fisioterapia Ortopédica',
    description: 'Especializada no tratamento de lesões do sistema musculoesquelético, nossa fisioterapia ortopédica utiliza técnicas manuais avançadas combinadas com exercícios terapêuticos específicos para acelerar o processo de recuperação e prevenir recidivas.',
    benefits: [
      'Alívio da dor e inflamação',
      'Melhora da mobilidade articular',
      'Fortalecimento muscular direcionado',
      'Correção de desequilíbrios posturais',
      'Prevenção de lesões futuras'
    ],
    indication: 'Indicado para dores nas costas, lesões articulares, tendinites, pós-cirúrgico ortopédico, artrose, hérnias de disco, e demais condições que afetem o sistema musculoesquelético.',
    duration: '50 minutos',
    price: 'A partir de R$ 120'
  },
  {
    id: 'pilates-clinico',
    title: 'Pilates Clínico',
    description: 'Nossa abordagem do Pilates Clínico combina os princípios tradicionais do método com avaliação fisioterapêutica detalhada, criando um programa personalizado que fortalece o core, melhora a postura e desenvolve consciência corporal.',
    benefits: [
      'Fortalecimento do core e estabilização',
      'Melhora significativa da postura',
      'Aumento da flexibilidade e mobilidade',
      'Redução de dores crônicas',
      'Desenvolvimento do equilíbrio e coordenação'
    ],
    indication: 'Recomendado para dores lombares, problemas posturais, reabilitação neurológica, condicionamento físico, preparação para atividades esportivas, e manutenção da saúde corporal.',
    duration: '50 minutos',
    price: 'A partir de R$ 100'
  },
  {
    id: 'massagem-terapeutica',
    title: 'Massagem Terapêutica',
    description: 'Utilizamos diversas técnicas de massagem terapêutica para promover relaxamento muscular, melhorar a circulação sanguínea e linfática, além de proporcionar bem-estar físico e mental através do toque terapêutico especializado.',
    benefits: [
      'Relaxamento profundo da musculatura',
      'Melhora da circulação sanguínea',
      'Redução do estresse e ansiedade',
      'Alívio de tensões musculares',
      'Melhora da qualidade do sono'
    ],
    indication: 'Ideal para estresse, tensão muscular, fibromialgia, dores de cabeça tensionais, insônia, ansiedade, e como complemento a outros tratamentos de fisioterapia.',
    duration: '60 minutos',
    price: 'A partir de R$ 150'
  },
  {
    id: 'ventosaterapia',
    title: 'Ventosaterapia',
    description: 'Técnica milenar que utiliza ventosas para criar vácuo sobre a pele, promovendo aumento da circulação local, relaxamento muscular e liberação de toxinas. Nossos profissionais são especializados nesta técnica complementar.',
    benefits: [
      'Melhora da circulação local',
      'Relaxamento muscular profundo',
      'Redução de aderências e cicatrizes',
      'Estímulo do sistema imunológico',
      'Alívio de dores musculares'
    ],
    indication: 'Eficaz para dores musculares, contraturas, celulite, retenção de líquidos, estresse, e como terapia complementar em tratamentos de fisioterapia.',
    duration: '40 minutos',
    price: 'A partir de R$ 80'
  }
];

export default function Services() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setOpenService(openService === serviceId ? null : serviceId);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de tratamentos personalizados para atender suas necessidades específicas
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full px-8 py-6 text-left bg-white hover:bg-beige/30 transition-colors duration-200 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span>⏱️ {service.duration}</span>
                      <span>💰 {service.price}</span>
                    </div>
                  </div>
                  <div className="text-sage">
                    {openService === service.id ? (
                      <ChevronDown size={24} />
                    ) : (
                      <ChevronRight size={24} />
                    )}
                  </div>
                </button>

                {openService === service.id && (
                  <div className="px-8 pb-8 bg-beige/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">
                          Sobre o Tratamento
                        </h4>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <h4 className="font-semibold text-lg text-gray-800 mb-3">
                          Principais Benefícios
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-sage mr-2 mt-1">✓</span>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">
                          Quando é Indicado
                        </h4>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.indication}
                        </p>

                        <div className="bg-white rounded-lg p-6 border border-sage/20">
                          <h5 className="font-semibold text-sage mb-2">
                            Informações da Sessão
                          </h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Duração:</span>
                              <span className="font-medium">{service.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Investimento:</span>
                              <span className="font-medium">{service.price}</span>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs text-gray-500">
                              * Valores podem variar conforme avaliação individual
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-sage text-white rounded-2xl p-8">
              <h3 className="font-serif text-3xl font-bold mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Entre em contato conosco para uma avaliação personalizada
              </p>
              <a
                href="https://wa.me/555199544742?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20tratamentos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-sage hover:bg-beige px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">
              Pacotes e Promoções
            </h2>
            <p className="text-xl text-gray-600">
              Economize com nossos pacotes especiais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
                Pacote Básico
              </h3>
              <div className="text-3xl font-bold text-sage mb-2">
                4 sessões
              </div>
              <p className="text-gray-600 mb-6">
                Ideal para tratamentos pontuais
              </p>
              <div className="text-2xl font-bold text-gray-800 mb-6">
                R$ 400
                <span className="text-sm font-normal text-gray-500">/pacote</span>
              </div>
              <p className="text-sm text-green-600 font-semibold mb-4">
                Economize R$ 80
              </p>
            </div>

            <div className="bg-sage text-white rounded-xl p-8 text-center shadow-lg transform scale-105">
              <div className="bg-white text-sage text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                MAIS POPULAR
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">
                Pacote Completo
              </h3>
              <div className="text-3xl font-bold mb-2">
                8 sessões
              </div>
              <p className="opacity-90 mb-6">
                Melhor custo-benefício
              </p>
              <div className="text-2xl font-bold mb-6">
                R$ 720
                <span className="text-sm font-normal opacity-75">/pacote</span>
              </div>
              <p className="text-sm font-semibold mb-4">
                Economize R$ 240
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
                Pacote Premium
              </h3>
              <div className="text-3xl font-bold text-sage mb-2">
                12 sessões
              </div>
              <p className="text-gray-600 mb-6">
                Para tratamentos longos
              </p>
              <div className="text-2xl font-bold text-gray-800 mb-6">
                R$ 960
                <span className="text-sm font-normal text-gray-500">/pacote</span>
              </div>
              <p className="text-sm text-green-600 font-semibold mb-4">
                Economize R$ 480
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              * Pacotes válidos por 6 meses a partir da data de compra
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
