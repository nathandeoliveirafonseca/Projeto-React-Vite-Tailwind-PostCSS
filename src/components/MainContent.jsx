import Services from "./Services";

function MainContent() {
  return (
    <>
      <Services />

      <main className="flex-1 p-6 bg-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna I</h2>
          <p className="text-slate-600">Conteúdo da primeira coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna II</h2>
          <p className="text-slate-600">Conteúdo da segunda coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna III</h2>
          <p className="text-slate-600">Conteúdo da terceira coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna IV</h2>
          <p className="text-slate-600">Conteúdo da quarta coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna V</h2>
          <p className="text-slate-600">Conteúdo da quinta coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna VI</h2>
          <p className="text-slate-600">Conteúdo da sexta coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna VII</h2>
          <p className="text-slate-600">Conteúdo da sétima coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna VIII</h2>
          <p className="text-slate-600">Conteúdo da oitava coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna IX</h2>
          <p className="text-slate-600">Conteúdo da nona coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna X</h2>
          <p className="text-slate-600">Conteúdo da décima coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna XI</h2>
          <p className="text-slate-600">Conteúdo da décima primeira coluna.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Coluna XII</h2>
          <p className="text-slate-600">Conteúdo da décima segunda coluna.</p>
        </div>

      </main>
    </>
  );
}

export default MainContent;

