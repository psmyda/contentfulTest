import { createClient } from "contentful";

class ContentfulService {
    contentfulClientApi = createClient({
        accessToken: "nlYde6hGa_MS0B0Ip1pMMQFGs0icI_ntabFjMhrjaUw",
        space: "q0fnx0gj00da"
    });

    getEntries = async () => {
        const response = await this.contentfulClientApi.getEntries({
            content_type: "accordion",
            include: 2
        });

        return response.items[0].fields;
    }
}

export default new ContentfulService();
