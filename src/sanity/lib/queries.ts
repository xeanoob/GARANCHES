import { client } from './client';

export async function getWines() {
    return await client.fetch(`*[_type == "wine"] {
    _id,
    name,
    subtitle,
    price,
    description,
    "image": image.asset->url,
    tags,
    alcohol,
    volume,
    allergens
  }`);
}

export async function getPageContent(page: string) {
    const content = await client.fetch(
        `*[_type == "pageContent" && page == $page]`,
        { page }
    );

    // Convert array of sections into a key-value object for easier use
    return content.reduce((acc: any, item: any) => {
        acc[item.section] = {
            title: item.title,
            content: item.content,
            image: item.image
        };
        return acc;
    }, {});
}
