"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTitle = generateTitle;
exports.generateContent = generateContent;
exports.generateAuthor = generateAuthor;
exports.generateFooter = generateFooter;
const wrapText_1 = require("./wrapText");
function generateTitle(ctx, title, canvasWidth) {
    ctx.font = "30px Arial";
    ctx.fillText(title, canvasWidth / 2, 100);
}
function generateContent(ctx, content, canvasWidth) {
    ctx.font = "bold 28px Arial";
    let contentWidth = (0, wrapText_1.wrapText)(ctx, content, canvasWidth / 2, 150, 550, 28);
    return contentWidth;
}
function generateAuthor(ctx, author, canvasWidth, contentWidth) {
    ctx.font = "16px Arial";
    ctx.fillText(author, canvasWidth / 2, contentWidth + 50);
}
function generateFooter(ctx) {
    ctx.font = "16px Arial";
    ctx.textAlign = "start";
    ctx.fillStyle = "rgba(0, 0, 0, 0.40)";
    ctx.fillRect(0, 270, ctx.measureText("Powered by HR DRONE").width + 20, 30);
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Powered by HR DRONE", 10, 290);
}
//# sourceMappingURL=index.js.map