export default function IntroPage({ onEnterDemo }) {
  return (
    <div style={s.container}>
      {/* Hero */}
      <div style={s.hero}>
        <div style={s.badge}>Avalanche Fuji Testnet · Solidity · Web3</div>
        <h1 style={s.title}>HerTime</h1>
        <p style={s.subtitle}>那些不被看见的付出，从此有迹可循</p>
      </div>

      {/* 问题 */}
      <div style={s.section}>
        <h2 style={s.sectionTitle}>Web2 时间银行的问题</h2>
        <div style={s.cardRow}>
          {[
            { icon: "💀", title: "平台停运积分清零", desc: "积分存在平台数据库，平台关闭即归零，你的贡献从未真正属于你" },
            { icon: "✏️", title: "记录可被修改", desc: "平台对数据有完全控制权，贡献历史随时可被删除或篡改" },
            { icon: "🏝️", title: "跨社群不互通", desc: "各平台数据孤岛，换平台等于重新开始，所有记录消失" },
          ].map((item) => (
            <div key={item.title} style={s.card}>
              <div style={s.cardIcon}>{item.icon}</div>
              <div style={s.cardTitle}>{item.title}</div>
              <div style={s.cardDesc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 解决方案 */}
      <div style={{ ...s.section, background: "rgba(139,92,246,0.08)", borderRadius: 16, padding: "32px 24px" }}>
        <h2 style={s.sectionTitle}>HerTime 如何解决</h2>
        <div style={s.stepRow}>
          {[
            { step: "01", title: "时间 Token 在你钱包", desc: "1 HRT = 1 小时服务。Token 存在你自己的钱包，平台停运，Token 依然在" },
            { step: "02", title: "链上声誉不可篡改", desc: "双盲评分上链，平台无法删除你的贡献记录和信用档案" },
            { step: "03", title: "技能 NFT 永久证明", desc: "根据链上服务记录自动颁发，Soulbound 不可转让，是你帮助过别人的永久凭证" },
          ].map((item) => (
            <div key={item.step} style={s.step}>
              <div style={s.stepNum}>{item.step}</div>
              <div style={s.stepTitle}>{item.title}</div>
              <div style={s.stepDesc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 服务类型 */}
      <div style={s.section}>
        <h2 style={s.sectionTitle}>互助服务类型</h2>
        <div style={s.tagRow}>
          {["🏠 生活支持", "💜 情感支持", "🔧 技能技术", "📚 知识教学", "🎨 创意协作"].map((t) => (
            <span key={t} style={s.tag}>{t}</span>
          ))}
        </div>
        <p style={s.tagDesc}>陪伴就医、情绪疏导、职场辅导、编程教学……每一小时的帮助都值得被记住</p>
      </div>

      {/* NFT 徽章 */}
      <div style={s.section}>
        <h2 style={s.sectionTitle}>技能徽章 NFT</h2>
        <div style={s.cardRow}>
          {[
            { icon: "👂", title: "倾听者", desc: "情感支持 5 次，均分 ≥ 4.5" },
            { icon: "🏥", title: "就医陪伴", desc: "生活支持 3 次" },
            { icon: "👶", title: "育儿伙伴", desc: "生活支持 5 次，均分 ≥ 4.0" },
          ].map((item) => (
            <div key={item.title} style={{ ...s.card, textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
              <div style={s.cardTitle}>{item.title}</div>
              <div style={s.cardDesc}>{item.desc}</div>
              <div style={{ fontSize: 11, color: "#8b5cf6", marginTop: 8 }}>Soulbound · 不可转让</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={s.ctaSection}>
        <button style={s.ctaButton} onClick={onEnterDemo}>
          进入链上演示 →
        </button>
        <p style={s.ctaNote}>基于 Avalanche 测试网的真实合约交互演示</p>
      </div>
    </div>
  )
}

const s = {
  container: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "40px 24px 80px",
    fontFamily: "'Inter', -apple-system, sans-serif",
    color: "#f1f1f1",
  },
  hero: { textAlign: "center", padding: "60px 0 48px" },
  badge: {
    display: "inline-block",
    background: "rgba(139,92,246,0.2)",
    border: "1px solid rgba(139,92,246,0.4)",
    color: "#c4b5fd",
    padding: "6px 16px",
    borderRadius: 20,
    fontSize: 13,
    marginBottom: 24,
  },
  title: {
    fontSize: 72,
    fontWeight: 800,
    margin: "0 0 16px",
    background: "linear-gradient(135deg, #c4b5fd, #f9a8d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: { fontSize: 22, color: "#9ca3af", margin: "0 0 24px" },
  story: { fontSize: 16, color: "#9ca3af", lineHeight: 1.8, maxWidth: 640, margin: "0 auto" },
  section: { marginBottom: 48 },
  sectionTitle: { fontSize: 22, fontWeight: 700, marginBottom: 24, color: "#e5e7eb" },
  cardRow: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
  card: { background: "#1f1f2e", border: "1px solid #2d2d3d", borderRadius: 12, padding: "24px 20px" },
  cardIcon: { fontSize: 28, marginBottom: 12 },
  cardTitle: { fontWeight: 700, marginBottom: 8, color: "#e5e7eb" },
  cardDesc: { fontSize: 14, color: "#9ca3af", lineHeight: 1.6 },
  stepRow: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 },
  step: { textAlign: "center" },
  stepNum: { fontSize: 36, fontWeight: 800, color: "#8b5cf6", marginBottom: 12 },
  stepTitle: { fontWeight: 700, marginBottom: 8, color: "#e5e7eb" },
  stepDesc: { fontSize: 14, color: "#9ca3af", lineHeight: 1.6 },
  tagRow: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 },
  tag: { background: "#1f1f2e", border: "1px solid #3d3d5c", borderRadius: 20, padding: "8px 20px", fontSize: 15 },
  tagDesc: { color: "#9ca3af", fontSize: 14, margin: 0 },
  ctaSection: { textAlign: "center", marginTop: 64 },
  ctaButton: {
    background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    color: "#fff", border: "none", borderRadius: 12,
    padding: "16px 48px", fontSize: 18, fontWeight: 700, cursor: "pointer", marginBottom: 12,
  },
  ctaNote: { color: "#6b7280", fontSize: 13, margin: 0 },
}
