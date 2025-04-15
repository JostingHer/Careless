import { marked } from "marked";

export type TagTitle =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "original";

export const getHtmlSimpleCopy = (
    markdown: string = "",
    tagTitle: TagTitle = "original",
) => {
    const renderer = new marked.Renderer();
    if (tagTitle === "original") {
        renderer.heading = (data) => {
            return `<h${data.depth} class="a-title" >${data.text}</h${data.depth}>`;
        };
    } else {
        renderer.heading = (data) => {
            return `<${tagTitle} class="a-title" >${data.text}</${tagTitle}>`;
        };
    }

    renderer.paragraph = (data) => {
        return `<p class="p">${marked.parseInline(data.text)}</p>`;
    };

    marked.setOptions({ renderer });
    return marked(markdown);
};

export const getHtmlSimpleCopyWithLinkInTitle = (
    markdown: string = "",
    tagTitle: TagTitle = "p",
    slug: string,
) => {
    const renderer = new marked.Renderer();
    if (tagTitle === "original") {
        renderer.heading = (data) => {
            return `<h${data.depth} class="a-title" ><a href=${slug}>${data.text}</a></h${data.depth}>`;
        };
    } else {
        renderer.heading = (data) => {
            return `<${tagTitle} class="a-title" ><a href=${slug}>${data.text}</a> </${tagTitle}>`;
        };
    }

    marked.setOptions({ renderer });
    return marked(markdown);
};
