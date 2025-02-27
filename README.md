# URL クリッパー

テキスト内の URL を自動的に抽出して、Mac 向けの webloc 形式で保存できる Web アプリです。

## 🌟 特徴

- ✂️ テキストから URL を自動抽出
- 🔗 Mac 用の webloc 形式で URL を保存
- 📦 複数の URL をまとめて ZIP でダウンロード
- 🧹 クエリパラメータの削除オプション

## 💻 使い方

1. テキストボックスに URL を含むテキストを貼り付けるか入力する
2. 自動的に URL が抽出され、リストに表示される
3. 個別の URL を「保存」ボタンでダウンロードするか、「すべてまとめて保存」で ZIP ファイルとして一括ダウンロード

## 🔧 開発環境のセットアップ

```bash
# 依存関係のインストール
bun install

# 開発サーバーの起動
bun run dev

# ビルド
bun run build

# テスト実行
bun test
```

## 🚀 デプロイ

```bash
# ビルドとデプロイ
bun run build
bun run deploy
```

または GitHub Actions を使用して GitHub Pages に自動デプロイできます。

## 🛠️ 技術スタック

- [Astro](https://astro.build/) - ウェブフレームワーク
- [SolidJS](https://www.solidjs.com/) - UI コンポーネント
- [Bun](https://bun.sh/) - JavaScript ランタイム
- [JSZip](https://stuk.github.io/jszip/) - ZIP ファイル生成

## 📝 ライセンス

このプロジェクトはオープンソースとして公開されています。

## 自動デプロイテスト

main ブランチへのプッシュで自動的にデプロイされるかテストします。
