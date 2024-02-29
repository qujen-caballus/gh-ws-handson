# ベースイメージとしてNode.jsの公式イメージを使用
FROM node:14

# アプリケーションのファイルを含むディレクトリを作成
WORKDIR /usr/src/app

# アプリケーションの依存関係ファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションが使用するポートを指定
EXPOSE 5000

# アプリケーションを起動
CMD ["node", "server.js"]