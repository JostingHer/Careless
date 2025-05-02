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

    renderer.image = ({ href, title, text }) => {
        let imageHtml = `<img class="image-markdown" src="${href}" alt="${text || ""}"`;

        if (title) {
            imageHtml += ` title="${title}"`;
        }

        imageHtml += `>`;

        return imageHtml;
    };

    renderer.code = ({ text }) => {
        return `<pre class="code-markdown">${text}</pre>`;
    };
    renderer.blockquote = ({ text }) => {
        return `<blockquote class="blockquote-markdown">${text}</blockquote>`;
    };

    renderer.link = ({ href, title, text }) => {
        let linkHtml = `<a class="link-markdown" href="${href}"`;

        if (title) {
            linkHtml += ` title="${title}"`;
        }

        linkHtml += `>${text}  </a>`;

        return linkHtml;
    };

    marked.setOptions({ renderer });
    return marked(markdown);
};
