import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "fzopfy6n",
  dataset: "production",
  apiVersion: "1",
  useCdn: true,
  token:
    "skfJFJcgo1zSkT7UEgpOBqm76hWVOFVIeMLHLLIt5GWnDR8t1DKtclTEX3WhwpJUIxunvY3YEb3Q1kc7Jns0pDPPYgNiVx9TJqHcav8zEo9hOhT5O7CHbYIFib8eKxdXOFZdSpzikZJbi0PuqfIADjmFAk83WauZ6gKna5KhAzyxCVDLVuAn",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
