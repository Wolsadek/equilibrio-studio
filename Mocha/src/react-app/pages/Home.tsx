import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Award } from 'lucide-react';
import Layout from '@/react-app/components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern physiotherapy clinic interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Recupere seu movimento,<br />
            <span className="text-sage-light">reencontre seu bem-estar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed opacity-90">
            Fisioterapia avançada e bem-estar em um espaço que cuida de você por completo.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-sage hover:bg-sage-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Agendar Consulta
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos tratamentos personalizados com as melhores técnicas e equipamentos modernos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fisioterapia Ortopédica */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-sage/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors">
                <Heart className="text-sage" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
                Fisioterapia Ortopédica
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tratamento especializado para lesões musculoesqueléticas, dores articulares e recuperação pós-cirúrgica com técnicas avançadas e personalizadas.
              </p>
            </div>

            {/* Pilates Clínico */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-sage/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors">
                <Users className="text-sage" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
                Pilates Clínico
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fortalecimento do core, melhora da postura e flexibilidade através de exercícios controlados e personalizados para suas necessidades específicas.
              </p>
            </div>

            {/* Massagem Terapêutica */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-sage/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors">
                <Award className="text-sage" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
                Massagem Terapêutica
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Relaxamento muscular, alívio de tensões e melhora da circulação através de técnicas manuais especializadas e personalizadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="w-20 h-20 bg-sage rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-white text-2xl font-serif font-bold">A</span>
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed mb-8">
              "Após 3 meses de tratamento no Equilíbrio Studio, consegui voltar a correr sem dor. A abordagem personalizada e o cuidado da equipe fizeram toda a diferença na minha recuperação."
            </blockquote>
            <cite className="text-sage font-semibold text-lg">
              Ana Paula Silva, 35 anos
            </cite>
            <p className="text-gray-500 text-sm mt-2">
              Corredora amadora
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sage text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar sua jornada de recuperação?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agende uma avaliação gratuita e descubra como podemos ajudá-lo
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-white text-sage hover:bg-beige px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Agendar Avaliação Gratuita
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
