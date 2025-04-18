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
    tagTitle: TagTitle = "h1",
) => {
    const renderer = new marked.Renderer();

    renderer.heading = ({ tokens, depth }) => {
        // Utiliza el parser inline para reconstruir el contenido del heading.
        const content = marked.Parser.parseInline(tokens);
        if (tagTitle === "original") {
            return `<h${depth} class="a-title">${content}</h${depth}>`;
        } else {
            return `<${tagTitle} class="a-title">${content}</${tagTitle}>`;
        }
    };

    marked.setOptions({ renderer });
    return marked(markdown);
};
