export default function Projects() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Proyectos Destacados</h1>

      <div className="space-y-8">
        <div className="border p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Asistente AI para Salesforce</h2>
          <p className="text-gray-700">
            Asistente en Python integrado con la API de Salesforce para responder consultas
            de clientes y generar tickets automáticamente.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            🧠 Stack: Python, LangChain, Salesforce API, Agentforce
          </p>
        </div>

        <div className="border p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Pipeline DevOps para Salesforce</h2>
          <p className="text-gray-700">
            Pipeline CI/CD para despliegues automatizados entre entornos Dev → QA → Prod.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            ⚙️ Stack: GitHub Actions, Copado, Salesforce CLI
          </p>
        </div>
      </div>
    </section>
  );
}