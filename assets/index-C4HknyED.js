const __vite__fileDeps=["assets/PolygonDrawer-DcSsWFex.js","assets/PolygonDrawerBase-CFqqu3XR.js","assets/index-CCikGoIj.js","assets/index-BFyVZ4rz.css","assets/TriangleDrawer-r30xLZqr.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-CCikGoIj.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-DcSsWFex.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-r30xLZqr.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
