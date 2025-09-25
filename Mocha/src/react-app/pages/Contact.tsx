import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Layout from '@/react-app/components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.
    
📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}

💬 Mensagem:
${formData.message}`;
    
    const whatsappURL = `https://wa.me/555199544742?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para cuidar de você. Agende sua consulta ou tire suas dúvidas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-sage" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Endereço
                    </h3>
                    <p className="text-gray-600">
                      Av. da Cavalhada, 3168 - Loja 108<br />
                      Cavalhada, Porto Alegre - RS, 91740-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-sage" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Telefone
                    </h3>
                    <p className="text-gray-600">
                      (51) 99544-7742
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-sage" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      contato@equilibriostudio.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-sage" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Horário de Funcionamento
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 7h às 20h</p>
                      <p>Sábado: 8h às 16h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-beige rounded-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  🚗 Estacionamento Gratuito
                </h3>
                <p className="text-gray-600">
                  Oferecemos estacionamento gratuito para nossos pacientes no local.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-8">
                Envie sua Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    placeholder="(51) 99544-7742"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors resize-vertical"
                    placeholder="Conte-nos como podemos ajudá-lo. Descreva seus sintomas, objetivos ou dúvidas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sage hover:bg-sage-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Enviar Mensagem via WhatsApp
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Sua mensagem será enviada via WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">
              Localização
            </h2>
            <p className="text-xl text-gray-600">
              Venha nos visitar na Cavalhada
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.123456789!2d-51.23456789!3d-30.12345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977123456789a%3A0x123456789abcdef0!2sAv.%20da%20Cavalhada%2C%203168%20-%20Cavalhada%2C%20Porto%20Alegre%20-%20RS%2C%2091740-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Equilíbrio Studio - Cavalhada, Porto Alegre"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                🚇 Metrô
              </h3>
              <p className="text-gray-600">
                Próximo ao Shopping Bourbon Cavalhada
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                🚌 Ônibus
              </h3>
              <p className="text-gray-600">
                Diversas linhas de ônibus passam próximo ao local
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                🚗 Carro
              </h3>
              <p className="text-gray-600">
                Fácil acesso e estacionamento gratuito no local
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas antes de agendar
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-beige/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Como funciona a primeira consulta?
              </h3>
              <p className="text-gray-600">
                A primeira consulta é uma avaliação completa que dura cerca de 60 minutos. Fazemos uma anamnese detalhada, exame físico e já iniciamos o tratamento conforme necessário.
              </p>
            </div>

            <div className="bg-beige/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Preciso de encaminhamento médico?
              </h3>
              <p className="text-gray-600">
                Não é obrigatório, mas é sempre bom trazê-lo se você tiver. Também é importante trazer exames de imagem recentes se possuir.
              </p>
            </div>

            <div className="bg-beige/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-Gray-800 mb-2">
                Vocês atendem convênios?
              </h3>
              <p className="text-gray-600">
                Atualmente atendemos apenas particular, mas fornecemos recibos para reembolso junto ao seu plano de saúde.
              </p>
            </div>

            <div className="bg-beige/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Qual a duração típica do tratamento?
              </h3>
              <p className="text-gray-600">
                Varia conforme cada caso, mas a maioria dos tratamentos dura entre 6 a 12 sessões. Definimos um plano personalizado após a avaliação inicial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
