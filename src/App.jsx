import { useState, useEffect, useRef } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

// ─────────────────────────────────────────────
//  ASSET IMPORTS
// ─────────────────────────────────────────────

import cakeChocolateBase  from "./assets/cake/chocolate-base.PNG";
import cakeVanillaBase    from "./assets/cake/vanilla-base.PNG";
import cakeYellowBase     from "./assets/cake/yellow-base.PNG";
import cakeRedVelvetBase  from "./assets/cake/red-velvet-base.PNG";
import cakeBrownieBase    from "./assets/cake/brownie-base.PNG";
import cakeLemonBase      from "./assets/cake/lemon-base.PNG";
import cakeStrawberryBase from "./assets/cake/strawberry-base.PNG";
import cakeMatchaBase     from "./assets/cake/matcha-base.PNG";
import cakeBirthdayBase   from "./assets/cake/birthday-cake-base.PNG";
import cakeCarrotBase     from "./assets/cake/carrot-base.PNG";
import cakeBananaBase     from "./assets/cake/banana-base.PNG";

import cakeChocolateTop   from "./assets/cake/chocolate-top.PNG";
import cakeVanillaTop     from "./assets/cake/vanilla-top.PNG";
import cakeYellowTop      from "./assets/cake/yellow-top.PNG";
import cakeRedVelvetTop   from "./assets/cake/red-velvet-top.PNG";
import cakeBrownieTop     from "./assets/cake/brownie-top.PNG";
import cakeLemonTop       from "./assets/cake/lemon-top.PNG";
import cakeStrawberryTop  from "./assets/cake/strawberry-top.PNG";
import cakeMatchaTop      from "./assets/cake/matcha-top.PNG";
import cakeBirthdayTop    from "./assets/cake/birthday-cake-top.PNG";
import cakeCarrotTop      from "./assets/cake/carrot-top.PNG";
import cakeBananaTop      from "./assets/cake/banana-top.PNG";

import frostingVanillaBase    from "./assets/frosting/vanilla-base.PNG";
import frostingCaramelBase    from "./assets/frosting/caramel-base.PNG";
import frostingChocolateBase  from "./assets/frosting/chocolate-base.PNG";
import frostingStrawberryBase from "./assets/frosting/strawberry-base.PNG";
import frostingMatchaBase     from "./assets/frosting/matcha-base.PNG";
import frostingLemonBase      from "./assets/frosting/lemon-base.PNG";
import frostingRaspberryBase  from "./assets/frosting/raspberry-base.PNG";
import frostingBlueberryBase  from "./assets/frosting/blueberry-base.PNG";
import frostingMangoBase      from "./assets/frosting/mango-base.PNG";
import frostingChaiBase       from "./assets/frosting/chai-base.PNG";
import frostingCherryBase     from "./assets/frosting/cherry-base.PNG";

import frostingVanillaTop     from "./assets/frosting/vanilla-top.PNG";
import frostingCaramelTop     from "./assets/frosting/caramel-top.PNG";
import frostingChocolateTop   from "./assets/frosting/chocolate-top.PNG";
import frostingStrawberryTop  from "./assets/frosting/strawberry-top.PNG";
import frostingMatchaTop      from "./assets/frosting/matcha-top.PNG";
import frostingLemonTop       from "./assets/frosting/lemon-top.PNG";
import frostingRaspberryTop   from "./assets/frosting/raspberry-top.PNG";
import frostingBlueberryTop   from "./assets/frosting/blueberry-top.PNG";
import frostingMangoTop       from "./assets/frosting/mango-top.PNG";
import frostingChaiTop        from "./assets/frosting/chai-top.PNG";
import frostingCherryTop      from "./assets/frosting/cherry-top.PNG";

import fillingStrawberryJam   from "./assets/filling/strawberry-jam.PNG";
import fillingRaspberryJam    from "./assets/filling/raspberry-jam.PNG";
import fillingBlueberryJam    from "./assets/filling/blueberry-jam.PNG";
import fillingOrangeJam       from "./assets/filling/orange-jam.PNG";
import fillingGuavaJam        from "./assets/filling/guava-jam.PNG";
import fillingLemonCurd       from "./assets/filling/lemon-curd.PNG";
import fillingCustard         from "./assets/filling/custard.PNG";
import fillingChocolateSauce  from "./assets/filling/chocolate-sauce.PNG";
import fillingCaramelSauce    from "./assets/filling/caramel-sauce.PNG";
import fillingPeachJam        from "./assets/filling/peach-jam.PNG";

import toppingStrawberries    from "./assets/topping/strawberries.PNG";
import toppingRaspberries     from "./assets/topping/raspberries.PNG";
import toppingBlueberries     from "./assets/topping/blueberries.PNG";
import toppingOranges         from "./assets/topping/oranges.PNG";
import toppingLemons          from "./assets/topping/lemons.PNG";
import toppingCaramel         from "./assets/topping/caramel.PNG";
import toppingChocolate       from "./assets/topping/chocolate.PNG";
import toppingMarshmallows    from "./assets/topping/marshmallows.PNG";
import toppingApples          from "./assets/topping/apples.PNG";
import toppingMint            from "./assets/topping/mint.PNG";
import toppingPeaches         from "./assets/topping/peaches.PNG";
import toppingCherries        from "./assets/topping/cherries.PNG";

import windowBgSrc from "./assets/window-bg.PNG";

// ─────────────────────────────────────────────
//  ASSET MAPS
// ─────────────────────────────────────────────

const CAKE_BASE_IMGS = {
  chocolate:    cakeChocolateBase,
  vanilla:      cakeVanillaBase,
  yellow:       cakeYellowBase,
  redvelvet:    cakeRedVelvetBase,
  brownie:      cakeBrownieBase,
  lemon:        cakeLemonBase,
  strawberry:   cakeStrawberryBase,
  matcha:       cakeMatchaBase,
  birthdaycake: cakeBirthdayBase,
  carrot:       cakeCarrotBase,
  banana:       cakeBananaBase,
};

const CAKE_TOP_IMGS = {
  chocolate:    cakeChocolateTop,
  vanilla:      cakeVanillaTop,
  yellow:       cakeYellowTop,
  redvelvet:    cakeRedVelvetTop,
  brownie:      cakeBrownieTop,
  lemon:        cakeLemonTop,
  strawberry:   cakeStrawberryTop,
  matcha:       cakeMatchaTop,
  birthdaycake: cakeBirthdayTop,
  carrot:       cakeCarrotTop,
  banana:       cakeBananaTop,
};

const FROSTING_BASE_IMGS = {
  vanilla:      frostingVanillaBase,
  caramel:      frostingCaramelBase,
  chocolate:    frostingChocolateBase,
  strawberry:   frostingStrawberryBase,
  matcha:       frostingMatchaBase,
  lemon:        frostingLemonBase,
  raspberry:    frostingRaspberryBase,
  blueberry:    frostingBlueberryBase,
  mango:        frostingMangoBase,
  chai:         frostingChaiBase,
  cherry:       frostingCherryBase,
};

const FROSTING_TOP_IMGS = {
  vanilla:      frostingVanillaTop,
  caramel:      frostingCaramelTop,
  chocolate:    frostingChocolateTop,
  strawberry:   frostingStrawberryTop,
  matcha:       frostingMatchaTop,
  lemon:        frostingLemonTop,
  raspberry:    frostingRaspberryTop,
  blueberry:    frostingBlueberryTop,
  mango:        frostingMangoTop,
  chai:         frostingChaiTop,
  cherry:       frostingCherryTop,
};

const FILLING_IMGS = {
  strawberryjam:  fillingStrawberryJam,
  raspberryjam:   fillingRaspberryJam,
  blueberryjam:   fillingBlueberryJam,
  orangejam:      fillingOrangeJam,
  guavajam:       fillingGuavaJam,
  lemoncurd:      fillingLemonCurd,
  custard:        fillingCustard,
  chocolatesauce: fillingChocolateSauce,
  caramelsauce:   fillingCaramelSauce,
  peachjam:       fillingPeachJam,
};

const TOPPING_IMGS = {
  strawberries:  toppingStrawberries,
  raspberries:   toppingRaspberries,
  blueberries:   toppingBlueberries,
  apples:        toppingApples,
  oranges:       toppingOranges,
  lemons:        toppingLemons,
  caramel:       toppingCaramel,
  chocolate:     toppingChocolate,
  marshmallows:  toppingMarshmallows,
  mint:          toppingMint,
  peaches:       toppingPeaches,
  cherries:      toppingCherries,
};

const WINDOW_BG = windowBgSrc;

// ─────────────────────────────────────────────
//  PRELOAD — force browser to cache every image
//  on mount so there's no flicker on first use
// ─────────────────────────────────────────────
const ALL_SRCS = [
  WINDOW_BG,
  ...Object.values(CAKE_BASE_IMGS),
  ...Object.values(CAKE_TOP_IMGS),
  ...Object.values(FROSTING_BASE_IMGS),
  ...Object.values(FROSTING_TOP_IMGS),
  ...Object.values(FILLING_IMGS),
  ...Object.values(TOPPING_IMGS),
].filter(Boolean);

function usePreloadImages() {
  useEffect(() => {
    ALL_SRCS.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
}

// ─────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────

const BASE_SPONGE = [
  { id: "chocolate",    label: "chocolate"     },
  { id: "vanilla",      label: "vanilla"       },
  { id: "yellow",       label: "yellow"        },
  { id: "redvelvet",    label: "red velvet"    },
  { id: "brownie",      label: "brownie"       },
  { id: "lemon",        label: "lemon"         },
  { id: "strawberry",   label: "strawberry"    },
  { id: "matcha",       label: "matcha"        },
  { id: "birthdaycake", label: "birthday cake" },
  { id: "carrot",       label: "carrot"        },
  { id: "banana",       label: "banana"        },
];

const FROSTING_TYPES = [
  { id: "whipped-cream", label: "whipped cream" },
  { id: "buttercream",   label: "buttercream"   },
  { id: "cream-cheese",  label: "cream cheese"  },
];

const FROSTING_FLAVORS = [
  { id: "vanilla",    label: "vanilla"    },
  { id: "caramel",    label: "caramel"    },
  { id: "chocolate",  label: "chocolate"  },
  { id: "strawberry", label: "strawberry" },
  { id: "matcha",     label: "matcha"     },
  { id: "lemon",      label: "lemon"      },
  { id: "raspberry",  label: "raspberry"  },
  { id: "blueberry",  label: "blueberry"  },
  { id: "mango",      label: "mango"      },
  { id: "chai",       label: "chai"       },
  { id: "cherry",     label: "cherry"     },
];

const FILLINGS = [
  { id: "strawberryjam",  label: "strawberry jam"  },
  { id: "raspberryjam",   label: "raspberry jam"   },
  { id: "blueberryjam",   label: "blueberry jam"   },
  { id: "orangejam",      label: "orange jam"      },
  { id: "guavajam",       label: "guava jam"       },
  { id: "lemoncurd",      label: "lemon curd"      },
  { id: "custard",        label: "custard"         },
  { id: "chocolatesauce", label: "chocolate sauce" },
  { id: "caramelsauce",   label: "caramel sauce"   },
  { id: "peachjam",       label: "peach jam"       },
];

const TOPPINGS = [
  { id: "strawberries", label: "strawberries"  },
  { id: "raspberries",  label: "raspberries"   },
  { id: "blueberries",  label: "blueberries"   },
  { id: "apples",       label: "apple chunks"  },
  { id: "oranges",      label: "candied orange"},
  { id: "lemons",       label: "candied lemons"},
  { id: "caramel",      label: "caramel chips" },
  { id: "chocolate",    label: "cocoa chips"   },
  { id: "marshmallows", label: "marshmallows"  },
  { id: "mint",         label: "mint leaves"   },
  { id: "peaches",      label: "peach chunks"  },
  { id: "cherries",     label: "cherries"      },
];

const TABS = [
  { id: "name",     label: "name"     },
  { id: "base",     label: "sponge"   },
  { id: "frosting", label: "frosting" },
  { id: "filling",  label: "filling"  },
  { id: "toppings", label: "toppings" },
  { id: "order",    label: "order"    },
];

function labelOf(list, id) {
  return list.find((x) => x.id === id)?.label ?? "—";
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// ─────────────────────────────────────────────
//  THUMB
// ─────────────────────────────────────────────
function Thumb({ item, selected, onClick, imgSrc }) {
  return (
    <div
      className={`thumb ${selected ? "selected" : ""}`}
      onClick={onClick}
      title={item.label}
    >
      <div className="thumb-drawing">
        {imgSrc
          ? <img src={imgSrc} alt={item.label} />
          : <span className="thumb-drawing-placeholder">art<br />coming<br />soon</span>
        }
      </div>
      <span className="thumb-label">{item.label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
//  CANVAS EXPORT
// ─────────────────────────────────────────────
async function downloadCakeImage(layerSrcs, filename = "my-cake.PNG") {
  const SIZE = 600;
  const canvas = document.createElement("canvas");
  canvas.width  = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext("2d");

  for (const src of layerSrcs) {
    if (!src) continue;
    await new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => { ctx.drawImage(img, 0, 0, SIZE, SIZE); resolve(); };
      img.onerror = resolve;
      img.src = src;
    });
  }

  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

// ─────────────────────────────────────────────
//  CAKE PREVIEW
// ─────────────────────────────────────────────
function CakePreview({ sponge, frostingFlavor, filling, fillingVisited, toppings, randomBase, stageRef }) {
  const [topCakeIn,        setTopCakeIn]        = useState(false);
  const [topFrostingIn,    setTopFrostingIn]    = useState(false);
  const [toppingsIn,       setToppingsIn]       = useState(false);
  const [animatedToppings, setAnimatedToppings] = useState(new Set());

  const animationReady = !!sponge && !!frostingFlavor && fillingVisited;

  const lastAnimatedCombo = useRef(null);
  const timers            = useRef([]);
  const prevToppings      = useRef(toppings || []);

  // main animation sequence
  useEffect(() => {
    const currentCombo = animationReady ? `${sponge}|${frostingFlavor}|${filling}` : null;

    if (!animationReady) {
      lastAnimatedCombo.current = null;
      setTopCakeIn(false);
      setTopFrostingIn(false);
      setToppingsIn(false);
      timers.current.forEach(clearTimeout);
      return;
    }

    if (currentCombo === lastAnimatedCombo.current) return;

    lastAnimatedCombo.current = currentCombo;
    setTopCakeIn(false);
    setTopFrostingIn(false);
    setToppingsIn(false);
    timers.current.forEach(clearTimeout);

    timers.current = [
      setTimeout(() => setTopCakeIn(true),     100),
      setTimeout(() => setTopFrostingIn(true), 520),
      setTimeout(() => setToppingsIn(true),    900),
    ];

    return () => timers.current.forEach(clearTimeout);
  }, [sponge, frostingFlavor, filling, animationReady]);

  // individual topping animation on manual pick
  useEffect(() => {
    const prev = new Set(prevToppings.current);
    const curr = new Set(toppings || []);

    const added   = [...curr].filter(t => !prev.has(t));
    const removed = [...prev].filter(t => !curr.has(t));

    if (added.length > 0) {
      setAnimatedToppings(s => { const n = new Set(s); added.forEach(t => n.delete(t)); return n; });
      const tid = setTimeout(() => {
        setAnimatedToppings(s => { const n = new Set(s); added.forEach(t => n.add(t)); return n; });
      }, 30);
      timers.current.push(tid);
    }

    if (removed.length > 0) {
      setAnimatedToppings(s => { const n = new Set(s); removed.forEach(t => n.delete(t)); return n; });
    }

    prevToppings.current = toppings || [];
  }, [toppings]);

  const activeSponge   = sponge         || randomBase || BASE_SPONGE[0].id;
  const activeFrosting = frostingFlavor || null;
  const activeFilling  = filling        || null;

  const cakeBaseSrc     = CAKE_BASE_IMGS[activeSponge]                            || null;
  const cakeTopSrc      = CAKE_TOP_IMGS[activeSponge]                             || null;
  const frostingBaseSrc = activeFrosting ? (FROSTING_BASE_IMGS[activeFrosting]    || null) : null;
  const frostingTopSrc  = activeFrosting ? (FROSTING_TOP_IMGS[activeFrosting]     || null) : null;
  const fillingSrc      = activeFilling  ? (FILLING_IMGS[activeFilling]            || null) : null;
  const toppingSrcs     = (toppings || []).map(t => ({ id: t, src: TOPPING_IMGS[t] || null })).filter(t => t.src);

  const allLayerSrcs = [
    WINDOW_BG,
    cakeBaseSrc,
    frostingBaseSrc,
    fillingSrc,
    animationReady && topCakeIn     ? cakeTopSrc     : null,
    animationReady && topFrostingIn ? frostingTopSrc : null,
    ...toppingSrcs.map(t => t.src),
  ].filter(Boolean);

  useEffect(() => { if (stageRef) stageRef.current = allLayerSrcs; });

  function getToppingClass(id) {
    // randomize path: all toppings in together
    if (animationReady && lastAnimatedCombo.current) return toppingsIn ? "drop-in" : "pre-drop";
    // manual pick path: individual
    return animatedToppings.has(id) ? "drop-in" : "pre-drop";
  }

  return (
    <div className="cake-stage">

      {/* key props prevent src-swap flicker — React creates a fresh element per flavor */}
      {WINDOW_BG && (
        <img key="window-bg" src={WINDOW_BG} alt="" className="cake-layer" style={{ objectFit: "cover" }} />
      )}

      {cakeBaseSrc
        ? <img key={`cake-base-${activeSponge}`} src={cakeBaseSrc} alt="cake base" className="cake-layer" />
        : <div className="cake-layer cake-placeholder-layer"><span>{activeSponge}<br />base</span></div>
      }

      {frostingBaseSrc && (
        <img key={`frosting-base-${activeFrosting}`} src={frostingBaseSrc} alt="frosting base" className="cake-layer" />
      )}

      {fillingSrc && (
        <img key={`filling-${activeFilling}`} src={fillingSrc} alt="filling" className="cake-layer" />
      )}

      {cakeTopSrc && animationReady && (
        <img
          key={`cake-top-${activeSponge}`}
          src={cakeTopSrc}
          alt="cake top"
          className={`cake-layer cake-animated ${topCakeIn ? "drop-in" : "pre-drop"}`}
        />
      )}

      {frostingTopSrc && animationReady && (
        <img
          key={`frosting-top-${activeFrosting}`}
          src={frostingTopSrc}
          alt="frosting top"
          className={`cake-layer cake-animated ${topFrostingIn ? "drop-in" : "pre-drop"}`}
        />
      )}

      {toppingSrcs.map(({ id, src }) => (
        <img
          key={id}
          src={src}
          alt={id}
          className={`cake-layer cake-animated ${getToppingClass(id)}`}
        />
      ))}

      {!cakeBaseSrc && !WINDOW_BG && (
        <span className="cake-empty-hint">
          your cake will appear here~<br />
          <small>add drawings to /src/assets/</small>
        </span>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
//  SHOP WINDOW
// ─────────────────────────────────────────────
function ShopWindow({ sponge, frostingFlavor, filling, fillingVisited, toppings, randomBase, stageRef }) {
  return (
    <div>
      <div className="window-title">
        <h1><span className="deco">✿</span> Ri's Bakery <span className="deco">✿</span></h1>
        <p>design your own mini cake and i'll *try* to bake it!</p>
      </div>
      <div className="shop-window">
        <div className="window-bg" />
        <div className="window-rays" />
        <div className="window-frame-h" />
        <div className="window-frame-v" />
        <CakePreview
          sponge={sponge}
          frostingFlavor={frostingFlavor}
          filling={filling}
          fillingVisited={fillingVisited}
          toppings={toppings}
          randomBase={randomBase}
          stageRef={stageRef}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  APP
// ─────────────────────────────────────────────

const EMPTY = {
  name:           "",
  base:           null,
  frostingType:   null,
  frostingFlavor: null,
  filling:        null,
  toppings:       [],
};

export default function App() {
  usePreloadImages();

  const [picks, setPicks]         = useState(EMPTY);
  const [tab, setTab]             = useState("name");
  const [submitted, setSubmitted] = useState(false);
  const [msg, setMsg]             = useState("");
  const [fillingVisited, setFillingVisited] = useState(false);

  const [randomBase] = useState(() => pickRandom(BASE_SPONGE).id);
  const stageRef = useRef([]);

  function pick(field, value) {
    setPicks((p) => ({ ...p, [field]: p[field] === value ? null : value }));
  }

  function toggleTopping(id) {
    setPicks((p) => ({
      ...p,
      toppings: p.toppings.includes(id)
        ? p.toppings.filter((t) => t !== id)
        : [...p.toppings, id],
    }));
  }

  function handleTabClick(id) {
    if (id === "toppings" || id === "order") setFillingVisited(true);
    setTab(id);
    setMsg("");
  }

  function handleFillingPick(id) {
    setPicks((p) => ({ ...p, filling: p.filling === id ? null : id }));
  }

  function randomizeAll() {
    const base         = pickRandom(BASE_SPONGE).id;
    const frostingType = pickRandom(FROSTING_TYPES).id;
    const frostingFlav = pickRandom(FROSTING_FLAVORS).id;
    const filling      = pickRandom(FILLINGS).id;
    const count        = Math.floor(Math.random() * 3) + 1;
    const toppings     = [...TOPPINGS].sort(() => Math.random() - 0.5).slice(0, count).map(t => t.id);

    setPicks((p) => ({ ...p, base, frostingType, frostingFlavor: frostingFlav, filling, toppings }));
    setFillingVisited(true);
  }

  async function handleSubmit() {
    const missing = [];
    if (!picks.name.trim())    missing.push("your name");
    if (!picks.base)           missing.push("sponge");
    if (!picks.frostingType)   missing.push("frosting type");
    if (!picks.frostingFlavor) missing.push("frosting flavor");
    if (missing.length > 0) { setMsg(`still need: ${missing.join(", ")}`); return; }

    setMsg("sending your order...");

    // render cake to canvas and get base64
    const SIZE = 600;
    const canvas = document.createElement("canvas");
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext("2d");
    for (const src of stageRef.current) {
      if (!src) continue;
      await new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => { ctx.drawImage(img, 0, 0, SIZE, SIZE); resolve(); };
        img.onerror = resolve;
        img.src = src;
      });
    }
    const cakeImage = canvas.toDataURL("image/png");

    // trigger download automatically
    const link = document.createElement("a");
    link.download = `${picks.name.trim() || "cake"}-cake.PNG`;
    link.href = cakeImage;
    link.click();

    // send email via EmailJS
    try {
      await emailjs.send(
        "service_bk8svmz",
        "template_elzwmjv",
        {
          name:            picks.name,
          sponge:          labelOf(BASE_SPONGE, picks.base),
          frosting_type:   labelOf(FROSTING_TYPES, picks.frostingType),
          frosting_flavor: labelOf(FROSTING_FLAVORS, picks.frostingFlavor),
          filling:         picks.filling ? labelOf(FILLINGS, picks.filling) : "none",
          toppings:        picks.toppings.length
                             ? picks.toppings.map(t => labelOf(TOPPINGS, t)).join(", ")
                             : "none",
          cake_image:      cakeImage, // base64 image string
        },
        "sFywDORtFH7ORF22g"
      );
    } catch (err) {
      console.error("EmailJS error:", err);
    }

    setMsg("");
    setSubmitted(true);
  }

  function handleDownload() {
    const name = picks.name.trim() || "cake";
    downloadCakeImage(stageRef.current, `${name}-cake.PNG`);
  }

  function reset() {
    setPicks(EMPTY);
    setTab("name");
    setSubmitted(false);
    setMsg("");
    setFillingVisited(false);
  }

  const toppingLabels = picks.toppings.length
    ? picks.toppings.map((t) => labelOf(TOPPINGS, t)).join(", ")
    : "none";

  const sharedWindowProps = {
    sponge:         picks.base,
    frostingFlavor: picks.frostingFlavor,
    filling:        picks.filling,
    fillingVisited,
    toppings:       picks.toppings,
    randomBase,
    stageRef,
  };

  if (submitted) {
    return (
      <div className="app">
        <ShopWindow {...sharedWindowProps} />
        <div className="bottom-panel">
          <div className="confirm-wrap">
            <h2>order received!</h2>
            <p>your cake is downloading and i got your order — see you soon, {picks.name}! ♡</p>
            <div className="confirm-box" style={{ fontVariantLigatures: "none" }}>
              <p><strong>name:</strong> {picks.name}</p>
              <p><strong>sponge:</strong> {labelOf(BASE_SPONGE, picks.base)}</p>
              <p><strong>frosting:</strong> {labelOf(FROSTING_TYPES, picks.frostingType)} — {labelOf(FROSTING_FLAVORS, picks.frostingFlavor)}</p>
              <p><strong>filling:</strong> {picks.filling ? labelOf(FILLINGS, picks.filling) : "none"}</p>
              <p><strong>toppings:</strong> {toppingLabels}</p>
            </div>
            <button className="reset-btn" onClick={reset}>← start over</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <ShopWindow {...sharedWindowProps} />

      <div className="bottom-panel">
        <div className="cat-scroll">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`cat-tab ${tab === t.id ? "active" : ""}`}
              onClick={() => handleTabClick(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="option-scroll">

          {tab === "name" && (
            <div className="name-panel">
              <label>so i know whose cake this is!</label>
              <input
                type="text"
                placeholder="your name..."
                value={picks.name}
                onChange={(e) => setPicks((p) => ({ ...p, name: e.target.value }))}
                maxLength={40}
              />
            </div>
          )}

          {tab === "base" && (
            <div className="option-grid">
              {BASE_SPONGE.map((item) => (
                <Thumb key={item.id} item={item}
                  imgSrc={CAKE_BASE_IMGS[item.id] || null}
                  selected={picks.base === item.id}
                  onClick={() => pick("base", item.id)} />
              ))}
            </div>
          )}

          {tab === "frosting" && (
            <div className="frosting-section">
              <div>
                <p className="section-sublabel">type</p>
                <div className="frosting-type-row">
                  {FROSTING_TYPES.map((t) => (
                    <div key={t.id}
                      className={`type-chip ${picks.frostingType === t.id ? "selected" : ""}`}
                      onClick={() => pick("frostingType", t.id)}>
                      {t.label}
                    </div>
                  ))}
                </div>
              </div>
              <hr className="frosting-divider" />
              <div>
                <p className="section-sublabel">flavor</p>
                <div className="option-grid">
                  {FROSTING_FLAVORS.map((item) => (
                    <Thumb key={item.id} item={item}
                      imgSrc={FROSTING_BASE_IMGS[item.id] || null}
                      selected={picks.frostingFlavor === item.id}
                      onClick={() => pick("frostingFlavor", item.id)} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "filling" && (
            <>
              <p className="optional-note">optional — leave empty to skip</p>
              <div className="option-grid">
                {FILLINGS.map((item) => (
                  <Thumb key={item.id} item={item}
                    imgSrc={FILLING_IMGS[item.id] || null}
                    selected={picks.filling === item.id}
                    onClick={() => handleFillingPick(item.id)} />
                ))}
              </div>
            </>
          )}

          {tab === "toppings" && (
            <>
              <p className="optional-note">optional — pick as many as you like</p>
              <div className="option-grid">
                {TOPPINGS.map((item) => (
                  <Thumb key={item.id} item={item}
                    imgSrc={TOPPING_IMGS[item.id] || null}
                    selected={picks.toppings.includes(item.id)}
                    onClick={() => toggleTopping(item.id)} />
                ))}
              </div>
            </>
          )}

          {tab === "order" && (
            <>
              <div className="order-panel">
                {[
                  { label: "name",     value: picks.name || null },
                  { label: "sponge",   value: picks.base           ? labelOf(BASE_SPONGE, picks.base)               : null },
                  { label: "type",     value: picks.frostingType   ? labelOf(FROSTING_TYPES, picks.frostingType)    : null },
                  { label: "flavor",   value: picks.frostingFlavor ? labelOf(FROSTING_FLAVORS, picks.frostingFlavor): null },
                  { label: "filling",  value: picks.filling        ? labelOf(FILLINGS, picks.filling)               : "none" },
                  { label: "toppings", value: toppingLabels },
                ].map(({ label, value }) => (
                  <div className="order-row" key={label}>
                    <span className="o-label">{label}</span>
                    <strong>{value ?? <em>not filled in</em>}</strong>
                  </div>
                ))}
              </div>
              <div className="submit-area">
                <button className="submit-btn" onClick={handleSubmit}>order my cake ✿</button>
                <button className="randomize-btn" onClick={randomizeAll}>🎲 randomize!</button>
                {msg && <p className="submit-msg">{msg}</p>}
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}