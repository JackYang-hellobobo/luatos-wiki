import"./axios.585258ce.js";import{a as U}from"./api.bdb1ed6d.js";import{u as F,e as I,f as M,t as j,g as D,r as l,o as b,h as V,b as i,a,w as o,i as d,j as y,k,F as E,l as A,c as G,d as c}from"./index.b2596df1.js";const H={class:"page-repo-list"},J={class:"repo-table-header"},K={class:"repo-query"},O=c("\u540D\u79F0\u8FC7\u6EE4"),P=c("\u7B80\u4ECB\u8FC7\u6EE4"),Q=c("\u6807\u7B7E\u8FC7\u6EE4"),W={class:"repo-table-main"},X=["onClick"],Y={class:"repo-table-pagination"},te={__name:"RepoList",setup(Z){const q=F();I();const N=M({repoList:[],queryTag:"",queryName:"",queryTitle:"",pageNumber:1,pageSize:10,pageCount:1});let{repoList:C,queryTag:s,queryTitle:r,queryName:p,pageCount:w,pageSize:R,pageNumber:_}=j(N);const m=async function(){let t=await U.queryRepoList({tag:s.value,name:p.value,title:r.value},{pageSize:R.value,pageNumber:_.value});t&&t.ok&&(C.value=t.data.list||[],t.data.pager&&(w.value=t.data.pager.pageCount))},g=function(){_.value=1,m()},L=function(t){q.push(`/repo/${t.namespaceId}/${t.name}`)},T=function(t){_.value=t,m()};return D(()=>{console.log("onMounted"),m()}),(t,n)=>{const f=l("el-input"),v=l("el-col"),x=l("el-row"),u=l("el-table-column"),B=l("el-tag"),S=l("el-table"),z=l("el-pagination");return b(),V("div",H,[i("div",J,[i("div",K,[a(x,{gutter:5},{default:o(()=>[a(v,{span:8},{default:o(()=>[a(f,{modelValue:d(p),"onUpdate:modelValue":n[0]||(n[0]=e=>y(p)?p.value=e:p=e),placeholder:"\u4F8B\u5982air724",onChange:g},{prepend:o(()=>[O]),_:1},8,["modelValue"])]),_:1}),a(v,{span:8},{default:o(()=>[a(f,{modelValue:d(r),"onUpdate:modelValue":n[1]||(n[1]=e=>y(r)?r.value=e:r=e),placeholder:"\u4F8B\u5982air780",onChange:g},{prepend:o(()=>[P]),_:1},8,["modelValue"])]),_:1}),a(v,{span:8},{default:o(()=>[a(f,{modelValue:d(s),"onUpdate:modelValue":n[2]||(n[2]=e=>y(s)?s.value=e:s=e),placeholder:"\u4F8B\u5982air101",onChange:g},{prepend:o(()=>[Q]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),i("div",W,[a(S,{data:d(C),border:"",stripe:"",style:{width:"100%"}},{default:o(()=>[a(u,{prop:"name",label:"\u540D\u79F0"},{default:o(e=>[i("div",{class:"repo-name el-link el-link--primary",onClick:h=>L(e.row)},k(e.row.namespaceId+"/"+e.row.name),9,X)]),_:1}),a(u,{prop:"title",label:"\u7B80\u4ECB"}),a(u,{prop:"tags",label:"\u6807\u7B7E"},{default:o(e=>[(b(!0),V(E,null,A(e.row.tags,h=>(b(),G(B,{class:"repo-tag",key:h,type:"info"},{default:o(()=>[c(k(h),1)]),_:2},1024))),128))]),_:1}),a(u,{prop:"version_latest",label:"\u6700\u65B0\u7248\u672C",width:"100"}),a(u,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4",width:"200"})]),_:1},8,["data"])]),i("div",Y,[a(z,{onCurrentChange:T,background:"",layout:"prev, pager, next","page-count":d(w)},null,8,["page-count"])])])}}};export{te as default};
