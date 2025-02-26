import { vi } from "vitest";

// テスト実行前にグローバルにクラスを定義
global.UrlExtractor = require("../js/urlExtractor");
global.WeblocGenerator = require("../js/webloc");
global.ThemeManager = require("../js/theme");

// JSZipのモック
vi.mock("jszip", () => {
  return {
    default: function () {
      return {
        file: vi.fn(),
        generateAsync: vi.fn().mockResolvedValue(new Blob()),
      };
    },
  };
});

// URLエクストラクターのテスト用インポート
import { extractUrls } from "../src/utils/urlExtractor";
global.extractUrls = extractUrls;

// Weblocジェネレーターのテスト用インポート
import { createXmlContent, generateFileName } from "../src/utils/weblocGenerator";
global.createXmlContent = createXmlContent;
global.generateFileName = generateFileName;
