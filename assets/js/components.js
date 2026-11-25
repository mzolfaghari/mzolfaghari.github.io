// Shared components for v3 options. Requires ../v2/data.js (SITE, SITE_UTIL).
(() => {
const S = SITE, U = SITE_UTIL;

/* ---------- Career ---------- */
function career(el, { bar = true } = {}) {
  const b = bar ? `
    <div class="c-bar" aria-hidden="true">
      <div class="early" style="flex:6">Early ML roles</div>
      <div class="acad" style="flex:5.5">PhD, Multimodal AI, Freiburg</div>
      <div class="ind" style="flex:1.2">AWS</div>
      <div class="ind" style="flex:4.3">Zebracat AI</div>
      <div class="ind t" style="flex:1.05">Tether</div>
      <div class="ind now" style="flex:1">Huawei</div>
    </div>
    <div class="c-axis"><span style="left:0">2009</span><span style="left:31.6%">2015</span><span style="left:58%">2020</span><span style="left:89.5%">2026</span><span style="left:100%">Now</span></div>` : "";
  el.innerHTML = b + `<div class="c-list">${S.roles.map(r => `<div class="c-row"><span class="w">${r.when}</span><div><h3>${r.org}, <span>${r.title}</span></h3><p>${r.text}</p></div></div>`).join("")}</div>`;
}

/* ---------- All papers ---------- */
function papers(filtersEl, listEl) {
  const tabs = [["all", "All"], ["vl", "Video–language"], ["gen", "Generative"], ["eff", "Efficient"], ["vid", "Video understanding"]];
  filtersEl.classList.add("p-filters");
  filtersEl.innerHTML = tabs.map(([id, n], i) => `<button type="button" data-t="${id}" aria-pressed="${i === 0}">${n}</button>`).join("");
  const years = [...new Set(S.pubs.map(p => p.year))];
  listEl.innerHTML = years.map(y => `<div class="p-yr"><h3>${y}</h3><div>${S.pubs.filter(p => p.year === y).map(p => `
    <div class="p-it" data-t="${p.topics.join(" ")}">${p.url ? `<a class="pt" href="${p.url}">${p.title}</a>` : `<span class="pt">${p.title}</span>`}<p>${p.authors}</p><p class="vn">${p.venue}${p.links.map(([l, u]) => `<a href="${u}">${l}</a>`).join("")}</p></div>`).join("")}</div></div>`).join("");
  filtersEl.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    filtersEl.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
    listEl.querySelectorAll(".p-yr").forEach(y => {
      let any = false;
      y.querySelectorAll(".p-it").forEach(p => { const s = b.dataset.t === "all" || p.dataset.t.split(" ").includes(b.dataset.t); p.hidden = !s; any ||= s; });
      y.hidden = !any;
    });
  });
}

/* ---------- Encoder animation (compact) ---------- */
function encoder(canvas, { labels = true, center = .5 } = {}) {
  const caption = "A dog leaps to catch a frisbee as a wave breaks behind it.".split(" ");
  const tok = ["describe", "the", "scene"];
  U.animate(canvas, {
    still: 9,
    draw(ctx, w, h, t, st, css) {
      const ink = css("--text"), muted = css("--muted"), faint = css("--faint"), rule = css("--rule"), acc = css("--accent"), bg = css("--bg");
      const mono = css("--mono") || "monospace", sans = css("--sans") || "sans-serif";
      ctx.clearRect(0, 0, w, h);
      const vert = w < 460;                     // stacked layout for narrow frames
      const lab = labels && !vert && w > 560;
      const ew = vert ? 70 : Math.min(96, w * .14), eh = vert ? 78 : Math.min(h * .72, 120);
      const ex = vert ? w * .74 : w * center, ey = vert ? h * .3 : h * .5;
      const lanes = vert ? [h * .1, h * .3, h * .5] : [h * .2, h * .5, h * .8];
      const L0 = lab ? 52 : 10, Lend = ex - ew / 2 - (vert ? 18 : 34);
      const path = (i, u) => {
        const x0 = L0, y0 = lanes[i], x1 = Lend, x2 = ex - ew / 2 + 4;
        if (u < .72) return [x0 + (x1 - x0) * u / .72, y0];
        const k = (u - .72) / .28, s = k * k * (3 - 2 * k);
        return [x1 + (x2 - x1) * k, y0 + (ey + (i - 1) * eh * .22 - y0) * s];
      };
      ctx.font = `500 9.5px ${mono}`; ctx.fillStyle = faint; ctx.textBaseline = "middle"; ctx.textAlign = "left";
      if (lab) ["VIDEO", "AUDIO", "TEXT"].forEach((l, i) => ctx.fillText(l, 0, lanes[i]));
      ctx.strokeStyle = rule; ctx.lineWidth = 1;
      lanes.forEach((_, i) => { ctx.beginPath(); for (let u = 0; u <= 1.001; u += .02) { const [x, y] = path(i, u); u ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); });
      const sp = .085, fw = vert ? 22 : 26, fh = vert ? 15 : 17;
      for (let n = 0; n < 5; n++) {
        const u = (t * sp + n / 5) % 1, [x, y] = path(0, u), a = u > .9 ? (1 - u) / .1 : u < .06 ? u / .06 : 1;
        ctx.globalAlpha = a; ctx.strokeStyle = ink; ctx.fillStyle = bg; ctx.lineWidth = 1.1;
        ctx.beginPath(); ctx.rect(x - fw / 2, y - fh / 2, fw, fh); ctx.fill(); ctx.stroke();
        const ph = (n / 5 + t * .05) % 1;
        ctx.fillStyle = acc; ctx.beginPath(); ctx.arc(x - fw / 2 + 4 + ph * (fw - 8), y + 1 - Math.sin(ph * Math.PI) * 3.5, 2.1, 0, 6.283); ctx.fill();
      }
      ctx.globalAlpha = 1; ctx.strokeStyle = ink; ctx.lineWidth = 1.2; ctx.beginPath();
      for (let u = 0; u <= .9; u += .005) {
        const [x, y] = path(1, u), env = Math.min(1, u / .08) * Math.min(1, (.9 - u) / .15);
        const s = Math.sin(u * 170 - t * 9) * .6 + Math.sin(u * 71 - t * 5.3) * .4;
        u ? ctx.lineTo(x, y + s * (vert ? 7 : 9) * env * (.45 + .55 * Math.abs(Math.sin(u * 13 - t * 1.3)))) : ctx.moveTo(x, y);
      }
      ctx.stroke();
      ctx.font = `500 ${vert ? 9.5 : 10.5}px ${mono}`; ctx.textAlign = "center";
      for (let n = 0; n < 3; n++) {
        const u = (t * sp * .9 + n / 3) % 1, [x, y] = path(2, u), a = u > .9 ? (1 - u) / .1 : u < .06 ? u / .06 : 1, tw = ctx.measureText(tok[n]).width + 12;
        ctx.globalAlpha = a; ctx.fillStyle = bg; ctx.strokeStyle = ink; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x - tw / 2, y - 9, tw, 18, 9) : ctx.rect(x - tw / 2, y - 9, tw, 18); ctx.fill(); ctx.stroke();
        ctx.fillStyle = ink; ctx.fillText(tok[n], x, y + .5);
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = bg; ctx.strokeStyle = ink; ctx.lineWidth = 1.3;
      ctx.beginPath(); ctx.roundRect ? ctx.roundRect(ex - ew / 2, ey - eh / 2, ew, eh, 7) : ctx.rect(ex - ew / 2, ey - eh / 2, ew, eh); ctx.fill(); ctx.stroke();
      const gc = 5, gr = 4, cs = Math.min((ew - 18) / gc, (eh - 18) / gr), gx = ex - gc * cs / 2 + cs / 2, gy = ey - gr * cs / 2 + cs / 2;
      for (let i = 0; i < gc; i++) for (let j = 0; j < gr; j++) {
        const v = .5 + .5 * Math.sin(t * 2.2 + i * 1.3 + j * .9 + Math.sin(t * .7 + i * j));
        ctx.fillStyle = (i + j + Math.floor(t * 2)) % 7 === 0 ? acc : ink; ctx.globalAlpha = .12 + v * .6;
        ctx.fillRect(gx + i * cs - cs * .3, gy + j * cs - cs * .3, cs * .6, cs * .6);
      }
      ctx.globalAlpha = 1; ctx.font = `500 8.5px ${mono}`; ctx.fillStyle = faint; ctx.textAlign = "center";
      ctx.fillText("ENCODER", ex, ey + eh / 2 + 11);
      // output
      const cx0 = vert ? 10 : ex + ew / 2 + 30, cy = vert ? h * .8 : ey;
      for (let n = 0; n < 4; n++) {
        const u = (t * .35 + n / 4) % 1;
        const x = vert ? ex : ex + ew / 2 + 4 + (cx0 - 10 - ex - ew / 2) * u, y = vert ? ey + eh / 2 + 18 + (cy - 30 - ey - eh / 2 - 18) * u : cy;
        ctx.fillStyle = acc; ctx.globalAlpha = Math.sin(u * Math.PI); ctx.beginPath(); ctx.arc(x, y, 2.4, 0, 6.283); ctx.fill();
      }
      const C = 12, p = t % C, nw = Math.min(caption.length, Math.floor(p / .55)), fade = p > C - 1 ? C - p : 1;
      const fs = vert ? 15 : Math.max(13, Math.min(17, w * .022)), lh = fs * 1.35;
      ctx.globalAlpha = 1; ctx.textAlign = "left"; ctx.font = `500 8.5px ${mono}`; ctx.fillStyle = faint;
      ctx.fillText("CAPTION", cx0, cy - lh * (vert ? 1.2 : 1.45));
      ctx.font = `400 ${fs}px ${sans}`; ctx.fillStyle = ink; ctx.globalAlpha = fade;
      const maxW = w - cx0 - 8; let line = "", ly = cy - lh * (vert ? .2 : .5);
      caption.slice(0, nw).forEach(wd => { const s = line ? line + " " + wd : wd; if (ctx.measureText(s).width > maxW) { ctx.fillText(line, cx0, ly); line = wd; ly += lh; } else line = s; });
      ctx.fillText(line, cx0, ly);
      if (nw < caption.length && Math.floor(t * 2) % 2) { ctx.fillStyle = acc; ctx.fillRect(cx0 + ctx.measureText(line).width + 3, ly - fs * .5, 1.6, fs); }
      ctx.globalAlpha = 1;
    }
  });
}

/* ---------- Denoise animation (compact) ---------- */
function denoise(canvas, hudL, hudR, promptEl) {
  const prompt = "a quiet shoreline at dusk, slow waves";
  const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
  U.animate(canvas, {
    still: 8,
    init(w, h) { const gap = 6, cols = Math.floor(w / gap), rows = Math.floor(h / gap); return { gap, cols, rows, ox: (w - (cols - 1) * gap) / 2, oy: (h - (rows - 1) * gap) / 2 }; },
    draw(ctx, w, h, t, st) {
      const L = 13, p = t % L; let s, ph, vt = 0;
      if (p < .6) { s = 1; ph = "noise"; } else if (p < 5.4) { s = 1 - (p - .6) / 4.8; ph = "denoise"; }
      else if (p < 11.2) { s = 0; ph = "video"; vt = p - 5.4; } else { s = (p - 11.2) / 1.8; ph = "renoise"; vt = 5.8; }
      const step = Math.round(s * 50), sd = step / 50, abar = Math.cos(sd * Math.PI / 2) ** 2, a = Math.sqrt(abar), b = Math.sqrt(1 - abar);
      ctx.fillStyle = "#0B0C0E"; ctx.fillRect(0, 0, w, h);
      const { gap, cols, rows, ox, oy } = st, sx = .7, sy = .4, hor = .56;
      for (let j = 0; j < rows; j++) { const v = j / (rows - 1);
        for (let i = 0; i < cols; i++) { const u = i / (cols - 1); let f, warm = 0;
          const dx = (u - sx) * 1.6, dy = v - sy, ds = Math.sqrt(dx * dx + dy * dy);
          if (v < hor) { f = .16 + .52 * Math.pow(v / hor, 1.5); const sun = Math.max(0, 1 - ds / .12); if (sun > 0) f = Math.max(f, .75 + .25 * sun); warm = Math.max(0, 1 - ds / .32) * .9; }
          else { const d = (v - hor) / (1 - hor); const wave = .5 + .5 * Math.sin(u * 22 - d * 46 + vt * 2.1 + Math.sin(u * 5 + vt * .7) * 1.4);
            f = .1 + .38 * wave * (1 - d * .45); const refl = Math.max(0, 1 - Math.abs(u - sx) / (.05 + d * .1));
            f += refl * .6 * (.5 + .5 * Math.sin(v * 90 - vt * 5 + u * 30)) * (1 - d * .6); warm = refl * .9; }
          f = Math.min(1, Math.max(0, f));
          const val = Math.min(1, Math.max(0, a * f + b * hash(i + j * 997, ph === "video" ? 0 : step)));
          ctx.fillStyle = warm * a > .15 ? `rgba(231,164,98,${.35 + val * .65})` : `rgba(237,235,230,${.16 + val * .8})`;
          ctx.beginPath(); ctx.arc(ox + i * gap, oy + j * gap, .3 + val * gap * .42, 0, 6.283); ctx.fill();
        } }
      if (promptEl) promptEl.textContent = p < .9 ? prompt.slice(0, Math.floor(p / .9 * prompt.length)) : prompt;
      if (hudL) { if (ph === "video") { hudL.textContent = "video"; hudR.innerHTML = `frame <b>${String(Math.min(48, Math.floor(vt / 5.8 * 48) + 1)).padStart(2, "0")}</b>/48`; }
        else { hudL.textContent = ph === "renoise" ? "noising" : "denoising"; hudR.innerHTML = `t=<b>${String(Math.round(sd * 1000)).padStart(4, " ")}</b>`; } }
    }
  });
}


/* ---------- Pixel chase: full-strip diffusion → motion ---------- */
function chase(canvas) {
  const hash = (a, b, c) => { const x = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453; return x - Math.floor(x); };
  // Original sprites. Dino faces right.
  const DBODY = [
    "...............XXXXXX..",
    "..............XXXXXXXX.",
    "..............XX.XXXXXX",
    "..............XXXXXXXXX",
    "..............XXXXX....",
    "..............XXXXXXX..",
    ".......A.A...XXXXX.....",
    "......AAAAA.XXXXXXX....",
    "XX...XXXXXXXXXXXXXX....",
    ".XXXXXXXXXXXXXXXXX.X...",
    "..XXXXXXXXXXXXXXXX.....",
    "....XXXXXXXXXXXXX......",
    "......XXXXXXXXX........"];
  const DLEGS = [
    ["........XX...XX........", ".......XX.....XX.......", "......XX.......XX......", "......X.........XX....."],
    ["........XX...XX........", "........XX...XX........", "........XX...XX........", ".......XXX..XXX........"],
    ["........XX...XX........", ".........XX.XX.........", "........XX..XX.........", ".......XX..XX.........."],
    ["........XX...XX........", "........XX...XX........", "........XX...XX........", ".......XXX..XXX........"]];
  // Original robot, facing right. L antenna light, A eye, P chest light, G mid-grey panels.
  const ROBOT = [
    "..........L.............",
    "..........X.............",
    "......XXXXXXXXX.........",
    ".....XXXXXXXXXXX........",
    ".....XXWWWWWWWXX........",
    ".....XXWWWWWAAWX........",
    ".....XXWWWWWWWXX........",
    ".....XXXXXXXXXXX........",
    "......XXXXXXXXX.........",
    "........XXXXX...........",
    ".....XXXXXXXXXXX........",
    "....XXXXXXXXXXXXX.......",
    "....XXGGGGGGGXXXX.......",
    "....XXGPGGGGGXXXX.......",
    "....XXGGGGGGGXXXX.......",
    "....XXXXXXXXXXXXX.......",
    ".....XXXXXXXXXXX........",
    "......X.......X........."];
  const CODE = { X: 1, A: 3, S: 3, W: 7, Y: 6, L: 4, M: 5 };
  let grid = null, G = { cols: 0, rows: 0 }, sky = [];
  SITE_UTIL.animate(canvas, {
    still: 6,
    init(w, h) {
      const px = w < 520 ? 2 : 3, cols = Math.ceil(w / px), rows = Math.floor(h / px);
      grid = new Uint8Array(cols * rows); G = { px, cols, rows };
      sky = []; let x = 0, k = 0;
      while (x < 900) { const bw = 6 + Math.floor(hash(k, 1, 2) * 10), bh = 5 + Math.floor(hash(k, 3, 4) * 13); sky.push([x, bw, bh, k]); x += bw + 1 + Math.floor(hash(k, 5, 6) * 3); k++; }
      return {};
    },
    draw(ctx, w, h, t, st, css) {
      const { px, cols, rows } = G, ink = css("--text"), bg = css("--bg"), acc = css("--accent");
      const set = (x, y, c) => { x = Math.round(x); y = Math.round(y); if (x >= 0 && x < cols && y >= 0 && y < rows && (c === 7 || !grid[y * cols + x] || c !== 2)) grid[y * cols + x] = c; };
      const sprite = (sp, ox, oy) => sp.forEach((row, y) => { for (let x = 0; x < row.length; x++) { const c = CODE[row[x]]; if (c) set(ox + x, oy + y, c); } });
      grid.fill(0);
      const g = rows - 7, speed = 26, s = t * speed;
      // skyline (parallax) and lamps
      const so = s * .25;
      sky.forEach(([bx, bw, bh, k]) => { for (let rep = -1; rep < Math.ceil(cols / 900) + 1; rep++) { const x0 = bx + rep * 900 - (so % 900); if (x0 > cols || x0 + bw < 0) continue;
        for (let y = g - bh; y < g; y++) for (let x = x0; x < x0 + bw; x++) set(x, y, ((x - x0) % 3 === 1 && (g - y) % 3 === 1 && hash(k, x - x0, y) < .35) ? 0 : 2); } });
      for (let L = -((s) % 72); L < cols; L += 72) { for (let y = g - 15; y < g; y++) set(L, y, 1); set(L + 1, g - 15, 1); set(L + 2, g - 15, 1); set(L + 2, g - 14, 6); }
      // road
      for (let x = 0; x < cols; x++) { set(x, g, 1); if (((x + Math.floor(s)) % 8) < 4) set(x, g + 3, 8); }
      // cones
      const dinoX = Math.round(cols * .6 + Math.sin(t * .7) * cols * .05), robX = Math.round(dinoX - 40 - Math.sin(t * 1.3) * 6);
      let dj = 0, cj = 0;
      for (let cw = Math.ceil((s - 40) / 190) * 190 + 120; cw < s + cols + 40; cw += 190) {
        const cx = cw - s; ["..O..", ".OOO.", "OWOWO".replace(/W/g, "O"), "OOOOO"].forEach((r, y) => { for (let x = 0; x < 5; x++) if (r[x] === "O") set(cx + x, g - 4 + y, y === 2 ? 7 : 9); });
        const dd = (cx + 2) - (dinoX + 11); if (Math.abs(dd) < 13) dj = Math.max(dj, Math.round(10 * (1 - (dd / 13) ** 2)));
        const cd = (cx + 2) - (robX + 11); if (Math.abs(cd) < 6) cj = 1;
      }
      // robot: bobbing body, rolling treads, reaching arm with a claw
      const rf = Math.floor(t * 8) % 2, rbob = rf ? -1 : 0, ry = g - 21 - cj;
      const RC = { X: 1, W: 7, A: 3, G: 13 };
      ROBOT.forEach((row, y) => { for (let x = 0; x < row.length; x++) { const ch = row[x]; let c = RC[ch];
        if (ch === "L") c = Math.floor(t * 3) % 2 ? 3 : 13;
        if (ch === "P") c = Math.sin(t * 4) > 0 ? 3 : 13;
        if (c) set(robX + x, ry + y + rbob, c); } });
      const tp = ((Math.floor(t * 14) % 3) + 3) % 3;
      for (let x = 3; x <= 19; x++) { set(robX + x, ry + 18, 1); set(robX + x, ry + 20, 1); }
      for (let x = 2; x <= 20; x++) set(robX + x, ry + 19, (x > 2 && x < 20 && (x + tp) % 3 === 0) ? 13 : 1);
      set(robX + 2, ry + 18, 13); set(robX + 20, ry + 18, 13); set(robX + 2, ry + 20, 13); set(robX + 20, ry + 20, 13);
      const ay = ry + 12 + rbob;
      for (let x = 17; x <= 21; x++) set(robX + x, ay, 1);
      set(robX + 17, ay - 1, 1);
      if (Math.floor(t * 3) % 2) { set(robX + 22, ay - 1, 1); set(robX + 23, ay - 2, 1); set(robX + 22, ay + 1, 1); set(robX + 23, ay + 2, 1); }
      else { set(robX + 22, ay - 1, 1); set(robX + 23, ay, 1); set(robX + 22, ay + 1, 1); }
      (rf ? [[3, 12], [2, 13], [2, 14], [1, 15]] : [[3, 12], [3, 13], [2, 14], [2, 15]]).forEach(([x, y]) => set(robX + x, ry + y + rbob, 13));
      // exhaust behind the robot
      for (let i = 0; i < 4; i++) if (hash(i, Math.floor(t * 12), 3) < .5) set(robX - 1 - i * 2, ry + 15 + rbob - (i % 2), 2);
      // dino: 4-frame run cycle, body rbob, tucked legs in the air
      const fr = ((Math.floor(t * 10) % 4) + 4) % 4, bob = (fr % 2) ? -1 : 0, dy = g - 17 - dj + (dj ? 0 : bob);
      sprite(DBODY, dinoX, dy);
      sprite(DLEGS[dj ? 1 : fr], dinoX, dy + 13);
      if (Math.floor(t * .6) % 5 === 0 && (t % 1.67) < .12) set(dinoX + 16, dy + 2, 1);   // blink
      if (!dj && hash(fr, Math.floor(t * 10), 1) < .5) set(dinoX + 5 - fr, g - 1, 2);   // kicked-up dust

      // diffusion schedule over the whole strip
      const Lc = 12, p = t % Lc;
      let sd, ph;
      if (p < .8) { sd = 1; ph = "noise"; } else if (p < 3.6) { sd = 1 - (p - .8) / 2.8; ph = "denoise"; } else if (p < 10.4) { sd = 0; ph = "video"; } else { sd = (p - 10.4) / 1.6; ph = "noise"; }
      const step = Math.round(sd * 50), abar = Math.cos(step / 50 * Math.PI / 2) ** 2, a = Math.sqrt(abar), b = Math.sqrt(1 - abar);
      const seed = ph === "video" ? 0 : step * 7 + (ph === "noise" ? Math.floor(t * 12) : 0);
      const PAL = { 1: ink, 2: ink, 3: acc, 4: "#E5484D", 5: "#3B82F6", 6: "#F2B33D", 7: bg, 8: ink, 9: "#F08A24", 10: "#E5484D", 11: "#3B82F6", 12: "#F2B33D", 13: ink };
      const INT = { 1: 1, 2: .16, 3: 1, 4: 1, 5: 1, 6: 1, 7: 0, 8: .3, 9: 1, 10: .28, 11: .28, 12: .1, 13: .45 };
      ctx.clearRect(0, 0, w, h);
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const c = grid[y * cols + x], sv = c ? INT[c] : 0;
        const v = b > .01 ? a * sv + b * Math.pow(hash(x, y, seed), 1.6) * .75 : sv;
        if (v < .07) continue;
        ctx.globalAlpha = Math.min(1, v);
        ctx.fillStyle = c && a > .6 ? PAL[c] : (hash(y, x, seed + 1) < .06 * b ? acc : ink);
        ctx.fillRect(x * px, y * px, px, px);
      }
      ctx.globalAlpha = 1;
      ctx.font = `500 10px ${css("--mono") || "monospace"}`; ctx.fillStyle = css("--muted"); ctx.textAlign = "right"; ctx.textBaseline = "top";
      ctx.fillText(ph === "video" ? "t = 0 · generating video" : `denoising · t = ${String(Math.round(sd * 1000)).padStart(4, "0")}`, w - 6, 5);
    }
  });
}

window.COMP = { career, papers, encoder, denoise, chase };
})();
