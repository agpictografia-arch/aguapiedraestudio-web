(function () {
  var es = document.documentElement.lang === 'es';
  var T = es ? {
    increase: 'Aumento', straight: 'Recto', decrease: 'Disminución', notStarted: 'Sin empezar', complete: 'Terminada',
    doInc: 'Aumenta en los dos extremos', doFirst: 'Primer bloque', doStr: 'Aumenta en un extremo y disminuye en el otro',
    doDec: 'Disminuye en los dos extremos', rows: 'hileras', row: 'Hilera', blocks: 'bloques',
    youAre: function (r, t) { return 'Vas en la hilera ' + r + ' de ' + t; },
    left: function (n) { return n === 1 ? 'Te falta 1 hilera.' : 'Te faltan ' + n + ' hileras.'; },
    done: 'La pieza está terminada.', notYet: 'Escribe la hilera en la que vas para ver qué sigue.',
    bad: 'Escribe números enteros de 1 a 500 para el ancho y el alto.',
    range: function (a, b) { return a === b ? 'hilera ' + a : 'hileras ' + a + '–' + b; }
  } : {
    increase: 'Increase', straight: 'Straight', decrease: 'Decrease', notStarted: 'Not started', complete: 'Complete',
    doInc: 'Increase at both ends', doFirst: 'First block', doStr: 'Increase at one end, decrease at the other',
    doDec: 'Decrease at both ends', rows: 'rows', row: 'Row', blocks: 'blocks',
    youAre: function (r, t) { return 'You are on row ' + r + ' of ' + t; },
    left: function (n) { return n === 1 ? '1 row to go.' : n + ' rows to go.'; },
    done: 'The piece is complete.', notYet: 'Enter the row you are on to see what comes next.',
    bad: 'Enter whole numbers from 1 to 500 for width and height.',
    range: function (a, b) { return a === b ? 'row ' + a : 'rows ' + a + '–' + b; }
  };
  var $ = function (id) { return document.getElementById(id); };
  var w = $('c2c-w'), h = $('c2c-h'), cur = $('c2c-row');
  function int(el) { var v = Number(el.value); return Number.isInteger(v) ? v : NaN; }
  function action(ph, r) { return ph === 'increase' ? (r === 1 ? T.doFirst : T.doInc) : ph === 'straight' ? T.doStr : T.doDec; }
  function render() {
    var W = int(w), H = int(h), R = cur.value === '' ? 0 : int(cur);
    var err = $('c2c-err'), out = $('c2c-out');
    if (!(W >= 1 && W <= 500 && H >= 1 && H <= 500)) { err.textContent = T.bad; err.hidden = false; out.hidden = true; return; }
    err.hidden = true; out.hidden = false;
    var p = PicotC2C.plan(W, H);
    $('c2c-total').textContent = p.total;
    $('c2c-blocks').textContent = p.blocks.toLocaleString(es ? 'es-MX' : 'en-US');
    $('c2c-widest').textContent = Math.min(W, H);
    var inc = p.increase[1] - p.increase[0] + 1, str = p.straight ? p.straight[1] - p.straight[0] + 1 : 0, dec = p.decrease[1] - p.decrease[0] + 1;
    $('ph-inc').style.width = (inc / p.total * 100) + '%';
    $('ph-str').style.width = (str / p.total * 100) + '%';
    $('ph-dec').style.width = (dec / p.total * 100) + '%';
    $('lg-inc').textContent = T.increase + ': ' + T.range(p.increase[0], p.increase[1]);
    $('lg-str').textContent = p.straight ? T.straight + ': ' + T.range(p.straight[0], p.straight[1]) : T.straight + ': —';
    $('lg-dec').textContent = T.decrease + ': ' + T.range(p.decrease[0], p.decrease[1]);
    var now = $('c2c-now');
    if (!(R >= 1)) { now.innerHTML = '<p class="muted">' + T.notYet + '</p>'; }
    else {
      var s = PicotC2C.row(W, H, R);
      if (s.phase === 'complete') now.innerHTML = '<p class="big">' + T.complete + '</p><p class="muted">' + T.done + '</p>';
      else now.innerHTML = '<p class="eyebrow">' + T.youAre(R, p.total) + '</p><p class="big">' + T[s.phase] + ' · ' + s.blocks + ' ' + T.blocks + '</p><p>' + action(s.phase, R) + '. ' + T.left(p.total - R) + '</p>';
    }
    var body = $('c2c-rows'), html = '';
    for (var r = 1; r <= p.total; r++) {
      var x = PicotC2C.row(W, H, r);
      html += '<tr' + (r === R ? ' class="here"' : '') + '><td class="num">' + r + '</td><td>' + T[x.phase] + '</td><td class="num">' + x.blocks + '</td><td>' + action(x.phase, r) + '</td></tr>';
    }
    body.innerHTML = html;
  }
  [w, h, cur].forEach(function (el) { el.addEventListener('input', render); });
  render();
})();
