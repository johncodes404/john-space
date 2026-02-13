import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>John's Space</h1>
        <p className="subtitle">深度思考 | 终身学习 | 现实主义</p>
      </header>
      
      <main>
        <section className="card">
          <h2>👋 关于我</h2>
          <p>
            身处丛林，手中有剑，心中有数。<br/>
            探索 AI 与国际关系的边界。
          </p>
        </section>

        <section className="card">
          <h2>🚀 我的目标</h2>
          <p>
            不买房，只租房。<br/>
            在 2025-2030 抓住 AI 的机会窗口。<br/>
            建立不可替代的个人价值。
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
