// src/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fondoInicio from './assets/fondo-inicio.jpg';
import eLearning from './assets/e-learning.webp';
import girlProfile from './assets/girl-profile.jpg';
import manProfile from './assets/man-profile.jpg';
import girlProfile2 from './assets/girl-profile-2.jpg';

interface RoleCardProps {
  title: string;
  onClick: () => void;
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Ana Martínez",
      course: "Curso Diseño Sostenible",
      image: girlProfile,
      text: "Experimenté un crecimiento significativo a nivel personal y profesional gracias a este curso gratuito."
    },
    {
      name: "Martín Morales",
      course: "Curso Inteligencia Artificial Aplicada a la educación",
      image: manProfile,
      text: "Excelente curso para docentes que buscan integrar la IA de manera práctica y efectiva. Aprendí estrategias concretas para optimizar mi trabajo y potenciar el aprendizaje de mis estudiantes."
    },
    {
      name: "Isidora Gutiérrez",
      course: "Curso Ecología Urbana",
      image: girlProfile2,
      text: "Excelente curso para quienes desean comprender y abordar los desafíos ambientales en el contexto urbano. Me brindó herramientas y conocimientos clave para promover ciudades más sostenibles."
    }
  ];

  const RoleCard: React.FC<RoleCardProps> = ({ title, onClick }) => (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      className="relative cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8BAE52]"
      aria-label={`Seleccionar perfil ${title}`}
    >
      <div className="absolute top-3 left-3 w-full h-full border-2 border-[#8BAE52] rounded-2xl"></div>
      <div className="relative bg-white border-2 border-[#1A3D33] rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-[#1A3D33] text-center">{title}</h3>
      </div>
    </div>
  );

  const handleRoleClick = () => {
    navigate('/login');
  };

  return (
    <main>
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${fondoInicio})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: '#1A3D33', opacity: 0.85 }}></div>
        <div className="relative w-full">
          <div className="text-center px-4">
            <h1 className="text-[32px] text-white font-bold mb-4">
              Conviértete en un Líder de la Innovación
            </h1>
            <p className="text-base text-white mb-8 max-w-3xl mx-auto">
              Cursos prácticos en desarrollo tecnológico, sostenibilidad y <br />
              transformación urbana, para Docentes, Apoderados y Estudiantes
            </p>
            <button
              type="button"
              onClick={() => navigate('/cursos')}
              className="bg-white text-[#1A3D33] px-6 py-2 rounded-md text-base font-medium hover:bg-[#8BAE52] hover:text-white transition-colors"
            >
              Explorar cursos
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A3D33] mb-4 text-center">
            Selecciona tu tipo de perfil
          </h2>
          <p className="text-[#1A3D33] text-center mb-12 max-w-2xl mx-auto">
            Selecciona tu perfil para acceder a los cursos especiales diseñados para tu categoría y comenzar tu experiencia de aprendizaje personalizada
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <RoleCard title="Docente" onClick={handleRoleClick} />
            <RoleCard title="Estudiante" onClick={handleRoleClick} />
            <RoleCard title="Comunidad" onClick={handleRoleClick} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A3D33] mb-12">Lo que dicen nuestros estudiantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-[#F0F0F0] hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-[#1A3D33]">{testimonial.name}</h3>
                    <p className="text-sm text-[#8BAE52]">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-[#1A3D33] italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${eLearning})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: '#1A3D33', opacity: 0.85 }}></div>
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h2 className="text-[32px] text-white font-bold mb-4 text-left">Cursos destacados</h2>
              <p className="text-base text-white mb-8 text-left">
                Descubre por qué estos cursos son los favoritos de nuestros alumnos.
              </p>
              <div className="text-left">
                <button
                  type="button"
                  onClick={() => navigate('/cursos?destacados=true')}
                  className="bg-white text-[#1A3D33] px-6 py-2 rounded-md text-base font-medium hover:bg-[#8BAE52] hover:text-white transition-colors"
                >
                  Ver destacados
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
