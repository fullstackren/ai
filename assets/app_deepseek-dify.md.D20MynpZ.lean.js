import{_ as e,c as i,a8 as l,o as n}from"./chunks/framework.CEV-pc2D.js";const t="/assets/deepseek-dify.B957KBOX.jpg",p="/assets/ollama.CqH4L0ZP.png",o="/assets/deepseek-computer.BNfg6tk9.png",r="/assets/deepseek.D4L9EFu0.png",d="/assets/ollama-deepseek-r1.C7sLtDyj.png",s="/assets/ollama-deepseek-r1-32b.DovN-hRJ.png",c="/assets/ollama-deepseek-r1-32b-download.CPwUvkF8.png",g="/assets/ollama-deepseek-r1-14b-download.DCGPTtOz.png",m="/assets/ollama-deepseek-r1-qa.CobU5O9a.png",h="/assets/ollama-bge-m3.Dk8oqVne.png",k="/assets/ollama-bge-m3-download.8DrsHPaU.png",b="/assets/docker.CwynnJ3V.png",y="/assets/docker-app.n0qjz2yd.png",u="/assets/dify.CCXcKuNQ.png",f="/assets/dify-github.7qrgUOKd.png",_="/assets/docker-compose-up-d.BG1uk868.png",D="/assets/docker-compose-up-d-2.CMyVvoeb.png",E="/assets/dify-seeting_admin.DQE7-xIT.png",v="/assets/dify-manage.VUYRYrmK.png",q="/assets/dify-setting.CnxuppFR.png",z="/assets/dify-ollama.Nt2K6Wxv.png",C="/assets/dify-ollama-llm.DSVszU6b.png",w="/assets/dify-llama-deepseek-r1.Dq_QnF_1.png",P="/assets/dify-ollama-bge-m3.Cym_lZ2f.png",x="/assets/dify-app.CrESsT9-.png",S="/assets/dify-app-qa.gtZUOaEc.png",F="/assets/dify-doc-create.BGkmPKCO.png",B="/assets/dify-doc-setting.G5W3Cu1t.png",G="/assets/dify-doc-setting-2.CSXlrODl.png",O="/assets/dify-doc-setting-3.DJD15O0G.png",R="/assets/dify-doc-file.COpuMs5i.png",A="/assets/dify-doc-setting-4.D-ovS6K7.png",I="/assets/dify-doc-setting-5.XmCWCmKq.png",M="/assets/dify-doc-setting-6.DXrhEtzo.png",U="/assets/dify-doc-setting-7.8rOBGEIa.png",K="/assets/dify-workspace-1.CPinUoFg.png",L="/assets/dify-workspace-2.DVb9GijH.png",T="/assets/dify-workspace-3.BMtEMkjX.png",W="/assets/dify-workspace-4.DWXBn98S.png",N="/assets/dify-workspace-5.vqfSY2IH.png",V="/assets/dify-workspace-6.CbDxluG3.png",X="/assets/dify-qa.1D6lSog_.png",sa=JSON.parse('{"title":"DeepSeek + Dify 本地部署私有化知识库","description":"","frontmatter":{},"headers":[],"relativePath":"app/deepseek-dify.md","filePath":"app/deepseek-dify.md"}'),Z={name:"app/deepseek-dify.md"};function j(Y,a,H,J,$,Q){return n(),i("div",null,a[0]||(a[0]=[l('<h1 id="deepseek-dify-本地部署私有化知识库" tabindex="-1">DeepSeek + Dify 本地部署私有化知识库 <a class="header-anchor" href="#deepseek-dify-本地部署私有化知识库" aria-label="Permalink to &quot;DeepSeek + Dify 本地部署私有化知识库&quot;">​</a></h1><p><img src="'+t+'" alt="DeepSeek + Dify 本地部署私有化知识库" loading="lazy"></p><p><strong>背景</strong>：公司开发产品，由于产品特性不能对外开源，其使用文档也不开源，为了更好地进行技术支持，所以需要本地部署私有化知识库。另外 DeepSeek 由于使用人员较多，经常【服务器繁忙，请稍后再试】。</p><p><strong>思路</strong>：下载 DeepSeek-R1 模型，再下载 Dify 应用框架，在 Dify 中配置大模型，这样就实现了本地部署私有知识库。由于 DeepSeek-R1 模型下载需要 ollama 命令下载、Dify 项目需要再 Docker 环境安装项目依赖、所以需要先下载 ollama 和 Docker。</p><p>那就走着~</p><h2 id="_01-ollama-下载与安装" tabindex="-1">01 <br>ollama 下载与安装 <a class="header-anchor" href="#_01-ollama-下载与安装" aria-label="Permalink to &quot;01 &lt;br/&gt;ollama 下载与安装&quot;">​</a></h2><p><strong>ollama 下载</strong></p><p><a href="https://ollama.com/" target="_blank" rel="noreferrer">ollama</a>是一个开源的本地模型服务，它可以让开发者在本地运行各种模型。如何下载 ollama，如下图：</p><p><img src="'+p+'" alt="ollama" loading="lazy"></p><p><strong>ollama 安装</strong></p><p>和普通应用安装一样，安装成功后，应用栏会出现一个小羊驼。</p><h2 id="_02-deepseek-r1-下载" tabindex="-1">02 <br>DeepSeek-R1 下载 <a class="header-anchor" href="#_02-deepseek-r1-下载" aria-label="Permalink to &quot;02 &lt;br/&gt;DeepSeek-R1 下载&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>终端下载 DeepSeek-R1 模型期间，不能关闭 ollama 客户端（对，就是那个应用栏小羊驼）。</p></div><h3 id="识别下载-deepseek-r1-哪款模型" tabindex="-1">识别下载 DeepSeek-R1 哪款模型 <a class="header-anchor" href="#识别下载-deepseek-r1-哪款模型" aria-label="Permalink to &quot;识别下载 DeepSeek-R1 哪款模型&quot;">​</a></h3><p>将本地电脑配置设备信息发给 <a href="https://chat.deepseek.com/" target="_blank" rel="noreferrer">DeepSeek</a>，然后 DeepSeek 会推荐给你一个适合的模型。</p><img width="40%" alt="本地电脑配置" src="'+o+`"><p>提示词如下，可拷贝：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Tookf" id="tab-rfCChWK" checked><label data-title="macOS" for="tab-rfCChWK">macOS</label><input type="radio" name="group-Tookf" id="tab-CMmxZWY"><label data-title="windows" for="tab-CMmxZWY">windows</label></div><div class="blocks"><div class="language-markdown vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我现在正在使用 ollama 部署 DeepSeek-R1 模型，但是模型分为 1.5b、7b、8b、14b、32b、70b、671b，我不知道该怎么选择适合我电脑配置模型了，我现在把我电脑的配置信息发给你，你帮我推荐一个适合我的模型。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我的电脑配置信息如下：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">芯片：Apple M2 Max</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">内存：96 GB</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我现在正在使用 ollama 部署 DeepSeek-R1 模型，但是模型分为 1.5b、7b、8b、14b、32b、70b、671b，我不知道该怎么选择适合我电脑配置模型了，我现在把我电脑的配置信息发给你，你帮我推荐一个适合我的模型。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我的电脑配置信息如下：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">系统：windows 11</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">运行内存：32G</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">专用GPU显存：6G</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">共享GPU内存：15.9G</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div></div><p><img src="`+r+'" alt="deepseek" loading="lazy"></p><h3 id="模型下载" tabindex="-1">模型下载 <a class="header-anchor" href="#模型下载" aria-label="Permalink to &quot;模型下载&quot;">​</a></h3><p><strong>DeepSeek-R1 模型下载</strong></p><p>进入 <a href="https://ollama.com/" target="_blank" rel="noreferrer">ollama</a> 官网，点击 <a href="https://ollama.com/library/deepseek-r1" target="_blank" rel="noreferrer">DeepSeek-R1</a>, 如下图：</p><p><img src="'+d+'" alt="ollama" loading="lazy"></p><p>选择上一步你咨询 DeepSeek 推荐的模型，然后选择（我选择 32b，为了速度，我也选了 14b），然后点击右侧【复制】按钮。</p><p><img src="'+s+'" alt="ollama-32b" loading="lazy"></p><p>打开本地终端，粘贴刚刚复制的命令：</p><p><img src="'+c+'" alt="本地终端-32b" loading="lazy"></p><p><img src="'+g+'" alt="本地终端-14b" loading="lazy"></p><p>下载完成后，在本地终端输入你的问题，然后回车，专断也是能回答的，如下图。由于不是界面，操作很不方便，所以需要搭建 Dify，Dify 是什么，后面会介绍。</p><p><img src="'+m+'" alt="终端输入你的问题" loading="lazy"></p><p><strong>Embedding 向量模型下载</strong></p><p>后面会用到，这里一并下载了，这里推荐 <a href="https://ollama.com/library/bge-m3" target="_blank" rel="noreferrer">bge-m3</a> Embedding 向量模型, 点击【复制】按钮，如下图：</p><p><img src="'+h+'" alt="ollama-bge-m3" loading="lazy"></p><p>打开本地终端，粘贴刚刚复制的命令：</p><p><img src="'+k+'" alt="ollama-bge-m3-download" loading="lazy"></p><h2 id="_03-docker-下载与安装" tabindex="-1">03 <br>Docker 下载与安装 <a class="header-anchor" href="#_03-docker-下载与安装" aria-label="Permalink to &quot;03 &lt;br/&gt;Docker 下载与安装&quot;">​</a></h2><p><strong>Docker 下载</strong></p><p><a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker</a> 是一个开源的应用容器引擎，它可以让开发者将应用程序及其依赖项打包成一个可移植的容器，然后在任何支持 Docker 的平台上运行。如何下载 Docker，如下图：</p><p><img src="'+b+'" alt="Docker" loading="lazy"></p><p><strong>Docker 安装</strong></p><p>安装 Docker 客户端后，如下图：</p><p><img src="'+y+'" alt="" loading="lazy"></p><h2 id="_04-dify-项目下载与安装" tabindex="-1">04 <br>Dify 项目下载与安装 <a class="header-anchor" href="#_04-dify-项目下载与安装" aria-label="Permalink to &quot;04 &lt;br/&gt;Dify 项目下载与安装&quot;">​</a></h2><h3 id="dify-项目下载" tabindex="-1">Dify 项目下载 <a class="header-anchor" href="#dify-项目下载" aria-label="Permalink to &quot;Dify 项目下载&quot;">​</a></h3><p><a href="https://dify.ai/zh" target="_blank" rel="noreferrer">Dify</a> 是一个开源的 AI 应用开发平台，它可以让开发者快速搭建自己的 AI 应用。打开官网，如下图：</p><p><img src="'+u+'" alt="Dify" loading="lazy"></p><p>点击 Github 图标，进入 Dify 项目 Github 地址，然后下载 ZIP 包，如下图：</p><p><img src="'+f+`" alt="Dify Github" loading="lazy"></p><h3 id="dify-项目修改配置" tabindex="-1">Dify 项目修改配置 <a class="header-anchor" href="#dify-项目修改配置" aria-label="Permalink to &quot;Dify 项目修改配置&quot;">​</a></h3><p>Dify ZIP 包解压后，进入 dify-main 项目根目录 <code>dify-main/docker</code>，将 <code>.env.example</code> 复制一份，命名为 <code>.env</code>，打开 <code>.env</code> 文件，滚动条滚动到底部，新增如下内容：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用自定义模型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CUSTOM_MODEL_ENABLED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定 ollama 的 API 地址（根据配置环境调整 IP）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">OLLAMA_API_BASE_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">host.docker.internal:11434</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="dify-项目依赖安装" tabindex="-1">Dify 项目依赖安装 <a class="header-anchor" href="#dify-项目依赖安装" aria-label="Permalink to &quot;Dify 项目依赖安装&quot;">​</a></h3><p>进入 dify-main 项目根目录 <code>dify-main/docker</code>，执行如下命令：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>终端命令行输出如下：</p><p><img src="`+_+'" alt="终端命令行" loading="lazy"></p><p>也可以通过 Docker 客户端查看：</p><p><img src="'+D+'" alt="Docker 客户端" loading="lazy"></p><h3 id="dify-管理员设置" tabindex="-1">Dify 管理员设置 <a class="header-anchor" href="#dify-管理员设置" aria-label="Permalink to &quot;Dify 管理员设置&quot;">​</a></h3><ul><li>设置<strong>邮箱</strong>字段。</li><li>设置<strong>用户名</strong>字段。</li><li>设置<strong>密码</strong>字段。</li></ul><img width="60%" alt="管理员设置" src="'+E+'"><h3 id="dify-项目在线查看" tabindex="-1">Dify 项目在线查看 <a class="header-anchor" href="#dify-项目在线查看" aria-label="Permalink to &quot;Dify 项目在线查看&quot;">​</a></h3><p>在地址栏输入 <code>127.0.0.1/install</code>，如下图：</p><p><img src="'+v+'" alt="Dify 项目在线查看" loading="lazy"></p><h2 id="_05-dify-配置与使用" tabindex="-1">05 <br>Dify 配置与使用 <a class="header-anchor" href="#_05-dify-配置与使用" aria-label="Permalink to &quot;05 &lt;br/&gt;Dify 配置与使用&quot;">​</a></h2><h3 id="大模型配置" tabindex="-1">大模型配置 <a class="header-anchor" href="#大模型配置" aria-label="Permalink to &quot;大模型配置&quot;">​</a></h3><p><strong>DeepSeek-R1 模型配置</strong></p><p>点击用户中心，选择【设置】，如下图：</p><p><img src="'+q+'" alt="项目查看" loading="lazy"></p><p>设置弹框左侧菜单选择【模型供应商】，如下图：</p><p><img src="'+z+'" alt="ollama" loading="lazy"></p><p>看到 Ollama 后，点击其下面【添加模型】按钮，如下图：</p><p><img src="'+C+'" alt="添加模型" loading="lazy"></p><p>表单填写：</p><ul><li>【模型类型】字段选择 <code>LLM</code>。</li><li>【模型名称】字段填写 <code>deepseek-r1:32b</code>。 <ul><li>是否为 32b 模型，根据你下载的模型选择，这个可复制在 ollama 选择 DeepSeek-R1 时选择时拷贝的命令截图。</li><li><img src="'+s+'" alt="ollama-deepseek-r1-32b" loading="lazy"></li></ul></li><li>【模型地址】字段填写 <code>http://host.docker.internal:11434</code>。</li></ul><p>填写好的表单如下图：</p><p><img src="'+w+'" alt="大模型配置" loading="lazy"></p><p><strong>Embedding 向量模型配置</strong></p><p>配置界面还是按照之前步骤打开，之前下载的 bge-m3 Embedding 向量模型，配置如下图：</p><p>表单填写：</p><ul><li>【模型类型】字段选择 <code>Text Embedding</code>。</li><li>【模型名称】字段填写 <code>bge-m3</code>。</li><li>【模型地址】字段填写 <code>http://host.docker.internal:11434</code>。</li></ul><p>填写好的表单如下图：</p><p><img src="'+P+'" alt="Embedding 向量模型配置" loading="lazy"></p><h3 id="创建应用" tabindex="-1">创建应用 <a class="header-anchor" href="#创建应用" aria-label="Permalink to &quot;创建应用&quot;">​</a></h3><p>选择【工作室】选项卡，点击【创建空白应用】，选择【聊天助手】，如下图：</p><ul><li>填写【应用名称/图标】。</li><li>填写【描述】。</li><li>点击【创建】按钮。</li></ul><p><img src="'+x+'" alt="填写【应用名称/图标】" loading="lazy"></p><p>切换到【探索】选项卡，选择【工作助手】，如下图：</p><p><img src="'+S+'" alt="可以提问了" loading="lazy"></p><p>💯 ：）再也不用担心【服务器繁忙，请稍后再试】了。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>你会发现此时它是不知道 <code>@web-kits/table</code> 是什么，因为我们还没有创建和绑定私有文档文档。</p></div><h3 id="创建私有知识库" tabindex="-1">创建私有知识库 <a class="header-anchor" href="#创建私有知识库" aria-label="Permalink to &quot;创建私有知识库&quot;">​</a></h3><p>就是私有文档，这里以 Markdown 文档为例，其他文档格式也可以。</p><ul><li>选择【知识库】选项卡，点击【创建知识库】，如下图： <ul><li><img src="'+F+'" alt="创建知识库" loading="lazy"></li></ul></li><li>点击【创建一个空知识库】，填写【知识库名称】，如下图： <ul><li><img src="'+B+'" alt="创建一个空知识库" loading="lazy"></li></ul></li><li>点击【添加文件】，如下图： <ul><li><img src="'+G+'" alt="添加文件" loading="lazy"></li></ul></li><li>选择【导入已有文本】，点击【选择文件】，如下图： <ul><li><img src="'+O+'" alt="导入已有文本" loading="lazy"></li></ul></li><li>选择一个我本地还在开发的产品 <code>@web-kits/table</code>，外部网络是无法访问的，再点击下一步，如下图： <ul><li><img src="'+R+'" alt="dify-doc-file" loading="lazy"></li><li><img src="'+A+'" alt="私有文档" loading="lazy"></li></ul></li><li>有个【索引方式】，有个【高质量（推荐）】选项初始是置灰的，但是这时候可以选中，是我们配置了 bge-m3 Embedding 向量模型，所以可以使用。其他配置默认，然后点击【保存并处理】，如下图： <ul><li><img src="'+I+'" alt="私有文档" loading="lazy"></li></ul></li><li>会看到【文件已上传】，点击【前往文档 -&gt;】如下图： <ul><li><img src="'+M+'" alt="文件上传" loading="lazy"></li></ul></li><li>进入文档列表管理界面，可对文档做【重命名、删除等操作】，如下图： <ul><li><img src="'+U+'" alt="文件上传" loading="lazy"></li></ul></li></ul><h3 id="绑定私有知识库" tabindex="-1">绑定私有知识库 <a class="header-anchor" href="#绑定私有知识库" aria-label="Permalink to &quot;绑定私有知识库&quot;">​</a></h3><ul><li>切换到【工作室】选项卡，选择【工作助手】工作室，如下图： <img src="'+K+'" alt="工作室" loading="lazy"></li><li>进入【工作助手】工作室，在【上下文】模块中，点击【添加】刚刚创建的【工作助手-知识库】，点击保存，如下图： <img src="'+L+'" alt="工作室" loading="lazy"><img src="'+T+'" alt="工作室" loading="lazy"></li><li>然后【工作助手-知识库】就会出现在【上下文】模块中，点击右上角【发布】，在点击【更新】，如下图： <img src="'+W+'" alt="工作室" loading="lazy"><img src="'+N+'" alt="工作室" loading="lazy"></li><li>在右侧【调试与预览】进行提问，提问与知识库相关内容。 <img src="'+V+'" alt="工作室" loading="lazy"></li></ul><h2 id="_06-快乐地使用私有知识库" tabindex="-1">06 <br>快乐地使用私有知识库 <a class="header-anchor" href="#_06-快乐地使用私有知识库" aria-label="Permalink to &quot;06 &lt;br /&gt;快乐地使用私有知识库&quot;">​</a></h2><ul><li>切换到【探索】选项卡，选择【工作助手】，如下图：</li></ul><p>提问输入框输入： <code>什么是@web-kits/table?</code>，就会看到私有知识库的回答了，如下图：</p><p><img src="'+X+'" alt="快乐地使用私有知识库" loading="lazy"></p><p>（完，祝好~）</p><p>更多 Dify 的使用以及 AI 使用，欢迎在评论区留言。我会结和自己的节奏，持续更新。</p>',102)]))}const ea=e(Z,[["render",j]]);export{sa as __pageData,ea as default};
