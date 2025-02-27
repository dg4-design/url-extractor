# URL 抽出器テスト

このディレクトリには、URL 抽出器プロジェクトのテストファイルが含まれています。

## テストファイル

- `urlExtractor.test.js` - URL を抽出する機能のテスト
- `weblocGenerator.test.js` - Webloc ファイル生成機能のテスト

## テストの実行

以下のコマンドでテストを実行できます：

```bash
bun test
```

特定のテストファイルのみを実行する場合は、ファイル名を指定します：

```bash
bun test tests/urlExtractor.test.js
```

## テストの内容

### urlExtractor.test.js

URL テキストから URL を抽出する機能のテストです：

- 空のテキストの処理
- 単一 URL の抽出
- 複数 URL の抽出
- 連続した URL の分離
- 無効な URL の処理
- 重複 URL の除去

### weblocGenerator.test.js

Webloc ファイル生成機能のテストです：

- XML 内容の生成
- 特殊文字のエスケープ処理
- ファイル名の生成
