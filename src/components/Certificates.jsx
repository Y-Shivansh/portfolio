import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'AI With TensorFlow',
      issuer: 'TensorFlow',
      year: '2024',
      image: '/certificates/AI With TensorFlow_page-0001.jpg'
    },
    {
      id: 2,
      name: 'Introduction to Cyber Security',
      issuer: 'Infosys Springboard',
      year: '2025',
      image: '/certificates/Infosys Cyber Security_page-0001.jpg'
    },
    {
      id: 3,
      name: 'Postman API Prototyping',
      issuer: 'Postman',
      year: '2024',
      image: '/certificates/Postman API prototyping_page-0001.jpg'
    },
    {
      id: 4,
      name: 'Professional Development',
      issuer: 'Professional Institute',
      year: '2024',
      image: '/certificates/img11.jpg'
    }
  ];

  return (
    <section className="py-16 w-full flex justify-center bg-[#0e0e0e]">
      <div className="max-w-7xl w-full px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-blue-400 mb-2">Certifications</h2>
          <p className="text-gray-400 text-base">My Professional Achievements</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#1c1c1e] rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 border border-gray-700"
            >
              <div className="h-48 overflow-hidden px-10">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h3 className="text-blue-300 font-semibold text-sm mb-1">{cert.name}</h3>
                <p className="text-gray-400 text-xs">{cert.issuer}</p>
                <p className="text-gray-600 text-xs">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
