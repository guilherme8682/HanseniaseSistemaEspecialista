(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAASXSURBVHja7JldbFRFFMd/u9svGqWQFFJi0jb0QbckBiXBjyhVEzQqiqnEAOHF2JhITAxtWn2w8QGDiB/FB0xEanwwDRrXGMuHEPwoiYkGBWNsK0JDUZTKCrWAhC3d/fvQ2du9u3t39967rUY952F3zpw78585Z86cmQmIv5eC/NcBlNhK5dQSct1GnGGueEagJAfVqfPyRn+oQwHhhaf+dsoftXkDEFBy8qNc7cuYv1ND3LsT1vrsHqqp8bMKSoru0P++OPAmTTRxeXrjQC4a5iCQmBkAR7mYIRsB4AgVafIlPhGY9Ri2renbXazkKarzEgf+YXtBkjo5k+ObnewCuikvCoKsJpiihIYzZPcIXZNFdxpMcJCbWErUJovyGXDHzMSBHznEGR4jNW3ayjiwumhOkNMECS0XQs9bkqOaJXSd4sUyQT4f+FU1QgG9I0n6UzcKoY+y6k4LAOkLVQiV6D3F9IAQWuegOU0ApPcVEgqZ0S/WhZkGIPWo1Ohdq9OOWp4AlBTkpxcpN2lngkFqgAT72ccp2+YUnY5AJB3SbUan2vw+pA+NOYrAyZwwzEAWdIfZxAcImMtWHuE5ulIS8CALPGRBE4zYckfHGdijZVbC/qhGjHRAK430Sf3mMX+Oqm0qiXcG8KKpWanvbPJ9pnt/1JEfwHGFhNDjafJWoaDn0SdpNLmunPeCepoA2M5rNvlPwALm+9wB5lCfbzN6mk/NvzY+TpEnipvEOwF4i1eAhUQoI87qrGukqNvxRFoe8AQwm16aeR0Y40HOumh1kG844i4QlWrUcpAhVQuFtNuUNwihJsUkSc1CdXnOyrOE0Lc5tcLpp+MOUzGmRULoVUt1QvcJoZYCAbxhWnzKHYCAWhVN60wWqEYLVH4At1ihO+YGAEIhzbNNtzLMUqfKPAB+EEJXCaGIWwCTvFDRLB98rjJLIxeAZ4TQdiG0Ij+AQJZruo00AnO505Rj7Aagh4iR1DHseF9Uxy80cIzr+Z4Sfna8NWhk0H5HlM5LUjaP9DrnGdgrhJ6VtEkIbck3A96OZqfocqh5G4A1wBoCVrmgW7JCZ+Bh4wstWXz8nCqEFpvSrULoy2LPwFr2Uw3s4O6M6LiTy8BaS5MC5sBxBsL62vABmzwiacgEqwb120a1VCigw4oqqqj6FRSao0tul2FujpjQNBmwqrTXarLf4YsebwBK9a4ZiZ1jVoDeYIJXl5G0O7S03G0cSFIlvdyV037drGccaGEbQWo5DWyjKsW+67lAkBPUuo8DCFXqkzypVcRoNmuXELohrX6dENro3QdyQ+hXgxBapCGtEkKbM3LrSWdNeHdCZwh7VCWE7teYzqpcKKATaTpXNF8I9TkByJ/dXWIFjSnll8we0UU7caCVLYQ4zgvA7GSqmZL5dXMsZxbpaRnG1CKEyrTDc2IeLvxwmnkxv4o+oJoIy2b+zWiAm+kDGvnKf/deTDDJ92rM59nIhwlgHr0eHrfST8k+3gvOMeqz+/Oc9AMgzmafAF5m3J8PBNSecpRxR2PqVDD9hsQLlVLv6ZnzpDV68AXg/8frotBfAwBBB2ClaN29SwAAAABJRU5ErkJggg=="},23:function(e,t,a){e.exports=a.p+"static/media/carregando.fef1f20a.gif"},24:function(e,t,a){e.exports=a(35)},35:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),s=a(20),n=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(9),l=a(2),c=a(1);const d={container:{width:"100%",height:"100%",flex:1},link:{height:"calc(100% - 5px)",listStyle:"none",textDecoration:"none",color:"white",fontSize:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},bottomBar:{backgroundColor:"white",height:"5px",width:"100%",transition:"all .5s"}};class p extends i.Component{constructor(...e){super(...e),this.state={isMouseHover:!1},this.changeMouseHover=()=>{this.setState({isMouseHover:!this.state.isMouseHover})}}render(){const e=this.props,t=e.path,a=e.label,i=this.state.isMouseHover,s={container:Object(c.a)(Object(c.a)({},d.container),i?d.optionMouseOver:{}),bottomBar:Object(c.a)(Object(c.a)({},d.bottomBar),{},{opacity:i?1:0})};return o.a.createElement("div",{style:s.container},o.a.createElement(r.b,{to:t,style:d.link,onMouseEnter:this.changeMouseHover,onMouseLeave:this.changeMouseHover},a),o.a.createElement("div",{style:s.bottomBar}))}}var u=a(22);const m={container:{height:"100%",width:"100%",flex:1,position:"relative",top:"3px"},select:{background:"url(".concat(a.n(u).a,") no-repeat right"),backgroundRepeat:"no-repeat",backgroundSize:"25px",backgroundPositionX:"97%",backgroundPositionY:"16px",border:"none",appearance:"none",height:"calc(100% - 5px)",width:"100%",fontSize:"20px",color:"white",backgroundColor:"rgba(0, 0, 0, 0)",boxShadow:"none",borderBottom:"5px solid rgba(0, 0, 0, 0)",display:"flex",cursor:"pointer"},option:{height:"65px",fontSize:"25px",justifyContent:"center",alignItems:"center",backgroundColor:"#03A9F4",color:"white",border:0},bottomBar:{backgroundColor:"white",height:"5px",width:"100%",position:"relative",top:"-3px",transition:"all .5s"}};class h extends i.Component{constructor(...e){super(...e),this.state={isMouseHover:!1},this.setMouseHover=e=>{this.setState({isMouseHover:e})}}render(){const e=this.props,t=e.action,a=e.options,i=e.value,s=this.state.isMouseHover,n={container:Object(c.a)(Object(c.a)({},m.container),s?m.optionMouseOver:{}),bottomBar:Object(c.a)(Object(c.a)({},m.bottomBar),{},{opacity:s?1:0})};return o.a.createElement("div",{style:n.container,onMouseEnter:()=>this.setMouseHover(!0),onMouseLeave:()=>this.setMouseHover(!1),onClick:()=>this.setMouseHover(!1)},o.a.createElement("select",{style:m.select,onChange:e=>t(e.target.value),defaultValue:String(i)},a.map((e,t)=>o.a.createElement("option",{key:t,style:m.option,value:e.id},e.value))),o.a.createElement("div",{style:n.bottomBar}))}}var g=a(11),f=a(10);class b{static get(e){if(!b.idList.includes(e))throw new Error("Unavailable language id. id = "+e);return b.list[e]}static defaultLanguageId(){return b.idList[0]}static get dictionaryList(){return b.idList.map(e=>({id:e,value:b.list[e].meta.displayName}))}}b.list={pt:{meta:{displayName:"Portugu\xeas"},header:{menus:{article:"Artigo",home:"Inicio",system:"Sistema"},title:"SEPRE"},tipBox:{buttonName:"Iniciar",description:"Voc\xea pode usar o sistema especialista para prever rea\xe7\xf5es em um paciente com a doen\xe7a clicando no bot\xe3o abaixo."},home:{content:"A hansen\xedase \xe9 uma doen\xe7a que afeta a popula\xe7\xe3o mundial h\xe1 muito tempo e mesmo assim, nos dias de hoje, ainda ocorrem dificuldades no momento em que \xe9 necess\xe1rio definir a qual forma cl\xednica da doen\xe7a o paciente se enquadra. Atualmente, os m\xe9dicos definem o caso do paciente a partir de testes, e da pr\xf3pria experi\xeancia profissional. No entanto, tal fato, gera, muitas vezes, uma incoer\xeancia no momento da classifica\xe7\xe3o do paciente, visto que cada hansenologista julga o paciente conforme seu conhecimento, o que pode levar a um tratamento errado ou at\xe9 mesmo n\xe3o evitar a ocorr\xeancia das incapacidades associadas \xe0 doen\xe7a. Uma alternativa para ajudar os m\xe9dicos a desenvolverem um padr\xe3o de classifica\xe7\xe3o foi \xe0 cria\xe7\xe3o de um sistema computacional onde ele forneceria um palpite sobre qual seria o prov\xe1vel caso do paciente (PIBITI, 2014). No entanto, este sistema foi baseado no artigo de Ridley e Jopling de 1966, que utiliza uma metodologia de classifica\xe7\xe3o antiga ainda em uso dos m\xe9dicos. Portanto, verificar a confiabilidade deste sistema se tornou crucial para um futuro relacionamento do sistema com os doutores.        Objetivo: Comparar, com o aux\xedlio de ferramentas da intelig\xeancia artificial junto \xe0 minera\xe7\xe3o de dados, a efici\xeancia do m\xe9todo de classifica\xe7\xe3o de Ridley e Jopling.        Metodologia: A base de dados \xe9 formada por 865 pacientes diagnosticados com hansen\xedase. Esta amostra populacional foi utilizada pelo software Weka, baseado em intelig\xeancia artificial, para gerar os poss\xedveis resultados das classifica\xe7\xf5es.        Resultados: Com base nos dados e resultados dos c\xe1lculos executados em cima das bases, foi poss\xedvel criar um arquivo de regras com mais de 600 linhas, sendo que a cada regra disparada pelo sistema, o sistema atualiza a probabilidade de o paciente pertencer a cada uma das formas cl\xednicas. Para as regras dispararem e o sistema funcionar \xe9 necess\xe1rio que o usu\xe1rio insira na interface do sistema os dados cl\xednicos do paciente.        Conclus\xf5es: O m\xe9todo de classifica\xe7\xe3o estudado, por mais que seja famoso e o mais utilizado quando se fala em hansen\xedase, est\xe1 longe de ser considerado perfeito, visto que muitos casos da doen\xe7a n\xe3o apresentam similaridade com nenhum dos tipos propostos pela classifica\xe7\xe3o e acabam por ser determinados como casos indeterminados.",title:"Sistema Especialista para hansen\xedase"},article:{content:"",title:"Dispon\xedvel em breve"},system:{topBar:{database:{label:"Base de dados",options:[{id:"all",value:"Completa"},{id:"bauru",value:"Bauru"},{id:"fortaleza",value:"Fortaleza"},{id:"goiania",value:"Goi\xe2nia"},{id:"manaus",value:"Manaus"}]},clearButton:"Limpar",rememberInformation:"Lembrar informa\xe7\xf5es"},questionGroups:[{title:"Dados\xa0S\xf3cio-demograficos",questions:[{id:0,title:"Sexo",options:["Masculino","Feminino"]},{id:1,title:"Faixa et\xe1ria",options:["0 a 19 anos","20 a 39 anos","40 a 64 anos","Idoso"]},{id:5,title:"Etnia",options:["Branca","Preta","Parda","Amarela"]}]},{title:"Exames\xa0Cl\xednicos",questions:[{id:9,title:"N\xfamero de les\xf5es",options:["1 a 5","6 a 11","Infiltra\xe7\xe3o difusa"]},{id:10,title:"Tipo de les\xe3o",options:["Placa","P\xe1pula","M\xe1cula","N\xf3dulo","Infiltra\xe7\xe3o difusa"]},{id:11,title:"Cor da les\xe3o",options:["Normocr\xf4mica","Hipocr\xf4mica","Hipercr\xf4mica","Eritematosa"]},{id:12,title:"Sensibilidade",options:["Normal","Alterada","Duvidosa"]}]},{title:"Dados\xa0Cl\xednicos",questions:[{id:4,title:"Forma cl\xednica",options:["TT","BT","BB","BL","LL","Indeterminada"]},{id:3,title:"Tratamento",options:["6 meses","12 meses"]},{id:2,title:"Tempo do primeiro sintoma (auto-relato)",options:["0 a 1 ano","1 a 2 anos","2 a 3 anos","3+ anos"]}]},{title:"Dados\xa0Laboratoriais",questions:[{id:13,title:"Ind\xedce bacilosc\xf3pico",options:["Negativo","1+","2+","3+","4+","5+","6+"]},{id:14,title:"Ind\xedce histol\xf3gico",options:["Negativo","1+","2+","3+","4+","5+","6+"]},{id:15,title:"Intensidade de PGL-1",options:["Negativo","1+","2+","3+","4+"]}]},{title:"Hist\xf3rico\xa0Familiar",questions:[{id:6,title:"Primeiro grau",options:["Sim","N\xe3o"]},{id:7,title:"Segundo grau",options:["Sim","N\xe3o"]},{id:8,title:"Contato",options:["Sim","N\xe3o"]}]},{title:"Dados\xa0Gen\xe9ticos",questions:[{id:16,title:"IL6 - rs2069832",options:["GG","AA+AG"]},{id:17,title:"IL6 - rs2069840",options:["CC","CC+CG"]},{id:18,title:"IL6 - rs2069845",options:["AA","GG+AG"]},{id:19,title:"IL6 - rs1800795",options:["GG","CC+CG"]},{id:21,title:"TLR1 - rs5743618",options:["GG","GT","TT"]},{id:22,title:"TLR1 - rs4833095",options:["AA","AG","GG"]},{id:20,title:"NOD2 - rs8057341",options:["AA","AG","GG"]},{id:23,title:"Gene Desconhecido rs4909863",options:["AA","AG","GG"]},{id:24,title:"Gene Desconhecido rs4130173",options:["AA","AG","GG"]},{id:25,title:"TNFSF8 - rs6478108",options:["AA","AG","GG"]},{id:26,title:"TNFSF8 - rs7863183",options:["CC","CT","TT"]},{id:27,title:"TNFSF8 - rs1555457",options:["AA","AG","GG"]},{id:28,title:"TNFSF8 - rs3181348",options:["AA","AG","GG"]},{id:29,title:"ENSG - rs7090170",options:["AA","AG","GG"]},{id:30,title:"ENSG - rs10826321",options:["CT","TT"]},{id:31,title:"ENSG - rs1875147",options:["CC","CT","TT"]},{id:32,title:"ENSG - rs7916086",options:["AA","AG","GG"]},{id:33,title:"LRRK2 - rs4768236",options:["AA","CC"]},{id:34,title:"LRRK2 - rs3761863",options:["AA","AG","GG"]},{id:35,title:"LRRK2 - rs3886747",options:["CC","CT","TT"]},{id:36,title:"PTPN1 - rs6020566",options:["AA","AG","GG"]},{id:37,title:"PTPN1 - rs6067472",options:["AA","AT","TT"]}]}],reults:{label:"Resultados",noReaction:{name:"Sem\xa0rea\xe7\xe3o",description:"Nenhuma rea\xe7\xe3o \xe9 esperada."},type1:{name:"Rea\xe7\xe3o\xa0tipo\xa01",description:"Manifesta\xe7\xf5es cl\xednicas da forma RT1 s\xe3o infiltra\xe7\xf5es de les\xf5es antigas associadas ao surgimento de novas les\xf5es, com formas de manchas ou placas infiltradas. Eritema. Dor e/ou espessamento de nervos perif\xe9ricos com perda da fun\xe7\xe3o sensitivo-motora."},type2:{name:"Rea\xe7\xe3o\xa0tipo\xa02",description:"A RT2 \xe9 uma rea\xe7\xe3o inflamat\xf3ria aguda, sist\xeamica, que envolve a forma\xe7\xe3o e dep\xf3sitos de imunocomplexos que circulam pelo sangue perif\xe9rico (rea\xe7\xe3o do tipo III e Gell & Coombs).\xc9 caracterizada pelo surgimento de les\xf5es eritematosas generalizadas, n\xf3dulos e p\xe1pulas acompanhadas de febre."}}},footer:{content:"PIBITI - Guilherme Rocha. 2016"},logs:{loadingAlt:"Carregando..."},error:{badResult:{title:"Erro: N\xe3o foi poss\xedvel realizar o diagn\xf3stico!",description:"Reinicie a p\xe1gina e se o erro persistir contate o desenvolvedor."}}},en:{meta:{displayName:"English"},header:{menus:{article:"Article",home:"Home",system:"System"},title:"SEPRE"},tipBox:{buttonName:"Start",description:"You can use the expert system for predict reaction in a patient with the disease clicking the button below."},home:{content:"Leprosy is a disease that has affected the world's population for a long time and even then, difficulties still exist at the moment when it is necessary to define which clinical form of the disease the patient fits into. Doctors now define the patient's case from tests, and from his own professional experience. However, this often generates an inconsistency in the classification of the patient, since each leprosyist judges the patient according to his knowledge, which can lead to a wrong treatment or even avoid the occurrence of the incapacities associated with disease. An alternative to helping physicians develop a classification pattern was to create a computer system where it would give a hint as to what the probable case of the patient would be (PIBITI, 2014). However, this system was based on Ridley and Jopling's 1966 article, which uses an old classification methodology still in use by physicians. Therefore, verifying the reliability of this system has become crucial for a future system relationship with doctors. Objective: To compare, with the aid of artificial intelligence tools in data mining, the efficiency of the Ridley and Jopling classification method. Methodology: The database consists of 865 patients diagnosed with leprosy. This population sample was used by Weka software, based on artificial intelligence, to generate the possible results of the classifications. Results: Based on the data and results of the calculations performed on the bases, it was possible to create a rule file with more than 600 lines, and with each rule triggered by the system, the system updates the probability of the patient belonging to each one of clinical forms. For the rules to fire and the system to work, the user must insert the patient's clinical data into the system interface. Conclusions: The classification method studied, however well known and most used when it comes to leprosy, is far from considered perfect, since many cases of the disease do not present similarity to any of the types proposed by the classification and end up being determined as indeterminate cases.",title:"Leprosy Specialist System"},article:{content:"",title:"Available Soon"},system:{topBar:{database:{label:"Database",options:[{id:"all",value:"All"},{id:"bauru",value:"Bauru"},{id:"fortaleza",value:"Fortaleza"},{id:"goiania",value:"Goi\xe2nia"},{id:"manaus",value:"Manaus"}]},clearButton:"Clear",rememberInformation:"Remember information"},questionGroups:[{title:"Sociodemographic Data",questions:[{id:0,title:"Gender",options:["Male","Female"]},{id:1,title:"Age group",options:["0 to 19 yars","20 to 39 yars","40 to 64 yars","Elderly"]},{id:5,title:"Ethnicity",options:["White","Black","Mixed race","Yellow"]}]},{title:"Clinical exams",questions:[{id:9,title:"Wound number",options:["1 to 5","6 to 11","Diffuse Infiltration"]},{id:10,title:"Type of wound",options:["Plaques","Papules","Macules","Nodules","Diffuse Infiltration"]},{id:11,title:"Wound color",options:["Normocrhomic","Hypochromic","Hyperchromic","Erythematous"]},{id:12,title:"Sensibility",options:["Normal","Impairment","Dubious"]}]},{title:"Clinical Data",questions:[{id:4,title:"Ridley-Jopling Classification",options:["TT","BT","BB","BL","LL","Indeterminate"]},{id:3,title:"Multidrug Therapy",options:["6 months","12 months"]},{id:2,title:"First Signs and Symptoms (self report)",options:["0 to 1 year","1 to 2 years","2 to 3 years","3+ years"]}]},{title:"Dados\xa0Laboratoriais",questions:[{id:13,title:"Bacilloscopic Index",options:["Negative","1+","2+","3+","4+","5+","6+"]},{id:14,title:"Histological Index",options:["Negative","1+","2+","3+","4+","5+","6+"]},{id:15,title:"PGL-1 intensity",options:["Negative","1+","2+","3+","4+"]}]},{title:"Family history",questions:[{id:6,title:"First Degree",options:["Yes","No"]},{id:7,title:"Second Degree",options:["Yes","No"]},{id:8,title:"Contact",options:["Yes","No"]}]},{title:"Genetic Data",questions:[{id:16,title:"IL6 - rs2069832",options:["GG","AA+AG"]},{id:17,title:"IL6 - rs2069840",options:["CC","CC+CG"]},{id:18,title:"IL6 - rs2069845",options:["AA","GG+AG"]},{id:19,title:"IL6 - rs1800795",options:["GG","CC+CG"]},{id:21,title:"TLR1 - rs5743618",options:["GG","GT","TT"]},{id:22,title:"TLR1 - rs4833095",options:["AA","AG","GG"]},{id:20,title:"NOD2 - rs8057341",options:["AA","AG","GG"]},{id:23,title:"Unknown Gene rs4909863",options:["AA","AG","GG"]},{id:24,title:"Unknown Gene rs4130173",options:["AA","AG","GG"]},{id:25,title:"TNFSF8 - rs6478108",options:["AA","AG","GG"]},{id:26,title:"TNFSF8 - rs7863183",options:["CC","CT","TT"]},{id:27,title:"TNFSF8 - rs1555457",options:["AA","AG","GG"]},{id:28,title:"TNFSF8 - rs3181348",options:["AA","AG","GG"]},{id:29,title:"ENSG - rs7090170",options:["AA","AG","GG"]},{id:30,title:"ENSG - rs10826321",options:["CT","TT"]},{id:31,title:"ENSG - rs1875147",options:["CC","CT","TT"]},{id:32,title:"ENSG - rs7916086",options:["AA","AG","GG"]},{id:33,title:"LRRK2 - rs4768236",options:["AA","CC"]},{id:34,title:"LRRK2 - rs3761863",options:["AA","AG","GG"]},{id:35,title:"LRRK2 - rs3886747",options:["CC","CT","TT"]},{id:36,title:"PTPN1 - rs6020566",options:["AA","AG","GG"]},{id:37,title:"PTPN1 - rs6067472",options:["AA","AT","TT"]}]}],reults:{label:"Results",noReaction:{name:"No\xa0reaction",description:"No reaction is expected."},type1:{name:"Type\xa01\xa0reaction",description:"Clinical manifestations of the RT1 form are infiltrations of old wound associated with the appearance of new wound, with forms of spots or infiltrated plaques. Erythema. Pain and / or thickening of peripheral nerves with loss of sensory-motor function."},type2:{name:"Type\xa02\xa0reaction",description:"RT2 is an acute, systemic inflammatory reaction involving the formation and deposits of immune complexes that circulate in the peripheral blood (type III and Gell & Coombs reaction). It is characterized by the onset of generalized erythematous wound, nodules and papules accompanied by fever."}}},footer:{content:"PIBITI - Guilherme Rocha. 2016"},logs:{loadingAlt:"Loading..."},error:{badResult:{title:"Error: Could not perform the diagnosis!",description:"Restart the page and if the error persists contact the developer."}}}},b.idList=Object.keys(b.list);let v;!function(e){e[e.NoReaction=0]="NoReaction",e[e.Type1=1]="Type1",e[e.Type2=2]="Type2"}(v||(v={}));class x{static get(e){if(!x.idList.includes(e))throw new Error("Unavailable database id. id = "+e);return x.list[e]}static defaultDatabaseId(){return x.idList[0]}}x.list={all:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],bauru:[0,1,3,4,5,6,7,8,13,14,20,21,22],fortaleza:[0,1,2,3,4,5,9,10,11,12,13,15],goiania:[0,1,2,3,4,6,7,8,16,17,18,19,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],manaus:[0,1,2,3,4,5,9,10,11,12,13,15]},x.idList=Object.keys(x.list);class y{}y.language=new class{get languageObject(){return b.get(this.storedLanguageId)}get storedLanguageId(){return localStorage.getItem("languageId")||b.defaultLanguageId()}set storedLanguageId(e){localStorage.setItem("languageId",e)}set languageId(e){b.get(e),this.storedLanguageId=e,document.location.reload(!0)}},y.flags=new class{constructor(){this.resultListener=void 0,this.setResultListener=e=>{this.resultListener=e},this.startDiagnosis=()=>{this.resultListener&&this.resultListener()}}get isToSaveData(){const e=localStorage.getItem("saveData")||"true";return Boolean(JSON.parse(e))}set isToSaveData(e){localStorage.setItem("saveData",JSON.stringify(e))}},y.databaseFilter=new class{constructor(){this.answerListeners=[],this.convertDatabaseIdForNeticaCode=()=>{const e=x.idList.indexOf(this.databaseId);return 0===e?x.idList.length-1:e-1},this.setAnswerListener=(e,t)=>{this.answerListeners[e]=t},this.questionIsAllowed=e=>x.get(this.databaseId).includes(e),this.refreshDatabase=e=>{const t=x.get(e);this.databaseId=e;var a,i=Object(f.a)(this.answerListeners.entries());try{for(i.s();!(a=i.n()).done;){const e=Object(g.a)(a.value,2),i=e[0],o=e[1],s=t.includes(i);o&&o(!s),s||y.questions.setAnswer(i,-1)}}catch(o){i.e(o)}finally{i.f()}y.flags.startDiagnosis()}}get databaseId(){const e=localStorage.getItem("databaseId");return JSON.parse(e||"null")||x.defaultDatabaseId()}set databaseId(e){if(!x.idList.includes(e))throw new Error("Database id unavailable. id = "+e);y.flags.isToSaveData&&localStorage.setItem("databaseId",JSON.stringify(e))}},y.questions=new class{constructor(){this.answers=this.storedAnswers,this.answerListeners=[],this.saveStoredAnswers=()=>{y.flags.isToSaveData&&localStorage.setItem("storedAnswer",JSON.stringify(this.answers))},this.getAnswer=e=>{const t=this.answers[e];if(null!==t&&void 0!==t)return t;const a=y.databaseFilter.questionIsAllowed(e);return this.setAnswer(e,a?0:-1),0},this.setAnswer=(e,t)=>{this.answers[e]=t;const a=this.answerListeners[e];a&&a(t),this.saveStoredAnswers()},this.clearAnswers=()=>{var e,t=Object(f.a)(this.answers.entries());try{for(t.s();!(e=t.n()).done;){const t=Object(g.a)(e.value,1)[0];-1!==this.getAnswer(t)&&this.setAnswer(t,0)}}catch(a){t.e(a)}finally{t.f()}},this.setAnswerListener=(e,t)=>{this.answerListeners[e]=t}}get storedAnswers(){const e=localStorage.getItem("storedAnswer")||"[]";return JSON.parse(e)}};const A={container:{paddingLeft:"100px",paddingRight:"100px",width:"100%",height:"65px",backgroundColor:"#03A9F4",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},content:{maxWidth:"1000px",width:"calc(100% - 200px)",display:"flex",height:"100%",alignItems:"center",justifyContent:"center"},title:{flex:2,fontSize:"35px",color:"#FAFAFA",fontWeight:"bold",textAlign:"center"},options:{flex:6,height:"100%",width:"100%",display:"flex",alignItems:"center"}};class w extends i.Component{render(){const e=y.language.languageObject.header,t=e.title,a=e.menus;return o.a.createElement("div",{style:A.container},o.a.createElement("div",{style:A.content},o.a.createElement("div",{style:A.title},t),o.a.createElement("div",{id:"P",style:A.options},o.a.createElement(p,{path:"home",label:a.home}),o.a.createElement(p,{path:"system",label:a.system}),o.a.createElement(p,{path:"article",label:a.article}),o.a.createElement(h,{action:e=>y.language.languageId=e,options:b.dictionaryList,value:y.language.storedLanguageId}))))}}const C={footer:{backgroundColor:"#03A9F4",width:"100%",minHeight:"50px",maxWidth:"1200px",color:"white",display:"flex",justifyContent:"center",alignItems:"center",gridRowStart:2,gridRowEnd:3}};class E extends i.Component{render(){const e=y.language.languageObject.footer.content;return o.a.createElement("footer",{style:C.footer},e)}}const G={button:{border:"0",padding:"0 35px 0 35px",borderRadius:"2px",textDecoration:"none",color:"#FFFFFF",boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",backgroundColor:"#31A6FF",outline:"none",margin:"0 20px 0 20px",height:"30px",transition:"all 0.1s cubic-bezier(.25,.8,.25,1)",cursor:"pointer"}};class S extends i.Component{render(){const e=this.props,t=e.path,a=e.onClick,i=e.children,s=o.a.createElement("button",{style:G.button,onClick:a},i);return t?o.a.createElement(r.b,{to:t},s):s}}const I={container:{display:"flex",padding:"30px",backgroundColor:"#FAFAFA"},content:{flex:"7"},side:{flex:"3",display:"flex",flexDirection:"column",paddingTop:"50px"},tipBox:{display:"flex",flexDirection:"column",backgroundColor:"#EAEAEA",margin:"30px",padding:"30px",borderRadius:"5px",height:"auto",alignItems:"center"},title:{margin:"30px",fontSize:"3.5rem",lineHeight:"4rem",letterSpacing:"-0.15625rem",fontWeight:"bold"},introduction:{margin:"0 60px 0 60px",color:"#444",fontFamily:"Helvetica, sans-serif",lineHeight:"36px",textIndent:"36px",textAlign:"justify"},tipBoxDescription:{boxSizing:"inherit",fontFamily:"Helvetica, sans-serif",lineHeight:"28px",position:"relative",textIndent:"36px",textAlign:"justify"}};class T extends i.Component{render(){const e=y.language.languageObject.tipBox,t=e.description,a=e.buttonName,i=this.props,s=i.title,n=i.content;return o.a.createElement("div",{style:I.container},o.a.createElement("div",{style:I.content},o.a.createElement("div",{style:I.title},s),o.a.createElement("div",{style:I.introduction},n)),o.a.createElement("div",{style:I.side},o.a.createElement("div",{style:I.tipBox},o.a.createElement("div",{style:I.tipBoxDescription},t),o.a.createElement(S,{path:"system"},a))))}}class k extends i.Component{render(){const e=y.language.languageObject.home,t=e.title,a=e.content;return o.a.createElement(T,{title:t,content:a})}}class O extends i.Component{render(){const e=y.language.languageObject.article,t=e.title,a=e.content;return o.a.createElement(T,{title:t,content:a})}}const L={backgroundColor:"white",display:"inline-block",padding:"5px",letterSpacing:".5px",border:"0",borderRadius:"2px",textDecoration:"none",color:"black",outline:"none",boxShadow:"0 1px 1px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",width:"100%",transition:"all 0.2s cubic-bezier(.25,.8,.25,1)",cursor:"pointer"},B={title:{fontWeight:"normal",fontSize:"12px",marginBottom:"5px"},disabled:{backgroundColor:"rgb(255, 255, 255,0.3)"},extraSpace:{margin:"6.3px 0 6.3px 0"}};class N extends i.Component{constructor(...e){super(...e),this.state={disabled:!1,value:y.questions.getAnswer(this.props.question.id)},this.handleChange=e=>{const t=this.props.question.id;y.questions.setAnswer(t,Number(e.target.value)),y.flags.startDiagnosis()}}componentWillMount(){const e=this.props.question.id;y.questions.setAnswerListener(e,e=>this.setState({value:e})),y.databaseFilter.setAnswerListener(e,e=>this.setState({disabled:e}))}render(){const e=this.state,t=e.disabled,a=e.value,i=this.props,s=i.question,n=s.id,r=s.title,l=s.options,d=i.extraSpace,p={select:Object(c.a)(Object(c.a)(Object(c.a)({},L),t?B.disabled:{}),d?B.extraSpace:{})};return o.a.createElement("div",{style:B.container},o.a.createElement("div",{style:B.title},r,":"),o.a.createElement("select",{id:n.toString(),style:p.select,disabled:t,onChange:this.handleChange,value:a},o.a.createElement("option",{value:0},"-"),l.map((e,t)=>o.a.createElement("option",{key:t,value:t+1},e))))}}const q={container:{fontWeight:"bold",textAlign:"left",margin:"7px",borderRadius:"3px",backgroundColor:"#CEEFFF"},title:{height:"30px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},titleMouseOver:{textDecoration:"underline"},questionsContainer:{opacity:0,maxHeight:0,overflow:"hidden",transition:"all .6s"},questionsContainerShowing:{opacity:1,maxHeight:"1000px",transition:"all 1.2s"},questionsContent:{padding:"8px",display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"8px"}};class R extends i.Component{constructor(...e){super(...e),this.state={questionsShowing:!0,titleMouseOver:!1},this.changeQuestionShowing=()=>{this.setState({questionsShowing:!this.state.questionsShowing})},this.changeTitleMouseOver=()=>{this.setState({titleMouseOver:!this.state.titleMouseOver})}}render(){const e=this.state,t=e.questionsShowing,a=e.titleMouseOver,i=this.props,s=i.questionGroup,n=s.title,r=s.questions,l=i.extraSpace,d={questionsContainer:Object(c.a)(Object(c.a)({},q.questionsContainer),t?q.questionsContainerShowing:{}),title:Object(c.a)(Object(c.a)({},q.title),a?q.titleMouseOver:{})};return o.a.createElement("div",{style:q.container},o.a.createElement("div",{onClick:this.changeQuestionShowing,onMouseEnter:this.changeTitleMouseOver,onMouseLeave:this.changeTitleMouseOver},o.a.createElement("div",{style:d.title},n)),o.a.createElement("div",{style:d.questionsContainer},o.a.createElement("div",{style:q.questionsContent},r.map((e,t)=>o.a.createElement(N,{key:t,question:e,extraSpace:l})))))}}const F={container:{height:"100%",backgroundColor:"#E5FEFF",display:"flex"},side:{flex:"1"}};class j extends i.Component{render(){const e=y.language.languageObject.system.questionGroups.slice(),t=e.pop();if(void 0===t)throw new Error("Error finding genetics questions!");return o.a.createElement("div",{style:F.container},o.a.createElement("div",{style:F.side},e.map((e,t)=>o.a.createElement(R,{key:t,questionGroup:e,extraSpace:!1}))),o.a.createElement("div",{style:F.side},o.a.createElement(R,{key:0,questionGroup:t,extraSpace:!0})))}}var D=a(7),M=a.n(D),H=a(12);const z={superContainer:{width:"100%",padding:"3%"},container:{backgroundColor:"#F1D4AF",width:"94%",borderRadius:"7px",flex:"1",display:"flex",flexDirection:"column"},resultBar:{float:"left",height:"60px",backgroundColor:"#B7E454",borderRadius:"7px",verticalAlign:"middle",display:"flex",alignItems:"center",transition:"all 1s"},resultBarTitle:{marginLeft:"20px"},description:{opacity:0,maxHeight:0,overflow:"hidden",borderRadius:"0 0 7px 7px",fontSize:"15px",transition:"all 1s"},contentDescription:{margin:"10px",lineHeight:"2.0"},descriptionMouseOver:{opacity:1,maxHeight:"500px"},probability:{backgroundColor:"#E1C49F",borderRadius:"5px",margin:"5px",fontWeight:"bold"}};class W extends i.Component{constructor(...e){super(...e),this.state={mouseIsOver:!1},this.changeMouseIsOver=()=>{this.setState({mouseIsOver:!this.state.mouseIsOver})}}render(){const e=this.props,t=e.resultData,a=e.probability,i=e.opened,s=this.state.mouseIsOver,n={resultBar:Object(c.a)(Object(c.a)({},z.resultBar),{},{width:a+"%"}),description:Object(c.a)(Object(c.a)({},z.description),s||i?z.descriptionMouseOver:{})};return o.a.createElement("div",{style:z.superContainer},o.a.createElement("div",{style:z.container,onMouseEnter:this.changeMouseIsOver,onMouseLeave:this.changeMouseIsOver},o.a.createElement("div",{style:n.resultBar},o.a.createElement("div",{style:z.resultBarTitle},t.name),o.a.createElement("div",{style:z.probability},a,"%")),o.a.createElement("div",{style:n.description},o.a.createElement("div",{style:z.contentDescription},t.description))))}}var P=a(23),J=a.n(P);const U={errorSuperContainer:{width:"100%",padding:"3%"},errorContainer:{opacity:0,maxHeight:0,backgroundColor:"rgb(255, 58, 58)",color:"white",width:"94%",borderRadius:"7px",flex:"1",transition:"all 0.5s cubic-bezier(.25,.8,.25,1)"},errorContent:{overflow:"hidden",borderRadius:"0 0 7px 7px",fontSize:"15px",transition:"all 1s"},error:{margin:"10px",lineHeight:"2.0"},errorShowing:{opacity:1,maxHeight:"500px"},title:{fontWeight:"bold"}};class Y extends i.Component{render(){const e=this.props,t=e.haveAnError,a=e.badResult,i={errorContainer:Object(c.a)(Object(c.a)({},U.errorContainer),t?U.errorShowing:{})};return o.a.createElement("div",{style:U.errorSuperContainer},o.a.createElement("div",{style:i.errorContainer},o.a.createElement("div",{style:U.errorContent},o.a.createElement("div",{style:U.error},o.a.createElement("div",{style:U.title},a.title),o.a.createElement("div",null,a.description)))))}}function Q(e,t){return X.apply(this,arguments)}function X(){return(X=Object(H.a)(M.a.mark((function e(t,a){var i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"?json=").concat(JSON.stringify(a)));case 2:return i=e.sent,e.next=5,i.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}class V{static process(e){return Object(H.a)(M.a.mark((function t(){var a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q("/process",{dados:e});case 2:if(!(a=t.sent).error){t.next=5;break}throw new Error("Internal server error.");case 5:return t.abrupt("return",a.resultado);case 6:case"end":return t.stop()}}),t)})))()}}const K={container:{backgroundColor:"#ece5ce",display:"flex",flexDirection:"column",justifyContent:"flex-start"},label:{height:"40px",width:"100%",fontWeight:"bold",fontSize:"16px",display:"flex",justifyContent:"center",alignItems:"center"},loadingContainer:{width:"100%",display:"flex",justifyContent:"center"},loading:{height:"50px",opacity:1,transition:"all 0.5s cubic-bezier(.25,.8,.25,1)"},loadingHidden:{height:"0px",opacity:0,overflow:"hidden",transition:"all 0.5s cubic-bezier(.25,.8,.25,1)"}};class Z extends i.Component{constructor(...e){var t;super(...e),t=this,this.state={isLoading:!1,haveAnError:!1,results:[0,0,0]},this.refreshResults=Object(H.a)(M.a.mark((function e(){var a,i,o;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[0,0,0],i=!1,e.prev=1,t.setState({isLoading:!0,haveAnError:i}),e.next=5,t.getData();case 5:o=e.sent,a=o.results.map(e=>0|e),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i=!0;case 12:return e.prev=12,t.setState({isLoading:!1,haveAnError:i,results:a}),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))}componentWillMount(){y.flags.setResultListener(this.refreshResults),y.flags.startDiagnosis()}getData(){return Object(H.a)(M.a.mark((function e(){var t,a,i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.databaseFilter.convertDatabaseIdForNeticaCode(),a=[...y.questions.answers,t],e.next=4,V.process(a);case 4:return i=e.sent,e.abrupt("return",{results:[i.sr,i.r1,i.r2]});case 6:case"end":return e.stop()}}),e)})))()}getGreaterIntensityType(e){let t={index:-1,value:0};var a,i=Object(f.a)(e.entries());try{for(i.s();!(a=i.n()).done;){const e=Object(g.a)(a.value,2),i=e[0],o=e[1];o>t.value&&(t={index:i,value:o})}}catch(o){i.e(o)}finally{i.f()}return t.index}render(){const e=y.language.languageObject,t=e.system.reults,a=e.logs.loadingAlt,i=e.error.badResult,s=this.state,n=s.results,r=s.isLoading,l=s.haveAnError,d={loading:Object(c.a)(Object(c.a)({},K.loading),r?{}:K.loadingHidden)},p=this.getGreaterIntensityType(n);return o.a.createElement("div",{style:K.container},o.a.createElement("div",{style:K.loadingContainer},o.a.createElement("img",{style:d.loading,src:J.a,alt:a})),o.a.createElement(Y,{badResult:i,haveAnError:l}),o.a.createElement("div",{style:K.label},t.label),o.a.createElement(W,{resultData:t.noReaction,probability:n[v.NoReaction],opened:p===v.NoReaction}),o.a.createElement(W,{resultData:t.type1,probability:n[v.Type1],opened:p===v.Type1}),o.a.createElement(W,{resultData:t.type2,probability:n[v.Type2],opened:p===v.Type2}))}}const $={container:{height:"100%",flex:1,cursor:"pointer"},select:{backgroundColor:"white",display:"inline-block",padding:"5px",letterSpacing:".5px",border:"0",borderRadius:"2px",textDecoration:"none",color:"black",outline:"none",boxShadow:"0 1px 1px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",width:"100%",transition:"all 0.2s cubic-bezier(.25,.8,.25,1)",cursor:"pointer"},option:{},optionMouseOver:{}};class _ extends i.Component{constructor(...e){super(...e),this.state={isMouseHover:!1},this.changeMouseHover=()=>{this.setState({isMouseHover:!this.state.isMouseHover})}}render(){const e=this.props,t=e.action,a=e.options,i=this.state.isMouseHover,s=y.databaseFilter.databaseId,n={container:Object(c.a)(Object(c.a)({},$.container),i?$.optionMouseOver:{})};return o.a.createElement("div",{style:n.container,onMouseEnter:this.changeMouseHover,onMouseLeave:this.changeMouseHover},o.a.createElement("select",{style:$.select,onChange:e=>t(e.target.value),value:s},a.map((e,t)=>o.a.createElement("option",{key:t,style:$.option,value:e.id},e.value))))}}const ee={container:{boxShadow:"0 1px 1px 0 rgba(0, 0, 0, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)",borderRadius:"5px",position:"relative",display:"inline-block",width:"56px",height:"30px",margin:"0 10px 0 10px",backgroundColor:"rgb(154, 192, 71)",cursor:"pointer"},containerChecked:{backgroundColor:"#31A6FF"},innerBox:{position:"absolute",content:"",height:"22px",width:"22px",left:"4px",bottom:"4px",backgroundColor:"white",borderRadius:"5px",transition:".4s"},innerBoxChecked:{left:"30px"}};class te extends i.Component{constructor(...e){super(...e),this.state={isChecked:this.props.checked},this.toggleValue=()=>{const e=!this.state.isChecked;this.setState({isChecked:e}),this.props.action(e)}}render(){const e=this.state.isChecked,t={container:Object(c.a)(Object(c.a)({},ee.container),e?ee.containerChecked:{}),innerBox:Object(c.a)(Object(c.a)({},ee.innerBox),e?ee.innerBoxChecked:{})};return o.a.createElement("div",{onClick:this.toggleValue,style:t.container},o.a.createElement("div",{style:t.innerBox}))}}const ae={container:{backgroundColor:"#B7E454",height:"60px",color:"rgb(80, 80, 80)",display:"flex",justifyContent:"space-between",alignItems:"center"},side:{display:"flex",alignItems:"center"},font:{fontWeight:"bold",margin:"0 10px 0 10px",color:"#505050"}};class ie extends i.Component{clearAnswers(){y.questions.clearAnswers(),y.flags.startDiagnosis()}render(){const e=y.language.languageObject.system.topBar,t=e.database,a=e.clearButton,i=e.rememberInformation;return o.a.createElement("div",{style:ae.container},o.a.createElement("div",{style:ae.side},o.a.createElement("div",{style:ae.font},t.label),o.a.createElement(_,{action:e=>y.databaseFilter.refreshDatabase(e),options:t.options})),o.a.createElement("div",{style:ae.side},o.a.createElement(S,{onClick:this.clearAnswers},a),o.a.createElement("div",{style:ae.font},i),o.a.createElement(te,{action:e=>y.flags.isToSaveData=e,checked:y.flags.isToSaveData})))}}const oe={container:{height:"100%",width:"100%"},content:{height:"96%",display:"grid",gridTemplateColumns:"7fr 3fr"}};class se extends i.Component{render(){return o.a.createElement("div",{style:oe.container},o.a.createElement(ie,null),o.a.createElement("div",{style:oe.content},o.a.createElement(j,null),o.a.createElement(Z,null)))}}const ne={background:{height:"100%",minHeight:"100%",display:"grid",gridTemplateRows:"1fr auto"},container:{display:"flex",flexDirection:"column",alignItems:"center"},content:{maxWidth:"1200px",width:"100%",flex:"1 0 auto",transition:"all 5s cubic-bezier(.25,.8,.25,1)"}};class re extends i.Component{render(){return o.a.createElement("div",{style:ne.background},o.a.createElement(r.a,null,o.a.createElement("div",{style:ne.container},o.a.createElement(w,null),o.a.createElement("div",{style:ne.content},o.a.createElement(l.b,{path:"/",component:()=>o.a.createElement(l.a,{to:"/home"})}),o.a.createElement(l.b,{path:"/home",component:k}),o.a.createElement(l.b,{path:"/system",component:se}),o.a.createElement(l.b,{path:"/article",component:O})),o.a.createElement(E,null))))}}n.a.render(o.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.78b08084.chunk.js.map