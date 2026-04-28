// ============================================================
// Simulador Simples de Orçamento Pessoal
// Atividade Prática - JavaScript Básico
// ============================================================

// ── Função auxiliar: lê um número válido via prompt ──────────
function lerNumero(mensagem) {
  let valor;
  let entrada;
  do {
    entrada = prompt(mensagem);
    valor = Number(entrada);
    if (isNaN(valor) || entrada === null || entrada.trim() === "") {
      alert("⚠️ Valor inválido! Digite apenas números.");
    }
  } while (isNaN(valor) || entrada === null || entrada.trim() === "");
  return valor;
}

// ── 1. Dados iniciais ────────────────────────────────────────

// Nome do usuário (string)
const nome = prompt("Qual é o seu nome?") || "Usuário";

// Renda mensal (number) com validação
const renda = lerNumero(`Olá, ${nome}! Qual é a sua renda mensal? (R$)`);

// Quantidade de despesas (number) com validação + limite 1–5
let qtdDespesas = lerNumero("Quantas despesas você vai informar? (1 a 5)");

// Aplicando limite
if (qtdDespesas < 1) qtdDespesas = 1;
if (qtdDespesas > 5) qtdDespesas = 5;

// ── 2 & 3. Lançamento de despesas com for + validação while ──

let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
  const despesa = lerNumero(`Informe o valor da Despesa ${i}: (R$)`);
  totalDespesas += despesa;
}

// ── 4. Análise com if / else ─────────────────────────────────

const sobra = renda - totalDespesas;
let classificacao;

if (totalDespesas > renda) {
  classificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  const percentualSobra = (sobra / renda) * 100;
  if (percentualSobra >= 30) {
    classificacao = "✅ Ótimo: boa margem de sobra.";
  } else {
    classificacao = "🙂 Ok: dá para melhorar a sobra.";
  }
}

// ── 5. Saída final ───────────────────────────────────────────

const resultado =
  `========================================\n` +
  `   📊 RESULTADO DO ORÇAMENTO PESSOAL   \n` +
  `========================================\n` +
  `👤 Nome:              ${nome}\n` +
  `💵 Renda:             R$ ${renda.toFixed(2)}\n` +
  `🧾 Total de despesas: R$ ${totalDespesas.toFixed(2)}\n` +
  `💰 Sobra:             R$ ${sobra.toFixed(2)}\n` +
  `----------------------------------------\n` +
  `${classificacao}\n` +
  `========================================`;

// Exibe em alert
alert(resultado);

// Exibe no console
console.log(resultado);