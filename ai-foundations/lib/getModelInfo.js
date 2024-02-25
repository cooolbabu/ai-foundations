import { readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getModelInfo(slug) {
  const text = await readFile(`./content/ai-models/${slug}.md`, "utf8");

  const {
    content,
    data: { title, provider, externalUrl },
  } = matter(text);

  const body = marked(content, { headerIds: false, mangle: false });

  return { title, provider, externalUrl, body };
}

export async function getAIModelNames() {
  const files = await readdir("./content/ai-models", "utf8");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));

  //console.log("Slugs: ", slugs);
  return slugs;
}
