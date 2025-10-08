export default function ContactEN() {
  return (
    <section className="p-10 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Contact</h1>
      <p className="text-gray-700 mb-6">
        If you'd like to collaborate or have a Salesforce / AI / DevOps project, get in touch.
      </p>

      <div className="space-y-2">
        <p>📧 <a href="mailto:tomas@example.com" className="text-blue-600 underline">tomas@example.com</a></p>
        <p>💼 <a href="https://linkedin.com/in/tomas" target="_blank" className="text-blue-600 underline">LinkedIn</a></p>
        <p>💻 <a href="https://github.com/tomas" target="_blank" className="text-blue-600 underline">GitHub</a></p>
      </div>
    </section>
  );
}