const __vite__fileDeps=["assets/Attractor-DIWodpns.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-BOzxDN9q.js","assets/index-BFyVZ4rz.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-BOzxDN9q.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DIWodpns.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
