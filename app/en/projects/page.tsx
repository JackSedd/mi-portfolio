export default function ProjectsEN() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Featured Projects</h1>

      <div className="space-y-8">
        <div className="border p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">AI Support Assistant for Salesforce</h2>
          <p className="text-gray-700">
            Python-based assistant integrated with the Salesforce API to respond to customer inquiries
            and create tickets automatically.
          </p>
          <p className="mt-2 text-sm text-gray-500">🧠 Stack: Python, LangChain, Salesforce API, Agentforce</p>
        </div>

        <div className="border p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Salesforce DevOps Pipeline</h2>
          <p className="text-gray-700">
            CI/CD pipeline to automate deployments between Dev → QA → Prod.
          </p>
          <p className="mt-2 text-sm text-gray-500">⚙️ Stack: GitHub Actions, Copado, Salesforce CLI</p>
        </div>
      </div>
    </section>
  );
}