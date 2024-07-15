import { wrapText } from "./wrapText";

export function generateTitle(ctx: any, title: string, canvasWidth: number) {
    ctx.font = "30px Arial";
    ctx.fillText(title, canvasWidth / 2, 100);
}

export function generateContent(ctx: any, content: string, canvasWidth: number) {

    ctx.font = "bold 28px Arial";
    let contentWidth = wrapText(ctx, content, canvasWidth / 2, 150, 550, 28)

    return contentWidth
}

export function generateAuthor(ctx: any, author: string, canvasWidth: number, contentWidth: number) {

    ctx.font = "16px Arial";
    ctx.fillText(author, canvasWidth / 2, contentWidth + 50);
}

export function generateFooter(ctx: any) {
    ctx.font = "16px Arial";
    ctx.textAlign = "start";
    ctx.fillStyle = "rgba(0, 0, 0, 0.40)";
    ctx.fillRect(
        0,
        270,
        ctx.measureText("Powered by HR DRONE").width + 20,
        30,
    );
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Powered by HR DRONE", 10, 290);
}