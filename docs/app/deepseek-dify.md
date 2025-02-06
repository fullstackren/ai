# DeepSeek + Dify 本地部署私有化知识库

![DeepSeek + Dify 本地部署私有化知识库](./deepseek-dify/deepseek-dify.jpg)

背景：公司开发产品，由于产品特性不能对外开源，其使用文档也不开源，为了更好地进行技术支持，所以需要本地部署私有化知识库。

思路：下载 Dify 应用框架，通过 Docker 环境安装项目依赖。项目启动后，下载 ollama 本地服务模型和 DeepSeek-R1 模型，最后将模型部署到 Dify 应用框架中，这样就实现了本地部署私有知识库。

那就走着~

## 01 <br/>Dify 安装

### Dify 下载

[Dify](https://dify.ai/zh) 是一个开源的 AI 应用开发平台，它可以让开发者快速搭建自己的 AI 应用。打开官网，如下图：

![Dify](./deepseek-dify/dify.png)

点击 Github 图标，进入 Dify 项目 Github 地址，然后下载 ZIP 包，如下图：

![Dify Github](./deepseek-dify/dify-github.png)

### Dify 修改配置

Dify ZIP 包解压后，进入 dify-main 项目根目录 `dify-main/docker`，将 `.env.example` 复制一份，命名为 `.env`，打开 `.env` 文件，滚动条滚动到底部，新增如下内容：

```shell
# 启用自定义模型
CUSTOM_MODEL_ENABLED=true

# 指定 ollama 的 API 地址（根据配置环境调整 IP）
OLLAMA_API_BASE_URL=host.docker.internal:11434
```

## 02 <br/>Docker 安装

### Docker 下载

[Docker](https://www.docker.com/) 是一个开源的应用容器引擎，它可以让开发者将应用程序及其依赖项打包成一个可移植的容器，然后在任何支持 Docker 的平台上运行。如何下载 Docker，如下图：

![Docker](./deepseek-dify/docker.png)

### Docker 安装

安装 Docker 客户端后，如下图：

![](./deepseek-dify/docker-app.png)

### 项目依赖安装

进入 dify-main 项目根目录 `dify-main/docker`，执行如下命令：

```shell
docker compose up -d
```

终端命令行输出如下：

![终端命令行](./deepseek-dify/docker-compose-up-d.png)

也可以通过 Docker 客户端查看：

![Docker 客户端](./deepseek-dify/docker-compose-up-d-2.png)

### 项目查看

在地址栏输入 `127.0.0.1/install`，如下图：

![项目查看](./deepseek-dify/dify-setting.png)

点击用户中心，选择【设置】，弹框左侧菜单选择【模型供应商】，看到 Ollama 后，下面有个【添加模型】按钮，点击进入，如下图：

![ollama](./deepseek-dify/dify-ollama.png)

![添加模型](./deepseek-dify/dify-ollama-llm.png)

所以接下来，我们要下载 ollama 和 DeepSeek-R1 模型。

## 03 <br/>ollama 安装

### ollama 下载

[ollama](https://ollama.com/)是一个开源的本地模型服务，它可以让开发者在本地运行各种模型。如何下载 ollama，如下图：

![ollama](./deepseek-dify/ollama.png)

### ollama 安装

和普通应用安装一样，安装成功后，应用栏会出现一个小羊驼。

## 04 <br/>DeepSeek-R1 安装

### 识别下载 DeepSeek-R1 哪款模型

将本地电脑配置设备信息发给 [DeepSeek](https://chat.deepseek.com/)，然后 DeepSeek 会推荐给你一个适合的模型。

![本地电脑配置](./deepseek-dify/my-computer.png)

提示词如下，可参考：

> 我现在正在使用 ollama 部署 DeepSeek-R1 模型，但是模型分为 1.5b、7b、8b、14b、32b、70b、671b，我不知道该怎么选择适合我电脑配置模型了，我现在把我电脑的配置信息发给你，你帮我推荐一个适合我的模型。
>
> 我的电脑配置信息如下：
>
> - 芯片：Apple M2 Max
> - 内存：96 GB

![](./deepseek-dify/deepseek.png)

### DeepSeek-R1 模型下载

进入 [ollama](https://ollama.com/) 官网，点击 [DeepSeek-R1](https://ollama.com/library/deepseek-r1), 如下图：

![ollama](./deepseek-dify/ollama-deepseek-r1.png)

选择上一步你咨询 DeepSeek 推荐的模型，然后选择（我选择 32b，为了速度，我也选了 14b），然后点击右侧【复制】按钮。

![ollama-32b](./deepseek-dify/ollama-deepseek-r1-32b.png)

打开本地终端，粘贴刚刚复制的命令：

![本地终端-32b](./deepseek-dify/ollama-deepseek-r1-32b-download.png)

![本地终端-14b](./deepseek-dify/ollama-deepseek-r1-14b-download.png)

### Embedding 向量模型下载

后面会用到，这里一并下载了，这里推荐 [bge-m3](https://ollama.com/library/bge-m3) Embedding 向量模型, 点击【复制】按钮，如下图：

![ollama-bge-m3](./deepseek-dify/ollama-bge-m3.png)

打开本地终端，粘贴刚刚复制的命令：

![ollama-bge-m3-download](./deepseek-dify/ollama-bge-m3-download.png)


## 05 <br/>Dify 配置与使用

### 大模型配置


### Embedding 向量模型配置

需要配置之前下载的 bge-m3 Embedding 向量模型，配置如下图

![](./deepseek-dify/dify-ollama-bge-m3.png)

### 创建应用

选择【工作室】选项卡，点击【创建空白应用】，选择【聊天助手】，如下图：

1. 填写【应用名称/图标】
2. 填写描述
3. 点击创建

接着就进入应用空间，右上角可以看到是哪款大模型，可以切换模型。右侧【调试与预览】可以【提问】了：

### 创建知识库

1. 选择【知识库】选项卡，然后导入本地的文档，进入下一步。
2. 下方有个【索引方式】，有个【高质量（推荐）】选项初始是置灰的，但是这时候可以选中，是我们配置了 bge-m3 Embedding 向量模型，所以可以使用。
3. 其他配置默认，然后点击【保存并处理】


### 切换到创建的应用

1. 在【上下文】模块中，点击【添加】刚刚创建的知识库。
2. 在右侧【调试与预览】进行提问，提问与知识库相关内容。
3. 可继续追问。

