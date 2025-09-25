import Layout from '@/react-app/components/Layout';

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Sobre Nós
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça nossa história, filosofia e o espaço criado especialmente para seu bem-estar
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-800 mb-6">
                Nossa Filosofia
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                No Equilíbrio Studio, acreditamos que cada pessoa é única e merece um cuidado personalizado. Nossa filosofia se baseia na combinação de técnicas tradicionais comprovadas com tecnologias modernas, sempre priorizando o bem-estar integral do paciente.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nosso objetivo é não apenas tratar sintomas, mas compreender as causas profundas dos problemas, oferecendo soluções duradouras que promovam qualidade de vida e movimento saudável.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aqui, você encontra um ambiente acolhedor onde pode se concentrar totalmente em sua recuperação, cercado por profissionais dedicados que genuinamente se importam com seu progresso.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern physiotherapy equipment"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Marina Santos - Fundadora do Equilíbrio Studio"
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-sage text-white p-4 rounded-lg shadow-lg">
                  <p className="font-semibold text-sm">15+ anos</p>
                  <p className="text-xs opacity-90">de experiência</p>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="font-serif text-4xl font-bold text-gray-800 mb-6">
                Dra. Marina Santos
              </h2>
              <p className="text-sage font-semibold text-lg mb-4">
                Fisioterapeuta e Fundadora
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Com mais de 15 anos de experiência em fisioterapia ortopédica e esportiva, a Dra. Marina Santos é especialista em reabilitação de lesões complexas e possui pós-graduação em Pilates Clínico pela Universidade de São Paulo.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Sua paixão por ajudar pessoas a recuperar o movimento e viver sem dor a levou a criar o Equilíbrio Studio, um espaço onde tecnologia e humanização se encontram para oferecer os melhores resultados.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                "Acredito que cada paciente tem uma história única, e meu papel é ouvir, compreender e guiá-los em sua jornada de recuperação com técnica, carinho e dedicação."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Space Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-6">
              Nosso Espaço
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Um ambiente cuidadosamente projetado para proporcionar conforto, privacidade e as melhores condições para seu tratamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Sala de fisioterapia"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-xl font-semibold">Sala de Fisioterapia</h3>
                  <p className="text-sm">Equipamentos modernos e ambiente acolhedor</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Studio de Pilates"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-xl font-semibold">Studio de Pilates</h3>
                  <p className="text-sm">Espaço amplo com aparelhos de última geração</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Sala de relaxamento"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-xl font-semibold">Sala de Relaxamento</h3>
                  <p className="text-sm">Ambiente tranquilo para massagem terapêutica</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-beige rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
                Localização Privilegiada
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Situado na Cavalhada, em Porto Alegre, o Equilíbrio Studio oferece fácil acesso, estacionamento gratuito e um ambiente tranquilo afastado do movimento da cidade. Nossa clínica foi pensada em cada detalhe para proporcionar a você uma experiência única de cuidado e bem-estar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
