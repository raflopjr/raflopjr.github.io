const __vite__fileDeps=["assets/ColorUpdater-vR_Udjmv.js","assets/index-CCikGoIj.js","assets/index-BFyVZ4rz.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-CCikGoIj.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-vR_Udjmv.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
