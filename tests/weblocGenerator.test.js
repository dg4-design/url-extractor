import { expect, test, describe } from "bun:test";
import { createXmlContent, generateFileName } from "../src/utils/weblocGenerator.js";

describe("createXmlContent", () => {
  test("基本的なURLに対して正しいXMLを生成する", () => {
    const url = "https://example.com";
    const xml = createXmlContent(url);

    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xml).toContain('<plist version="1.0">');
    expect(xml).toContain("<key>URL</key>");
    expect(xml).toContain(`<string>${url}</string>`);
  });

  test("特殊文字を含むURLを正しくエスケープする", () => {
    const url = "https://example.com/?q=a&b=c<d>e\"f'g";
    const xml = createXmlContent(url);

    expect(xml).toContain("<string>https://example.com/?q=a&amp;b=c&lt;d&gt;e&quot;f&apos;g</string>");
  });
});

describe("generateFileName", () => {
  test("URLからドメイン部分を抽出してファイル名を生成する", () => {
    const url = "https://example.com/path?query=123";
    const fileName = generateFileName(url);

    expect(fileName).toContain("example_com_");
    expect(fileName.length).toBeGreaterThan(10); // タイムスタンプが含まれるため
  });

  test("サブドメインを含むURLから正しくファイル名を生成する", () => {
    const url = "https://sub.example.co.jp/index.html";
    const fileName = generateFileName(url);

    expect(fileName).toContain("sub_example_co_jp_");
  });

  test("プロトコルがないURLに対しても機能する", () => {
    const url = "example.com";
    // ドメインが抽出できない場合は"website"が使用される
    const fileName = generateFileName(url);

    expect(fileName).toContain("website_");
  });
});
