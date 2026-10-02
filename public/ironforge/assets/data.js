/* IRONFORGE MARKET — catalogue data and product renders (demo content) */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     Product renders — stylised metallic SVG illustrations.
     Tokens: {M} metal, {D} gunmetal, {O} olive, {L} rim light. Each render
     gets unique gradient ids so many can live on one page.
     ------------------------------------------------------------------------ */

  const SHAPES = {
    carrier: `
      <path d="M70 46h26l10 20h28l10-20h26l8 38v108a10 10 0 0 1-10 10H72a10 10 0 0 1-10-10V84z" fill="{O}" stroke="#141710" stroke-width="2"/>
      <path d="M96 46l10 20h28l10-20" fill="none" stroke="{L}" stroke-width="2" opacity=".6"/>
      <rect x="70" y="92" width="100" height="8" fill="{D}"/>
      <rect x="70" y="104" width="100" height="3" fill="#141710" opacity=".5"/>
      <g fill="{D}" stroke="#141710" stroke-width="1.5">
        <rect x="76" y="118" width="26" height="40" rx="2"/>
        <rect x="107" y="118" width="26" height="40" rx="2"/>
        <rect x="138" y="118" width="26" height="40" rx="2"/>
      </g>
      <g fill="{M}"><rect x="84" y="114" width="10" height="8" rx="1"/><rect x="115" y="114" width="10" height="8" rx="1"/><rect x="146" y="114" width="10" height="8" rx="1"/></g>
      <g stroke="#141710" stroke-width="2" opacity=".55"><path d="M72 172h96M72 182h96M72 192h96"/></g>
      <path d="M62 128h-8v40h8M178 128h8v40h-8" fill="none" stroke="{D}" stroke-width="6"/>`,

    helmet: `
      <path d="M44 150c0-62 38-96 80-96s80 34 80 92v10h-22l-6-10H66l-6 12H44z" fill="{O}" stroke="#141710" stroke-width="2"/>
      <path d="M62 112c8-30 32-46 62-46" fill="none" stroke="{L}" stroke-width="3" opacity=".55" stroke-linecap="round"/>
      <rect x="56" y="122" width="52" height="12" rx="2" fill="{D}"/>
      <g fill="{M}"><rect x="60" y="125" width="6" height="6"/><rect x="72" y="125" width="6" height="6"/><rect x="84" y="125" width="6" height="6"/><rect x="96" y="125" width="6" height="6"/></g>
      <rect x="150" y="122" width="44" height="12" rx="2" fill="{D}"/>
      <path d="M108 56h32l4 22h-40z" fill="{M}" stroke="#141710" stroke-width="1.5"/>
      <rect x="116" y="62" width="16" height="8" rx="1" fill="{D}"/>
      <path d="M44 150h18l8-12h108l8 12h18" fill="none" stroke="#141710" stroke-width="3"/>
      <path d="M86 150v18a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6v-18" fill="none" stroke="{D}" stroke-width="5"/>`,

    pack: `
      <path d="M96 40c0-10 48-10 48 0v12h-10v-6c0-5-28-5-28 0v6H96z" fill="{D}"/>
      <rect x="66" y="50" width="108" height="156" rx="20" fill="{O}" stroke="#141710" stroke-width="2"/>
      <path d="M78 66c10-6 74-6 84 0" fill="none" stroke="{L}" stroke-width="2.5" opacity=".5" stroke-linecap="round"/>
      <path d="M74 100c20-12 72-12 92 0" fill="none" stroke="{M}" stroke-width="2.5"/>
      <rect x="80" y="122" width="80" height="68" rx="8" fill="{D}" stroke="#141710" stroke-width="1.5"/>
      <g stroke="#141710" stroke-width="2.5" opacity=".7"><path d="M84 136h72M84 150h72M84 164h72M84 178h72"/></g>
      <g fill="{M}"><rect x="96" y="114" width="10" height="12" rx="2"/><rect x="134" y="114" width="10" height="12" rx="2"/></g>
      <path d="M66 84h-8v90h8M174 84h8v90h-8" fill="none" stroke="{D}" stroke-width="6"/>`,

    flashlight: `
      <defs><linearGradient id="beam{U}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff6dc" stop-opacity=".55"/><stop offset="1" stop-color="#fff6dc" stop-opacity="0"/></linearGradient></defs>
      <g transform="rotate(-28 120 120)">
        <path d="M176 104l70-34v100l-70-34z" fill="url(#beam{U})"/>
        <rect x="40" y="108" width="98" height="24" rx="4" fill="{D}" stroke="#141710" stroke-width="1.5"/>
        <g stroke="#141710" stroke-width="2" opacity=".6"><path d="M52 108v24M60 108v24M68 108v24M76 108v24M84 108v24M92 108v24"/></g>
        <rect x="136" y="100" width="18" height="40" rx="3" fill="{M}"/>
        <rect x="152" y="96" width="26" height="48" rx="4" fill="{M}" stroke="#141710" stroke-width="1.5"/>
        <rect x="174" y="98" width="6" height="44" rx="2" fill="#fff6dc"/>
        <rect x="28" y="110" width="14" height="20" rx="3" fill="{O}"/>
        <path d="M44 112h90" stroke="{L}" stroke-width="2" opacity=".5"/>
      </g>`,

    boot: `
      <path d="M78 40h56l4 82c22 6 52 16 62 34 6 10 4 24-4 28H64c-8 0-12-6-12-14l10-56z" fill="{O}" stroke="#141710" stroke-width="2"/>
      <path d="M52 174h148c4 0 6 4 4 8l-4 10H56c-4 0-6-4-6-8z" fill="{D}" stroke="#141710" stroke-width="2"/>
      <g stroke="#141710" stroke-width="2" opacity=".6"><path d="M62 190h6M76 190h6M90 190h6M104 190h6M118 190h6M132 190h6M146 190h6M160 190h6M174 190h6"/></g>
      <rect x="74" y="34" width="64" height="12" rx="3" fill="{D}"/>
      <g stroke="{M}" stroke-width="3" stroke-linecap="round"><path d="M96 58l30 8M96 72l30 8M96 86l30 8M98 100l32 8M102 114l32 8"/></g>
      <path d="M64 146c28-4 64 4 92 16" fill="none" stroke="{L}" stroke-width="2" opacity=".45"/>
      <path d="M140 122c22 6 52 16 62 34" fill="none" stroke="{D}" stroke-width="6" opacity=".7"/>`,

    gloves: `
      <path d="M78 206v-48l-18-34c-4-8 6-14 12-8l14 18V68c0-8 12-8 12 0v50-62c0-8 12-8 12 0v62-58c0-8 12-8 12 0v58-50c0-8 12-8 12 0v84c0 22-8 38-16 46v20z" fill="{O}" stroke="#141710" stroke-width="2"/>
      <g fill="{D}"><rect x="85" y="74" width="14" height="14" rx="3"/><rect x="97" y="62" width="14" height="14" rx="3"/><rect x="109" y="66" width="14" height="14" rx="3"/><rect x="121" y="76" width="14" height="14" rx="3"/></g>
      <path d="M86 128c14-6 34-6 52 2v20c-18-6-38-6-52 0z" fill="{D}" stroke="#141710" stroke-width="1.5"/>
      <rect x="78" y="180" width="62" height="16" fill="{D}"/>
      <rect x="120" y="176" width="22" height="24" rx="2" fill="{M}"/>
      <path d="M92 84v40M116 76v44" stroke="{L}" stroke-width="2" opacity=".35"/>`,

    binoculars: `
      <rect x="54" y="62" width="50" height="118" rx="12" fill="{D}" stroke="#141710" stroke-width="2"/>
      <rect x="136" y="62" width="50" height="118" rx="12" fill="{D}" stroke="#141710" stroke-width="2"/>
      <rect x="58" y="88" width="42" height="60" rx="4" fill="{O}"/>
      <rect x="140" y="88" width="42" height="60" rx="4" fill="{O}"/>
      <rect x="100" y="80" width="40" height="18" rx="3" fill="{M}"/>
      <rect x="100" y="128" width="40" height="14" rx="3" fill="{M}"/>
      <circle cx="120" cy="89" r="11" fill="{D}" stroke="{M}" stroke-width="3"/>
      <ellipse cx="79" cy="176" rx="22" ry="8" fill="#0c0e10" stroke="{M}" stroke-width="3"/>
      <ellipse cx="161" cy="176" rx="22" ry="8" fill="#0c0e10" stroke="{M}" stroke-width="3"/>
      <ellipse cx="79" cy="174" rx="12" ry="4" fill="#3d6a7a" opacity=".7"/>
      <ellipse cx="161" cy="174" rx="12" ry="4" fill="#3d6a7a" opacity=".7"/>
      <rect x="62" y="50" width="34" height="16" rx="4" fill="{M}"/><rect x="144" y="50" width="34" height="16" rx="4" fill="{M}"/>
      <path d="M62 96v44M144 96v44" stroke="{L}" stroke-width="2" opacity=".4"/>`,

    watch: `
      <rect x="94" y="22" width="52" height="66" rx="6" fill="{O}" stroke="#141710" stroke-width="2"/>
      <rect x="94" y="152" width="52" height="66" rx="6" fill="{O}" stroke="#141710" stroke-width="2"/>
      <g stroke="#141710" stroke-width="2" opacity=".5"><path d="M100 34h40M100 46h40M100 194h40M100 206h40"/></g>
      <circle cx="120" cy="120" r="54" fill="{M}" stroke="#141710" stroke-width="2"/>
      <circle cx="120" cy="120" r="46" fill="{D}"/>
      <circle cx="120" cy="120" r="40" fill="#0d0f10"/>
      <g stroke="{M}" stroke-width="3"><path d="M120 84v8M120 148v8M84 120h8M148 120h8"/></g>
      <g stroke="#555b60" stroke-width="1.5"><path d="M138 89l-3 5M151 102l-5 3M151 138l-5-3M138 151l-3-5M102 151l3-5M89 138l5-3M89 102l5 3M102 89l3 5"/></g>
      <path d="M120 120l-14-22" stroke="{M}" stroke-width="4" stroke-linecap="round"/>
      <path d="M120 120l26 10" stroke="#b4c27a" stroke-width="3" stroke-linecap="round"/>
      <circle cx="120" cy="120" r="4" fill="{M}"/>
      <rect x="172" y="112" width="10" height="16" rx="2" fill="{M}"/>
      <path d="M84 96a46 46 0 0 1 36-22" fill="none" stroke="{L}" stroke-width="2" opacity=".5"/>`,

    timer: `
      <rect x="62" y="40" width="116" height="164" rx="14" fill="{D}" stroke="#141710" stroke-width="2"/>
      <rect x="62" y="40" width="116" height="164" rx="14" fill="none" stroke="{L}" stroke-width="1.5" opacity=".35"/>
      <rect x="76" y="58" width="88" height="56" rx="4" fill="#0b0d0a" stroke="{M}" stroke-width="2"/>
      <text x="120" y="96" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="24" font-weight="600" fill="#b4c27a">2.148</text>
      <text x="84" y="70" font-family="JetBrains Mono, monospace" font-size="7" fill="#6c7552">SHOT 06 · PAR 2.50</text>
      <g fill="{O}" stroke="#141710" stroke-width="1.5"><rect x="78" y="128" width="38" height="22" rx="4"/><rect x="124" y="128" width="38" height="22" rx="4"/></g>
      <circle cx="120" cy="176" r="15" fill="{M}" stroke="#141710" stroke-width="1.5"/>
      <circle cx="120" cy="176" r="8" fill="{D}"/>
      <rect x="104" y="32" width="32" height="10" rx="3" fill="{M}"/>`,

    earpro: `
      <path d="M60 128c0-60 26-94 60-94s60 34 60 94" fill="none" stroke="{D}" stroke-width="14" stroke-linecap="round"/>
      <path d="M60 128c0-60 26-94 60-94s60 34 60 94" fill="none" stroke="{L}" stroke-width="2" opacity=".35"/>
      <rect x="34" y="112" width="52" height="84" rx="22" fill="{O}" stroke="#141710" stroke-width="2"/>
      <rect x="154" y="112" width="52" height="84" rx="22" fill="{O}" stroke="#141710" stroke-width="2"/>
      <rect x="44" y="130" width="32" height="48" rx="12" fill="{D}"/>
      <rect x="164" y="130" width="32" height="48" rx="12" fill="{D}"/>
      <circle cx="60" cy="154" r="8" fill="{M}"/>
      <rect x="172" y="146" width="16" height="16" rx="3" fill="{M}"/>
      <path d="M180 196v14" stroke="{M}" stroke-width="4" stroke-linecap="round"/>`,

    multitool: `
      <g transform="rotate(-20 120 120)">
        <path d="M108 28l-12 64h20z" fill="{M}" stroke="#141710" stroke-width="1.5"/>
        <path d="M132 28l12 64h-20z" fill="{M}" stroke="#141710" stroke-width="1.5"/>
        <circle cx="120" cy="98" r="9" fill="{D}" stroke="{M}" stroke-width="3"/>
        <rect x="92" y="104" width="24" height="112" rx="6" fill="{D}" stroke="#141710" stroke-width="1.5"/>
        <rect x="124" y="104" width="24" height="112" rx="6" fill="{D}" stroke="#141710" stroke-width="1.5"/>
        <rect x="96" y="124" width="16" height="70" rx="3" fill="{O}"/>
        <rect x="128" y="124" width="16" height="70" rx="3" fill="{O}"/>
        <path d="M100 52l8-14M140 52l-8-14" stroke="#141710" stroke-width="1.5"/>
        <path d="M95 110v100" stroke="{L}" stroke-width="2" opacity=".4"/>
      </g>`,

    shelter: `
      <path d="M24 196L120 52l96 144z" fill="{O}" stroke="#141710" stroke-width="2"/>
      <path d="M120 52l-30 144h60z" fill="{D}" stroke="#141710" stroke-width="1.5"/>
      <path d="M120 80l-18 116h36z" fill="#0c0e0c"/>
      <path d="M120 52l-96 144" stroke="{L}" stroke-width="2.5" opacity=".45"/>
      <path d="M120 40v16" stroke="{M}" stroke-width="5" stroke-linecap="round"/>
      <path d="M24 196l-12 10M216 196l12 10" stroke="{M}" stroke-width="3" stroke-linecap="round"/>
      <path d="M58 146h28M154 146h28" stroke="#141710" stroke-width="2" opacity=".5"/>
      <path d="M12 206h216" stroke="#2a2e2a" stroke-width="2"/>`,

    /* ---- Historic & Prestige collection ---- */

    tulwar: `
      <g transform="rotate(-32 120 120)">
        <path d="M74 124c44 0 98-4 150-30-44 32-100 44-150 44z" fill="{M}" stroke="#141710" stroke-width="1.5"/>
        <path d="M78 129c46 0 96-6 138-28" fill="none" stroke="{L}" stroke-width="1.2" opacity=".55"/>
        <path d="M78 134c40 0 86-4 128-20" fill="none" stroke="#141710" stroke-width="1" opacity=".35"/>
        <rect x="64" y="112" width="12" height="38" rx="4" fill="{B}" stroke="#141710" stroke-width="1.2"/>
        <path d="M66 112l-6-8h8zM66 150l-6 8h8z" fill="{B}"/>
        <rect x="34" y="125" width="32" height="14" rx="6" fill="{B}" stroke="#141710" stroke-width="1.2"/>
        <path d="M40 125v14M48 125v14M56 125v14" stroke="#5b4214" stroke-width="1" opacity=".6"/>
        <circle cx="26" cy="132" r="12" fill="{B}" stroke="#141710" stroke-width="1.5"/>
        <circle cx="26" cy="132" r="4" fill="#5b4214"/>
        <path d="M66 148c-10 18-30 18-40 10" fill="none" stroke="{B}" stroke-width="3.5" stroke-linecap="round"/>
      </g>`,

    dhal: `
      <circle cx="120" cy="120" r="90" fill="{D}" stroke="{B}" stroke-width="6"/>
      <circle cx="120" cy="120" r="76" fill="none" stroke="{B}" stroke-width="1.5" stroke-dasharray="2 5"/>
      <circle cx="120" cy="120" r="44" fill="none" stroke="{B}" stroke-width="1.2" opacity=".75"/>
      <path d="M80 70c10-14 26-22 40-22s30 8 40 22c-12-8-26-12-40-12s-28 4-40 12z" fill="{B}" opacity=".85"/>
      <path d="M80 170c10 14 26 22 40 22s30-8 40-22c-12 8-26 12-40 12s-28-4-40-12z" fill="{B}" opacity=".85"/>
      <g fill="{B}" stroke="#141710" stroke-width="1.5"><circle cx="100" cy="100" r="11"/><circle cx="140" cy="100" r="11"/><circle cx="100" cy="140" r="11"/><circle cx="140" cy="140" r="11"/></g>
      <g fill="#fff6dc" opacity=".55"><circle cx="97" cy="97" r="3"/><circle cx="137" cy="97" r="3"/><circle cx="97" cy="137" r="3"/><circle cx="137" cy="137" r="3"/></g>
      <path d="M48 96a76 76 0 0 1 48-48" fill="none" stroke="{L}" stroke-width="2.5" opacity=".35" stroke-linecap="round"/>`,

    khud: `
      <defs><pattern id="mail{U}" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="2.1" fill="none" stroke="#a7adb3" stroke-width="1"/></pattern></defs>
      <path d="M64 136h112l-10 66H74z" fill="#1c1f22"/>
      <path d="M64 136h112l-10 66H74z" fill="url(#mail{U})"/>
      <path d="M60 134c0-50 28-74 60-74s60 24 60 74z" fill="{M}" stroke="#141710" stroke-width="2"/>
      <path d="M76 110c6-26 24-40 44-40" fill="none" stroke="{L}" stroke-width="2.5" opacity=".5" stroke-linecap="round"/>
      <path d="M116 60l4-38 4 38z" fill="{B}" stroke="#141710" stroke-width="1"/>
      <path d="M78 86c14-10 70-10 84 0" fill="none" stroke="{B}" stroke-width="2.5" stroke-dasharray="4 4"/>
      <rect x="56" y="128" width="128" height="10" rx="2" fill="{B}" stroke="#141710" stroke-width="1"/>
      <rect x="116" y="74" width="8" height="112" rx="3" fill="{B}" stroke="#141710" stroke-width="1"/>
      <path d="M112 186h16l-8 10z" fill="{B}"/>
      <g fill="{B}" stroke="#141710" stroke-width="1"><rect x="88" y="62" width="7" height="26" rx="2" transform="rotate(-18 91 75)"/><rect x="145" y="62" width="7" height="26" rx="2" transform="rotate(18 148 75)"/></g>`,

    compass: `
      <rect x="111" y="30" width="18" height="14" rx="5" fill="{B}" stroke="#141710" stroke-width="1.5"/>
      <circle cx="120" cy="126" r="80" fill="{B}" stroke="#141710" stroke-width="2"/>
      <circle cx="120" cy="126" r="66" fill="#efe5c8"/>
      <circle cx="120" cy="126" r="58" fill="none" stroke="#5b4a2a" stroke-width="6" stroke-dasharray="1 5.07"/>
      <circle cx="120" cy="126" r="46" fill="none" stroke="#8b7449" stroke-width=".8"/>
      <path d="M120 80l7 46h-14z" fill="#a8432f"/>
      <path d="M120 172l7-46h-14z" fill="#2a2d30"/>
      <path d="M74 126l46-5v10zM166 126l-46-5v10z" fill="#8b7449" opacity=".55"/>
      <circle cx="120" cy="126" r="5" fill="{B}" stroke="#141710"/>
      <text x="120" y="74" text-anchor="middle" font-family="Georgia, serif" font-size="12" font-weight="700" fill="#3b2f1a">N</text>
      <path d="M70 100a56 56 0 0 1 40-36" fill="none" stroke="#fff" stroke-width="3" opacity=".35" stroke-linecap="round"/>`,

    pocketwatch: `
      <path d="M120 40c-30-30-80-10-96 30" fill="none" stroke="{B}" stroke-width="2.5" stroke-dasharray="5 3"/>
      <circle cx="120" cy="34" r="9" fill="none" stroke="{M}" stroke-width="4"/>
      <rect x="112" y="40" width="16" height="14" rx="3" fill="{M}" stroke="#141710" stroke-width="1.2"/>
      <circle cx="120" cy="130" r="76" fill="{M}" stroke="#141710" stroke-width="2"/>
      <circle cx="120" cy="130" r="64" fill="#f3efe4"/>
      <circle cx="120" cy="130" r="58" fill="none" stroke="#2a2d30" stroke-width="3" stroke-dasharray="1 5.07"/>
      <g font-family="Georgia, serif" font-size="13" fill="#2a2d30" text-anchor="middle"><text x="120" y="88">XII</text><text x="164" y="135">III</text><text x="120" y="182">VI</text><text x="76" y="135">IX</text></g>
      <circle cx="120" cy="156" r="12" fill="none" stroke="#8a8f94" stroke-width="1"/>
      <path d="M120 130l-20-30" stroke="#1a1d20" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M120 130l34 12" stroke="#1a1d20" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="120" cy="130" r="4" fill="#1a1d20"/>
      <path d="M66 112a58 58 0 0 1 36-38" fill="none" stroke="#fff" stroke-width="3" opacity=".45" stroke-linecap="round"/>`,

    chest: `
      <defs><linearGradient id="wood{U}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a5630"/><stop offset="1" stop-color="#3e2412"/></linearGradient></defs>
      <rect x="34" y="72" width="172" height="124" fill="url(#wood{U})" stroke="#141710" stroke-width="2"/>
      <rect x="34" y="72" width="172" height="40" fill="url(#wood{U})" stroke="#141710" stroke-width="2"/>
      <g stroke="#2a170a" stroke-width="1" opacity=".5"><path d="M40 128h160M40 148h160M40 168h160M40 88h160"/></g>
      <g fill="{B}" stroke="#141710" stroke-width="1">
        <path d="M34 72h22v6H40v16h-6z"/><path d="M206 72h-22v6h16v16h6z"/>
        <path d="M34 196h22v-6H40v-16h-6z"/><path d="M206 196h-22v-6h16v-16h6z"/>
        <rect x="34" y="108" width="172" height="6"/>
        <rect x="108" y="98" width="24" height="30" rx="2"/>
      </g>
      <path d="M118 108h4v10h-4z" fill="#141710"/>
      <path d="M24 136h10v20H24z" fill="{B}" stroke="#141710"/>
      <path d="M206 136h10v20h-10z" fill="{B}" stroke="#141710"/>
      <path d="M40 78h160" stroke="#f4f1e8" stroke-width="1.5" opacity=".25"/>`,

    medal: `
      <rect x="94" y="26" width="18" height="70" fill="#7a1f2b"/>
      <rect x="112" y="26" width="16" height="70" fill="#d6b154"/>
      <rect x="128" y="26" width="18" height="70" fill="#22406e"/>
      <path d="M94 96l26 14 26-14z" fill="#22406e"/>
      <path d="M94 26h52" stroke="{B}" stroke-width="5"/>
      <rect x="112" y="100" width="16" height="16" rx="2" fill="{B}" stroke="#141710"/>
      <circle cx="120" cy="158" r="46" fill="{B}" stroke="#141710" stroke-width="2"/>
      <circle cx="120" cy="158" r="36" fill="none" stroke="#6e5420" stroke-width="1.5"/>
      <path d="M120 128l8 20h21l-17 12 7 21-19-13-19 13 7-21-17-12h21z" fill="#a8822f" stroke="#5b4214" stroke-width="1"/>
      <path d="M86 140a40 40 0 0 1 22-24" fill="none" stroke="#fff6dc" stroke-width="3" opacity=".45" stroke-linecap="round"/>`,

    map: `
      <rect x="44" y="58" width="152" height="128" fill="#dccba0" stroke="#6b5a36" stroke-width="1.5"/>
      <rect x="52" y="66" width="136" height="112" fill="none" stroke="#8b7449" stroke-width="1" stroke-dasharray="4 3"/>
      <path d="M60 160c20-30 30-10 46-40s24-30 36-50 24-8 40-6" fill="none" stroke="#4d6a7a" stroke-width="2"/>
      <path d="M70 172c18-20 30-6 48-30s28-18 60-36" fill="none" stroke="#4d6a7a" stroke-width="1.5"/>
      <path d="M150 150c10-6 20-4 26 4M140 160c14-10 30-8 40 2M84 98c10-8 22-8 30 0" fill="none" stroke="#8b7449" stroke-width="1"/>
      <g fill="#7a1f2b"><circle cx="106" cy="124" r="3"/><circle cx="148" cy="96" r="3"/></g>
      <text x="120" y="84" text-anchor="middle" font-family="Georgia, serif" font-size="10" letter-spacing="2" fill="#4a3c22">PUNJAB · 1849</text>
      <path d="M170 168l6-12 6 12-6-4z" fill="#4a3c22"/>
      <rect x="32" y="50" width="16" height="144" rx="8" fill="#b9a374" stroke="#6b5a36"/>
      <rect x="192" y="50" width="16" height="144" rx="8" fill="#b9a374" stroke="#6b5a36"/>
      <path d="M36 56v132M196 56v132" stroke="#f4ead0" stroke-width="2" opacity=".5"/>`,
  };

  let uid = 0;

  function render(kind) {
    const id = "r" + ++uid;
    const tokens = {
      M: `url(#m${id})`,
      D: `url(#d${id})`,
      O: `url(#o${id})`,
      B: `url(#b${id})`,
      L: "#f4f1e8",
      U: id,
    };
    const body = (SHAPES[kind] || SHAPES.carrier).replace(/\{(\w)\}/g, (_, k) => tokens[k]);
    return `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="m${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#eef0f2"/><stop offset=".45" stop-color="#9aa0a6"/><stop offset=".7" stop-color="#5d6369"/><stop offset="1" stop-color="#b9bec3"/></linearGradient>
        <linearGradient id="d${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f454b"/><stop offset="1" stop-color="#1a1d20"/></linearGradient>
        <linearGradient id="o${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8f9c5c"/><stop offset=".55" stop-color="#5f6a38"/><stop offset="1" stop-color="#363d20"/></linearGradient>
        <linearGradient id="b${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3dc9b"/><stop offset=".4" stop-color="#c79a3e"/><stop offset=".72" stop-color="#7a5a1e"/><stop offset="1" stop-color="#d9b35f"/></linearGradient>
        <radialGradient id="s${id}"><stop offset="0" stop-color="#000" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
      </defs>
      <ellipse cx="120" cy="214" rx="84" ry="10" fill="url(#s${id})"/>
      ${body}
    </svg>`;
  }

  /* ------------------------------------------------------------------------
     Catalogue
     ------------------------------------------------------------------------ */

  const CATEGORIES = [
    { key: "tactical", name: "Tactical Equipment", icon: "crosshair", blurb: "Lighting, optics, and field electronics built to perform under pressure." },
    { key: "protective", name: "Protective Gear", icon: "shield", blurb: "Certified carriers, helmets, and hearing protection for professionals." },
    { key: "outdoor", name: "Outdoor Equipment", icon: "mountain", blurb: "Packs, footwear, and shelter engineered for extended operations." },
    { key: "training", name: "Training Equipment", icon: "target", blurb: "Timers, drills, and instruction tools for measurable progression." },
    { key: "accessories", name: "Accessories", icon: "wrench", blurb: "Gloves, tools, timepieces, and the details that complete a loadout." },
  ];

  const SELLERS = {
    kestrel: { name: "Kestrel Armorworks", initials: "KA", rating: 4.9, sales: "12.4k", since: 2014, response: "< 2 hrs", location: "Boise, ID" },
    northline: { name: "Northline Supply Co.", initials: "NS", rating: 4.8, sales: "8.1k", since: 2017, response: "< 4 hrs", location: "Duluth, MN" },
    atlas: { name: "Atlas Optics Group", initials: "AO", rating: 4.9, sales: "5.6k", since: 2012, response: "< 1 hr", location: "Austin, TX" },
    graywolf: { name: "Graywolf Outfitters", initials: "GO", rating: 4.7, sales: "15.2k", since: 2009, response: "< 3 hrs", location: "Bend, OR" },
    vantage: { name: "Vantage Field Co.", initials: "VF", rating: 4.8, sales: "3.9k", since: 2019, response: "< 2 hrs", location: "Knoxville, TN" },
  };

  const PRODUCTS = [
    {
      id: "vanguard-plate-carrier",
      name: "Vanguard Plate Carrier",
      brand: "Kestrel Armorworks",
      seller: "kestrel",
      category: "protective",
      art: "carrier",
      price: 289,
      was: 329,
      rating: 4.9,
      reviews: 418,
      stock: "in",
      badge: "Bestseller",
      featured: true,
      restricted: true,
      tagline: "Low-profile modular carrier with laser-cut MOLLE and quick-release cummerbund.",
      description:
        "The Vanguard is built around a single idea: carry what you need without the bulk. A laser-cut 500D Cordura shell keeps weight down while the quick-release cummerbund lets you get in and out in seconds. Plates are sold separately and must comply with your local regulations.",
      features: ["Single-pull emergency release system", "Laser-cut MOLLE front and rear panels", "Padded, ventilated shoulder straps", "Fits medium and large SAPI-cut plates"],
      specs: { Material: "500D Cordura nylon", Weight: "1.6 lb (0.73 kg), unloaded", "Plate Compatibility": "10×12 in, SAPI / shooters cut", Sizes: "S/M, L/XL", Colors: "Ranger Green, Coyote, Black", "Plates Included": "No", Origin: "Made in USA", Warranty: "Lifetime against defects" },
    },
    {
      id: "sentinel-high-cut-helmet",
      name: "Sentinel High-Cut Helmet",
      brand: "Kestrel Armorworks",
      seller: "kestrel",
      category: "protective",
      art: "helmet",
      price: 649,
      rating: 4.8,
      reviews: 196,
      stock: "low",
      badge: "Certified",
      featured: true,
      restricted: true,
      tagline: "Lightweight high-cut shell with integrated rails and four-point retention.",
      description:
        "Sentinel pairs a composite high-cut shell with an adjustable four-point dial retention system for a stable, all-day fit. ARC rails and a shroud-ready front accept common accessories. Shipping and possession rules vary by region; verification is required at listing level.",
      features: ["High-cut profile for headset compatibility", "Dial-adjust four-point retention", "Integrated ARC rails and front shroud", "Replaceable comfort-foam liner"],
      specs: { Shell: "Aramid composite", Weight: "2.9 lb (1.32 kg)", Cut: "High-cut", "Rail System": "ARC compatible", Sizes: "M, L, XL", Colors: "Ranger Green, Tan", Certification: "Independently lab-tested", Warranty: "5 years" },
    },
    {
      id: "ridgeline-45-assault-pack",
      name: "Ridgeline 45L Assault Pack",
      brand: "Graywolf Outfitters",
      seller: "graywolf",
      category: "outdoor",
      art: "pack",
      price: 219,
      rating: 4.8,
      reviews: 642,
      stock: "in",
      badge: "New",
      featured: true,
      tagline: "A 45-litre, three-day pack with a clamshell main compartment and frame sheet.",
      description:
        "Ridgeline opens fully like a suitcase so nothing gets buried. A removable HDPE frame sheet and load lifters carry heavy loads comfortably, while the hydration sleeve and side compression straps keep everything locked down on the move.",
      features: ["Full clamshell zip access", "Removable HDPE frame sheet", "3L hydration sleeve and ports", "Weather-resistant YKK zippers"],
      specs: { Capacity: "45 L", Weight: "4.1 lb (1.86 kg)", Material: "1000D nylon, PU coated", Dimensions: "22 × 13 × 10 in", "Torso Fit": "16–21 in", Hydration: "3 L sleeve", Colors: "Ranger Green, Black, Multicam", Warranty: "Lifetime" },
    },
    {
      id: "lumen-x1-tactical-light",
      name: "Lumen X1 Tactical Light",
      brand: "Northline Supply",
      seller: "northline",
      category: "tactical",
      art: "flashlight",
      price: 129,
      rating: 4.7,
      reviews: 1204,
      stock: "in",
      featured: true,
      tagline: "1,800-lumen rechargeable light with tail-cap switch and strobe lockout.",
      description:
        "The X1 throws a clean, focused beam out to 290 metres from a pocketable aluminium body. USB-C charging, a momentary tail switch and a mode lockout make it a dependable everyday and duty light.",
      features: ["1,800 lumen peak output", "USB-C rechargeable 21700 cell", "Momentary-on tail switch", "IPX8 waterproof to 2 m"],
      specs: { Output: "1,800 lm (max)", "Beam Distance": "290 m", Runtime: "2.5 hrs high / 40 hrs low", Battery: "21700 Li-ion, 5000 mAh", Body: "6061-T6 aluminium, Type III anodised", Length: "5.6 in (142 mm)", Waterproof: "IPX8", Warranty: "10 years" },
    },
    {
      id: "trailhawk-mid-boot",
      name: "Trailhawk Mid Boot",
      brand: "Graywolf Outfitters",
      seller: "graywolf",
      category: "outdoor",
      art: "boot",
      price: 189,
      rating: 4.6,
      reviews: 873,
      stock: "in",
      tagline: "Waterproof, side-zip duty boot with a lugged Vibram outsole.",
      description:
        "Built on an athletic last for all-day comfort, the Trailhawk combines a waterproof membrane with a breathable upper and a side zip for fast on and off. The aggressive lug pattern handles mud, rock and wet pavement.",
      features: ["Waterproof breathable membrane", "Side-zip quick entry", "Vibram lugged outsole", "Removable OrthoLite insole"],
      specs: { Upper: "Suede and 1000D nylon", Height: "8 in", Weight: "1.4 lb per boot", Outsole: "Vibram Megagrip", Waterproof: "Yes, membrane", Sizes: "7–14, regular and wide", Colors: "Coyote, Black", Warranty: "1 year" },
    },
    {
      id: "grip-pro-field-gloves",
      name: "Grip Pro Field Gloves",
      brand: "Vantage Field Co.",
      seller: "vantage",
      category: "accessories",
      art: "gloves",
      price: 49,
      rating: 4.7,
      reviews: 958,
      stock: "in",
      tagline: "Touchscreen-capable, knuckle-protected gloves with a synthetic leather palm.",
      description:
        "A dexterous everyday glove with a reinforced palm and flexible knuckle protection. Conductive fingertips work with touchscreens, and the low-profile cuff fits cleanly under a jacket sleeve.",
      features: ["Touchscreen-compatible fingertips", "Flexible TPR knuckle guard", "Reinforced synthetic leather palm", "Pull tab and hook-and-loop cuff"],
      specs: { Palm: "Synthetic leather, double layer", Back: "Stretch nylon", Protection: "TPR knuckle guard", Touchscreen: "Thumb and index", Sizes: "S–XXL", Colors: "Ranger Green, Coyote, Black", Care: "Hand wash cold", Warranty: "90 days" },
    },
    {
      id: "recon-10x42-binoculars",
      name: "Recon 10×42 Binoculars",
      brand: "Atlas Optics",
      seller: "atlas",
      category: "tactical",
      art: "binoculars",
      price: 339,
      rating: 4.9,
      reviews: 311,
      stock: "in",
      badge: "Editor's Pick",
      featured: true,
      tagline: "ED glass roof-prism binoculars with nitrogen purging and a mil-hash reticle.",
      description:
        "Recon delivers crisp, colour-true images edge to edge thanks to ED glass and fully multi-coated optics. A rugged armoured chassis is nitrogen purged and O-ring sealed to stay fog-free in any weather.",
      features: ["ED extra-low dispersion glass", "Fully multi-coated lenses", "Nitrogen purged, waterproof and fog-proof", "Locking diopter and twist-up eyecups"],
      specs: { Magnification: "10×", "Objective Lens": "42 mm", "Field of View": "341 ft at 1,000 yd", "Eye Relief": "16.5 mm", Prism: "Roof, BaK-4, phase corrected", Weight: "23.6 oz (670 g)", Waterproof: "Yes, IPX7", Warranty: "Lifetime, transferable" },
    },
    {
      id: "ranger-field-watch",
      name: "Ranger Field Watch",
      brand: "Vantage Field Co.",
      seller: "vantage",
      category: "accessories",
      art: "watch",
      price: 249,
      rating: 4.8,
      reviews: 227,
      stock: "low",
      tagline: "42 mm titanium field watch with a sapphire crystal and luminous dial.",
      description:
        "A no-nonsense instrument for long days outdoors. The grade-2 titanium case is light and corrosion-proof, the sapphire crystal resists scratches, and a high-contrast luminous dial stays readable at night.",
      features: ["Grade-2 titanium case", "Scratch-resistant sapphire crystal", "Swiss quartz movement", "Super-LumiNova dial and hands"],
      specs: { Case: "42 mm grade-2 titanium", Crystal: "Sapphire, anti-reflective", Movement: "Swiss quartz", "Water Resistance": "200 m", Strap: "Nylon NATO, 20 mm", Weight: "52 g", Lume: "Super-LumiNova C3", Warranty: "3 years" },
    },
    {
      id: "shot-timer-pro",
      name: "Shot Timer Pro",
      brand: "Northline Supply",
      seller: "northline",
      category: "training",
      art: "timer",
      price: 159,
      rating: 4.8,
      reviews: 389,
      stock: "in",
      featured: true,
      tagline: "Acoustic drill timer with par times, split tracking, and Bluetooth sync.",
      description:
        "The Shot Timer Pro records every split and delivers instant feedback on your drills. Set par times, review strings, and sync sessions to your phone to track measurable progress over weeks of training.",
      features: ["Adjustable sensitivity and random start", "Par times and split review", "Bluetooth sync with training app", "Backlit high-contrast display"],
      specs: { Display: "Backlit monochrome LCD", Memory: "1,000 strings", Connectivity: "Bluetooth LE 5.0", Battery: "USB-C rechargeable, 30 hrs", Weight: "4.2 oz (120 g)", Mount: "Belt clip and lanyard", "Water Resistance": "IP54", Warranty: "2 years" },
    },
    {
      id: "echo-electronic-earpro",
      name: "Echo Electronic Ear Pro",
      brand: "Atlas Optics",
      seller: "atlas",
      category: "training",
      art: "earpro",
      price: 189,
      rating: 4.7,
      reviews: 502,
      stock: "pre",
      tagline: "Low-profile electronic hearing protection with ambient sound amplification.",
      description:
        "Echo amplifies conversation and range commands while instantly compressing impulse noise. A slim cup profile and gel cushions keep it comfortable under a helmet or with eyewear.",
      features: ["NRR 23 dB hearing protection", "Ambient amplification up to 5×", "Gel ear cushions", "AUX input for comms"],
      specs: { "Noise Reduction": "NRR 23 dB", Response: "< 2 ms attack time", Battery: "2× AAA, 350 hrs", Weight: "11 oz (312 g)", Input: "3.5 mm AUX", Fit: "Adjustable headband", Colors: "Olive, Black", Warranty: "2 years" },
    },
    {
      id: "forge-mt18-multitool",
      name: "Forge MT-18 Multitool",
      brand: "Graywolf Outfitters",
      seller: "graywolf",
      category: "accessories",
      art: "multitool",
      price: 119,
      rating: 4.8,
      reviews: 1488,
      stock: "in",
      featured: true,
      tagline: "18 one-hand-accessible tools in a stainless steel frame with a lifetime guarantee.",
      description:
        "The MT-18 puts needle-nose pliers, wire cutters, a bit driver and more in a 9 oz package. Every outside tool opens with one hand and locks securely in place.",
      features: ["Replaceable wire cutters", "One-hand outside-accessible tools", "Locking blades and drivers", "Includes molle sheath"],
      specs: { Tools: "18", Steel: "420HC stainless", "Closed Length": "4.5 in (115 mm)", Weight: "9 oz (255 g)", Finish: "Black oxide", Locking: "Yes, all outside tools", Sheath: "Nylon molle sheath", Warranty: "25 years" },
    },
    {
      id: "bivouac-two-person-shelter",
      name: "Bivouac 2P Shelter",
      brand: "Northline Supply",
      seller: "northline",
      category: "outdoor",
      art: "shelter",
      price: 279,
      rating: 4.6,
      reviews: 164,
      stock: "low",
      tagline: "Four-season, two-person shelter that pitches in under three minutes.",
      description:
        "Bivouac is a freestanding, four-season shelter with a low wind profile and colour-coded poles for a fast pitch. Dual vestibules give you space for gear and an extra exit when the weather turns.",
      features: ["Freestanding four-season design", "Dual doors and vestibules", "DAC aluminium poles", "Fully taped, 3000 mm floor"],
      specs: { Capacity: "2 person", "Packed Weight": "5.2 lb (2.36 kg)", "Floor Area": "31 sq ft", "Peak Height": "42 in", Fly: "40D ripstop, silicone coated", Floor: "70D nylon, 3000 mm", Poles: "DAC aluminium", Warranty: "Lifetime" },
    },
  ];

  /* ------------------------------------------------------------------------
     Historic & Prestige collection
     ------------------------------------------------------------------------ */

  const HERITAGE_TYPES = [
    { key: "arms", name: "Arms & Armour" },
    { key: "instruments", name: "Instruments & Timepieces" },
    { key: "medals", name: "Medals & Insignia" },
    { key: "documents", name: "Maps & Documents" },
    { key: "campaign", name: "Campaign Furniture" },
  ];

  const ERAS = ["Pre-1800", "1800–1850", "1850–1900", "1900–1945"];

  Object.assign(SELLERS, {
    lahoregate: { name: "Lahore Gate Antiques", initials: "LG", rating: 5.0, sales: "640", since: 1998, response: "< 6 hrs", location: "London, UK" },
    meridian: { name: "Meridian Fine Instruments", initials: "MF", rating: 4.9, sales: "1.2k", since: 2004, response: "< 4 hrs", location: "Edinburgh, UK" },
    regiment: { name: "Regimental Archive Co.", initials: "RA", rating: 4.9, sales: "910", since: 2011, response: "< 8 hrs", location: "Toronto, CA" },
  });

  const HERITAGE = [
    {
      id: "sikh-tulwar-lahore-1840",
      name: "Sikh Tulwar, Lahore Workshop",
      heritage: true,
      type: "arms",
      era: "1800–1850",
      year: "c. 1840",
      origin: "Lahore, Punjab",
      art: "tulwar",
      price: 14500,
      seller: "lahoregate",
      stock: "in",
      offers: true,
      badge: "Authenticated",
      certificate: "IF-HC-2026-0417",
      condition: "Very good. Even age patina to blade; gilt-brass hilt with minor wear to knuckle guard. No modern restoration.",
      tagline: "Gilt-brass disc-hilt tulwar with a wootz-pattern blade, from the period of Maharaja Ranjit Singh.",
      description:
        "A fine Sikh tulwar with a characteristic disc pommel and gilt-brass hilt, the curved blade showing a subtle watered pattern under raking light. Workshop attribution to Lahore is supported by hilt form and decoration. Offered as a historic collectible only.",
      features: ["Independently examined by an arms & armour specialist", "Full provenance documented to 1962", "Certificate of authenticity included", "Insured, climate-controlled handover"],
      specs: { Period: "c. 1840", Origin: "Lahore, Punjab", "Overall Length": "34.5 in (876 mm)", "Blade Length": "30 in (762 mm)", Materials: "Watered steel, gilt brass", Condition: "Very good, original", Certificate: "IF-HC-2026-0417", "Export Notes": "Export licence may be required" },
      provenance: [["c. 1840", "Made in a Lahore workshop during the Sikh Empire."], ["1962", "Acquired by a private collector, Surrey, UK."], ["2009", "Exhibited in a regional heritage loan exhibition."], ["2026", "Consigned by family estate; authenticated by IronForge Heritage Desk."]],
    },
    {
      id: "indo-persian-dhal-koftgari",
      name: "Dhal Shield with Gold Koftgari",
      heritage: true,
      type: "arms",
      era: "1800–1850",
      year: "c. 1820",
      origin: "North India",
      art: "dhal",
      price: 8900,
      seller: "lahoregate",
      stock: "in",
      offers: true,
      badge: "Authenticated",
      certificate: "IF-HC-2026-0388",
      condition: "Good. Gold koftgari largely intact; light surface oxidation; bosses original.",
      tagline: "Steel dhal with four domed bosses and gold koftgari crescent borders.",
      description:
        "A circular steel shield of classic Indo-Persian form with four bosses securing the original grip. The face is decorated with gold koftgari crescents and a fine border band — an elegant example of the armourer's art.",
      features: ["Original bosses and grip rings", "Gold koftgari decoration", "Condition report with raking-light photography", "Certificate of authenticity included"],
      specs: { Period: "c. 1820", Origin: "North India", Diameter: "15.75 in (400 mm)", Materials: "Steel, gold koftgari", Weight: "3.1 lb (1.4 kg)", Condition: "Good, original", Certificate: "IF-HC-2026-0388", "Export Notes": "Cultural property rules may apply" },
      provenance: [["c. 1820", "Produced in North India."], ["1931", "Recorded in a British colonial officer's household inventory."], ["1988", "Sold at auction, London."], ["2026", "Consigned from a private collection."]],
    },
    {
      id: "khula-khud-helmet",
      name: "Khula Khud Helmet",
      heritage: true,
      type: "arms",
      era: "1800–1850",
      year: "Early 19th c.",
      origin: "Punjab",
      art: "khud",
      price: 11200,
      seller: "lahoregate",
      stock: "low",
      offers: true,
      badge: "Authenticated",
      certificate: "IF-HC-2026-0402",
      condition: "Good. Mail aventail with some replaced links (documented); sliding nasal bar functional.",
      tagline: "Steel helmet with sliding nasal bar, twin plume holders and butted-mail aventail.",
      description:
        "A Punjab khula khud with a central spike, twin plume holders and an adjustable nasal bar. The mail aventail falls protectively to the shoulders. A striking display piece with clear period construction.",
      features: ["Sliding nasal bar still adjustable", "Original twin plume holders", "Documented minor mail repairs", "Certificate of authenticity included"],
      specs: { Period: "Early 19th century", Origin: "Punjab", Height: "24 in incl. aventail", Materials: "Steel, brass, butted mail", Condition: "Good, minor repairs", Certificate: "IF-HC-2026-0402", Display: "Custom stand included", "Export Notes": "Export licence may be required" },
      provenance: [["c. 1830", "Made in Punjab."], ["1950s", "Brought to the UK by a returning officer."], ["2026", "Consigned via Lahore Gate Antiques."]],
    },
    {
      id: "royal-navy-brass-compass",
      name: "Royal Navy Brass Compass",
      heritage: true,
      type: "instruments",
      era: "1850–1900",
      year: "1890s",
      origin: "Portsmouth, England",
      art: "compass",
      price: 1450,
      seller: "meridian",
      stock: "in",
      offers: false,
      badge: "Authenticated",
      certificate: "IF-HC-2026-0351",
      condition: "Excellent. Needle free-swinging and accurate; original glass.",
      tagline: "Gimbal-free brass hand compass with a hand-painted card and original glass.",
      description:
        "A beautifully preserved naval compass with its original hand-painted card. The needle settles cleanly and points true. A handsome working instrument from the late Victorian navy.",
      features: ["Working, accurate needle", "Original glass and card", "Fitted presentation case", "Certificate of authenticity included"],
      specs: { Period: "1890s", Origin: "Portsmouth, England", Diameter: "3.5 in (89 mm)", Materials: "Brass, glass, paper card", Condition: "Excellent, working", Certificate: "IF-HC-2026-0351", Case: "Fitted oak case" },
      provenance: [["1890s", "Issued to the Royal Navy."], ["1970", "Private nautical collection, Plymouth."], ["2026", "Consigned via Meridian Fine Instruments."]],
    },
    {
      id: "officers-silver-pocket-watch",
      name: "Officer's Silver Pocket Watch",
      heritage: true,
      type: "instruments",
      era: "1900–1945",
      year: "1912",
      origin: "Coventry, England",
      art: "pocketwatch",
      price: 2300,
      seller: "meridian",
      stock: "in",
      offers: true,
      certificate: "IF-HC-2026-0366",
      condition: "Very good. Serviced 2025; keeps time within 20 seconds per day.",
      tagline: "Hallmarked sterling silver open-face watch with a Roman enamel dial.",
      description:
        "A hallmarked sterling silver pocket watch engraved to a serving officer, with a crisp enamel dial and subsidiary seconds. Recently serviced and running well — a personal piece with a traceable story.",
      features: ["Hallmarked sterling silver case", "Serviced 2025 with paperwork", "Original enamel dial", "Engraved presentation inscription"],
      specs: { Year: "1912", Origin: "Coventry, England", Case: "50 mm sterling silver", Movement: "Lever, key-less wind", Dial: "White enamel, Roman numerals", Condition: "Very good, serviced", Certificate: "IF-HC-2026-0366" },
      provenance: [["1912", "Presented to a lieutenant on commission."], ["1919", "Carried through service and retained by the family."], ["2026", "Consigned by descendants."]],
    },
    {
      id: "teak-brass-campaign-chest",
      name: "Teak & Brass Campaign Chest",
      heritage: true,
      type: "campaign",
      era: "1850–1900",
      year: "c. 1870",
      origin: "Bombay, India",
      art: "chest",
      price: 6750,
      seller: "regiment",
      stock: "pre",
      offers: true,
      certificate: "IF-HC-2026-0329",
      condition: "Very good. Original brass corners and handles; sympathetic wax finish.",
      tagline: "Two-part officer's campaign chest with flush brass handles and corner mounts.",
      description:
        "Designed to be broken down and carried between postings, this teak campaign chest retains its original flush brass fittings. Solid, handsome and still entirely practical.",
      features: ["Original brass corners and handles", "Two-part construction for transport", "Professional condition report", "White-glove delivery available"],
      specs: { Period: "c. 1870", Origin: "Bombay, India", Dimensions: "40 × 18 × 38 in", Materials: "Teak, brass", Condition: "Very good", Certificate: "IF-HC-2026-0329", Delivery: "White-glove, quoted" },
      provenance: [["c. 1870", "Made for an officer of the Bombay Army."], ["1922", "Shipped to Canada with the family."], ["2026", "Consigned via Regimental Archive Co."]],
    },
    {
      id: "great-war-medal-group",
      name: "Great War Medal Group",
      heritage: true,
      type: "medals",
      era: "1900–1945",
      year: "1914–1918",
      origin: "British Empire",
      art: "medal",
      price: 3100,
      seller: "regiment",
      stock: "in",
      offers: true,
      badge: "Authenticated",
      certificate: "IF-HC-2026-0310",
      condition: "Excellent. Original ribbons; named and researched.",
      tagline: "Named trio with original ribbons and a full researched service history.",
      description:
        "A named medal group with original ribbons, offered with a research file tracing the recipient's service through regimental war diaries. Groups with documented histories like this are increasingly scarce.",
      features: ["Named to recipient, verified", "Full researched service file", "Original ribbons", "Certificate of authenticity included"],
      specs: { Period: "1914–1918", Origin: "British Empire", Pieces: "3 medals", Materials: "Bronze, silver, silk ribbon", Naming: "Impressed, verified", Condition: "Excellent", Certificate: "IF-HC-2026-0310" },
      provenance: [["1919", "Awarded to the recipient."], ["1960s", "Retained by family."], ["2026", "Consigned with research file."]],
    },
    {
      id: "punjab-survey-map-1849",
      name: "Hand-Drawn Survey Map of the Punjab",
      heritage: true,
      type: "documents",
      era: "1800–1850",
      year: "1849",
      origin: "Punjab",
      art: "map",
      price: 4400,
      seller: "meridian",
      stock: "in",
      offers: true,
      certificate: "IF-HC-2026-0295",
      condition: "Good. Hand-coloured; minor foxing; professionally conserved and archivally mounted.",
      tagline: "Hand-coloured surveyor's map of the Doabs and river systems, dated 1849.",
      description:
        "A rare hand-drawn survey of the Punjab rivers and Doabs, produced in the year of annexation. Professionally conserved and mounted on archival board — an exceptional document of a pivotal moment in Sikh history.",
      features: ["Hand-drawn and hand-coloured", "Professionally conserved", "Archival mounting", "Certificate of authenticity included"],
      specs: { Date: "1849", Region: "Punjab", Size: "24 × 19 in (610 × 483 mm)", Medium: "Ink and watercolour on laid paper", Condition: "Good, conserved", Certificate: "IF-HC-2026-0295", "Export Notes": "Cultural property rules may apply" },
      provenance: [["1849", "Drawn by a surveying party."], ["1901", "Held in a private library, Calcutta."], ["1975", "Acquired by a UK collector."], ["2026", "Consigned via Meridian Fine Instruments."]],
    },
  ];

  const REVIEWS = [
    { name: "Marcus R.", role: "Law enforcement instructor", rating: 5, product: "Vanguard Plate Carrier", text: "Communication from the seller was quick, the listing was accurate down to the stitching, and the compliance check was handled cleanly. Exactly how a professional marketplace should work.", date: "Sep 2026" },
    { name: "Dana K.", role: "Search & rescue volunteer", rating: 5, product: "Ridgeline 45L Assault Pack", text: "I compared four packs here side by side with real specs instead of marketing copy. The Ridgeline has been on two multi-day callouts and it still looks new.", date: "Aug 2026" },
    { name: "Jordan T.", role: "Competitive shooter", rating: 5, product: "Shot Timer Pro", text: "Verified seller, fast shipping, and support actually answered my question about firmware within the hour. IronForge is now my first stop for training gear.", date: "Aug 2026" },
    { name: "Priya S.", role: "Backcountry guide", rating: 4, product: "Recon 10×42 Binoculars", text: "Excellent glass for the price. Delivery took a day longer than estimated, but the seller kept me updated the whole way. Would buy again.", date: "Jul 2026" },
  ];

  const PRODUCT_REVIEWS = [
    { name: "Ethan W.", rating: 5, title: "Lives up to the listing", text: "Fit and finish are excellent. Every detail in the specification table was accurate, and the seller answered sizing questions before I ordered.", date: "Sep 18, 2026" },
    { name: "Sofia M.", rating: 5, title: "Serious quality", text: "You can feel the difference in materials immediately. Packaging was discreet and secure, and verification took less than a day.", date: "Sep 02, 2026" },
    { name: "Liam H.", rating: 4, title: "Great, slightly long lead time", text: "Product is superb. It shipped two days later than the estimate, but the seller proactively let me know. Minor issue overall.", date: "Aug 21, 2026" },
  ];

  const BRANDS = [
    { name: "Kestrel", sub: "Armorworks", icon: "shield" },
    { name: "Northline", sub: "Supply Co.", icon: "compass" },
    { name: "Atlas", sub: "Optics Group", icon: "eye" },
    { name: "Graywolf", sub: "Outfitters", icon: "mountain" },
    { name: "Vantage", sub: "Field Co.", icon: "target" },
    { name: "Halcyon", sub: "Systems", icon: "radio" },
  ];

  window.IF = { render, CATEGORIES, SELLERS, PRODUCTS, HERITAGE, HERITAGE_TYPES, ERAS, REVIEWS, PRODUCT_REVIEWS, BRANDS };
})();
