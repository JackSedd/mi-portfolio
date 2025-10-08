export default function Contact() {
  return (
    <section className="p-10 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Contacto</h1>
      <p className="text-gray-700 mb-6">
        Si quieres colaborar o tienes un proyecto relacionado con Salesforce, AI o DevOps, 
        no dudes en contactarme.
      </p>

      <div className="space-y-2">
        <p>📧 <a href="mailto:webscarrillo@gmail.com" className="text-blue-600 underline">webscarrillo@gmail.com</a></p>
        <p>💼 <a href="www.linkedin.com/in/santiago-carrillo-salesforce" target="_blank" className="text-blue-600 underline">LinkedIn</a></p>
      </div>
    </section>
  );
}