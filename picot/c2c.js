/* C2C math, same rules as Picot's corner-to-corner counter (docs/modelo-dominio-tejido.md §4.3).
   m = min(W,H), M = max(W,H), total = W + H − 1.
   1..m increase · m+1..M straight (only when W ≠ H) · M+1..total decrease. */
(function (root) {
  function c2cRow(W, H, r) {
    var m = Math.min(W, H), M = Math.max(W, H), total = W + H - 1;
    if (!(W > 0 && H > 0) || r < 1) return { phase: 'notStarted', blocks: 0, total: total };
    if (r <= m) return { phase: 'increase', blocks: r, total: total };
    if (r <= M) return { phase: 'straight', blocks: m, total: total };
    if (r <= total) return { phase: 'decrease', blocks: total - r + 1, total: total };
    return { phase: 'complete', blocks: 0, total: total };
  }
  function c2cPlan(W, H) {
    var m = Math.min(W, H), M = Math.max(W, H), total = W + H - 1;
    return {
      total: total,
      increase: [1, m],
      straight: M > m ? [m + 1, M] : null,
      decrease: [M + 1, total],
      blocks: W * H
    };
  }
  root.PicotC2C = { row: c2cRow, plan: c2cPlan };
  if (typeof module !== 'undefined') module.exports = root.PicotC2C;
})(typeof window !== 'undefined' ? window : globalThis);
